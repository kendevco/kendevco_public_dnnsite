/**
 * Compare two software version numbers (e.g. 1.7.1)
 * Returns:
 *
 *  0 if they're identical
 *  negative if v1 < v2
 *  positive if v1 > v2
 *  Nan if they in the wrong format
 *
 *  E.g.:
 *
 *  assert(version_number_compare("1.7.1", "1.6.10") > 0);
 *  assert(version_number_compare("1.7.1", "1.7.10") < 0);
 *
 *  "Unit tests": http://jsfiddle.net/ripper234/Xv9WL/28/
 *
 *  Taken from http://stackoverflow.com/a/6832721/11236
 */
function af_compareVersionNumbers(v1, v2) {

    var v1parts = v1.split('.');
    var v2parts = v2.split('.');

    function isPositiveInteger(x) {
        // http://stackoverflow.com/a/1019526/11236
        return /^\d+$/.test(x);
    }
    // First, validate both numbers are true version numbers
    function validateParts(parts) {
        for (var i = 0; i < parts.length; ++i) {
            if (!isPositiveInteger(parts[i])) {
                return false;
            }
        }
        return true;
    }
    if (!validateParts(v1parts) || !validateParts(v2parts)) {
        return NaN;
    }
    for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length === i) {
            return 1;
        }

        if (v1parts[i] === v2parts[i]) {
            continue;
        }
        if (Number(v1parts[i]) > Number(v2parts[i])) {
            return 1;
        }
        return -1;
    }
    if (v1parts.length != v2parts.length) {
        return -1;
    }
    return 0;
}

$(document).ready(function() {
    $(".af-init-onchange").each(function() {
        if ($(this).val())
            $(this).change();
    });
});

function ActionFormApi() {
    var openedFormPopups = {};

    /**
     * @type {ActionFormApi}
     */
    var _this = this;
    this.openPopupByName = function(name, qs, reinitForm, modalSettings) {
        var mid = $('[af-name="' + name + '"]').attr('data-moduleid');
        if (!_this.isFormPopupOpen(mid)) {
            setFormPopupState(mid, true);
            var opt = _this.getSettings(mid).options;
            opt.qs = qs;
            opt.openMode == 'Manual';
            opt.manualMode = 'Popup';
            
            checkIfInitialized(mid, opt, reinitForm, modalSettings);
        }
    }

    this.openPopupById = function(mid, qs, reinitForm, modalSettings) {
        if (!_this.isFormPopupOpen(mid)) {
            setFormPopupState(mid, true);
            var opt = _this.getSettings(mid).options;
            opt.qs = qs;
            opt.manualMode = 'Popup';
            opt.openMode = "Manual";

            checkIfInitialized(mid, opt, reinitForm, modalSettings);
        }
    }

    this.closePopupById = function(mid) {
        $('#dnn' + mid + 'popup').modal('hide');
    }

    this.initForm = function(mid, qs) {
        var opt = _this.getSettings(mid).options;
        opt.qs = qs;
        opt.openMode = "Always";
        initForm(opt);
    }

    this.showFormInline = function(mid, qs) {
        var opt = _this.getSettings(mid).options;
        opt.qs = qs;
        opt.openMode == 'Manual' && (opt.manualMode = 'Inline', initForm(opt));
        showFormInline(opt.moduleId, opt.rootElementClientId, opt.ctlUrl)
    }

    this.hideFormInline = function(mid) {
        var opt = _this.getSettings(mid).options;
        hideFormInline(opt.moduleId, opt.rootElementClientId)
    }

    this.showFormLoading = function(mid, _time) {
        $('#pnlContent' + mid + '> .common-loading-container').show();
        dnnsf.initStickyLoading('pnlContent' + mid);
    }

    this.hideFormLoading = function(mid, _time) {
        $('#pnlContent' + mid + '> .common-loading-container').hide();
    }

    this.showTabsProLoading = function(mid, _time) {
        dnnsf.events.broadcast('loadForm', { 'loading': true, moduleId: mid });
    }

    this.openFileManager = function(fileManagerId, settings, callBack) {
        var sc = angular.element('#' + fileManagerId + '>.file-manager').scope();
        sc.openFileManager(settings, callBack);
    }

    this.hideForm = function(mid) {
        var opt = _this.getSettings(mid).options;
        $('#' + opt.rootElementClientId + ' div').hide();
    }

    this.refreshField = function(moduleId, fieldId) {
        var formRoot = $('#dnn' + moduleId + 'root');

        if (!formRoot.length) {
            console.error("Could not find form module with id '" + moduleId + "'");
            return;
        }

        var formScope = formRoot.scope();
        var field = formScope.form.fields[fieldId];

        if (!field) {
            console.error("Field with id '" + fieldId + "' is not available in this form.")
            return;
        }

        formScope.getFieldData(field);
    }

    /**
     *
     * @param {number} mid The moduleId of the ActionForm module.
     * @returns {object}
     */
    this.getSettings = function(mid) {
        return dnnsf['af-' + mid];
    }

    /**
     *
     * @param {number} mid The moduleId of the ActionForm module.
     * @param {object} partialSettings An object with the properties that you want to update in the form settings.
     */
    this.patchSettings = function(mid, partialSettings) {
        var settings = _this.getSettings(mid) || {};
        $.extend(settings, partialSettings);
        dnnsf['af-' + mid] = settings;
    }

    /**
     * 
     * @returns {Set<string>}
     */
    function getLoadedJsIncludesSet() {
        return dnnsf['af_jsinc'] || (dnnsf['af_jsinc'] = new Set());
    }

    this.getLoadedJsIncludes = function() {
        return Array.from(getLoadedJsIncludesSet());
    }

    this.addLoadedJsIncludes = function(jsIncludes) {
        if(!jsIncludes || !jsIncludes.length) {
            return;
        }

        var set = getLoadedJsIncludesSet();
        jsIncludes.forEach(inc => {
            if(typeof inc === 'string') {
                set.add(inc.toLowerCase());
            }
        });
    }

    /**
     * This can be used to check if the specified ActionForm module is currently opened as a Popup.
     * @param {number} mid The moduleId of the ActionForm module.
     * @returns {boolean}
     */
    this.isFormPopupOpen = function(mid) {
        return !!openedFormPopups['formPopup' + mid];
    }

    this.getControl = function(moduleId, controlName) {
        var formRoot = $('#dnn' + moduleId + 'root');
        var formScope = formRoot.scope();
        return formScope.controls[controlName];
    }

    /**
     *
     * @param {number} mid
     * @param {boolean} state
     */
    function setFormPopupState(mid, state) {
        openedFormPopups['formPopup' + mid] = state;
    }

    function formPopupEvents(mid) {
        $('#dnn' + mid + 'popup').on('hidden.bs.modal', function() {
            openedFormPopups['formPopup' + mid] = false;
            $('#dnn' + mid + 'popup').off('hidden.bs.modal');
            $('#dnn' + mid + 'popup').off('shown.bs.modal');
        });
    }

    function showFormPopup(mid, settings, modalOptions) {
        var modalEl = $('#dnn' + mid + 'popup');

        modalOptions.focus = false;

        if (window.innerWidth > 767) {
            var modalContentWidth = settings.width.includes("px") ? settings.width : '100%';

            modalEl
                .on('shown.bs.modal', function() {
                    formPopupEvents(mid);
                })
                .find('.modal-dialog:first').css({
                    'width': settings.width,
                    'max-width': settings.width
                }).find('.modal-content').css({
                    'width': modalContentWidth,
                    'max-width': modalContentWidth
                });
        } else {
            modalEl.on('shown.bs.modal', function() {
                formPopupEvents(mid);
            })
        }

        if (window.bootstrap && window.bootstrap.Modal) {
            var myModal = new bootstrap.Modal(modalEl, modalOptions);
            myModal.show();
        } else {
            modalEl.modal().find('.modal-dialog:first').removeAttr('style');
        }
    }

    function showFormInline(mid, parent, url) {
        var target = $('[href="javascript: showFormInline' + mid + '();"]').attr('target');
        if (target === undefined || target === null || target === '' || target === '_self') {
            $("#" + parent + " .frontEndTemplate").slideUp('fast');
            $("#" + parent + " .form-root").slideDown('fast');
        } else if (target === '_blank') {
            var w = window.open();
            w.location = url;
        }
    }

    function hideFormInline(_mid, parent) {
        $("#" + parent + " .frontEndTemplate").slideDown();
        $("#" + parent + " .form-root").slideUp();
    }

    function checkIfInitialized(mid, opt, reinitForm, modalOptions) {
        modalOptions = modalOptions || {};
        if (reinitForm || $('#dnn' + mid + 'popup').length === 0) {
            initForm(opt, function() { showFormPopup(mid, opt.popupSettings, modalOptions) });
        } else {
            showFormPopup(mid, opt.popupSettings, modalOptions);
        }
    }

    // exports for backwards compatibility.
    this.__exports = {};
    this.__exports.showFormPopup = showFormPopup;
    this.__exports.showFormInline = showFormInline;
    this.__exports.hideFormInline = hideFormInline;
    this.__exports.checkIfInitialized = checkIfInitialized;
}

dnnsf.api.actionForm = new ActionFormApi();

// add the backwards compatibility exports to the global scope.
showFormPopup = dnnsf.api.actionForm.__exports.showFormPopup;
showFormInline = dnnsf.api.actionForm.__exports.showFormInline;
hideFormInline = dnnsf.api.actionForm.__exports.hideFormInline;
checkIfInitialized = dnnsf.api.actionForm.__exports.checkIfInitialized;
