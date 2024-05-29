(function ($, angular) {
    angular.module('blueimp.fileupload', []);
    angular.module('afControls', ['dnnsf', 'blueimp.fileupload']);

    var formRoot;
    const timeZoneOffset = new Date().getTimezoneOffset();
    // --------------------------------------------------------------------------------------------------------------------------------
    /// Start Action Form template specific code

    angular.module('afControls').factory('afSettings', function () {
        return {
            settings: {}
        }
    });

    function ActionFormCtrl($scope, $timeout, $sce, $cookieStore, $element, dataSources, dnnsf, afSettings, dnnsfHttp) {
        $scope.dnnsf = dnnsf;
        $scope.$sce = $sce;
        $scope.Math = Math;
        $scope.testTags = [];

        $scope.form = {
            fields: []
        };
        // get the field based on the html element.
        $scope.getField = function (htmlElement) {
            var field = _.find(_.values($scope.form.fields), function (_field) {
                return _field.id === htmlElement.id;
            });
            if (!field) return null;
            return field;
        };

        $scope.controls = {};
        $scope.registerControl = function (control) {
            var controlKey = control.field.TitleCompacted || control.field.name;
            $scope.controls[controlKey] = control;
        };

        $scope.parse = function (val) {
            if (val === undefined || val === null)
                return false;

            // if ($.isNumeric(val))
            //     return parseFloat(val);

            // remove comma - this only works for locales that use comma for thousands
            val = val.constructor === Array ? val.toString() : val.toString().replace(/,(\d{3})/g, '$1');
            if ($.isNumeric(val))
                return parseFloat(val);

            // sometimes the back-end returns "True" and it needs processing 
            if (val.toLowerCase() == "true")
                return true;

            if (val.toLowerCase() == "false")
                return false;

            return val;
        };

        $scope.load = function (mid) {
            formRoot = $('#dnn' + mid + 'root');
            var res = dnnsf.api.actionForm.getSettings(mid);
            if (res.Data.error) {
                alert('Error: ' + res.Data.error);
                return;
            }

            // todo: handle errors
            $scope.form = res.Data;
            $scope.settings = afSettings.settings = res.Settings;
            afSettings.localization = res.Localization;
            $scope.$$ = $; // just a hack to bypass angular

            $scope.form.dirty = function () {
                return formRoot.find('.ng-dirty').length > 0;
            }

            //closing the dropdown(multiple choice - dropdown with checkboxes) when clicking outside the container
            $(document).mouseup(function (e) {
                var container = $(".field-container.checkbox-list .card");
                if (!container.is(e.target)
                    && container.has(e.target).length === 0) {
                    $.each($scope.form.fields, function (i, field) {
                        if (field.show) {
                            setTimeout(function () {
                                field.show = false;
                                $scope.$apply();
                            }, 0);
                        }
                    });
                }
            });

            $.each(res.Settings.Fields, function (i, f) {
                res.Settings.Fields[f.TitleCompacted] = f;
            });

            var createOnChangeHandler = function (_scope, fieldId, onChangeScript) {
                var refresh = function () {
                    // this is an Anti-Pattern https://github.com/angular/angular.js/wiki/Dev-Guide%3A-Anti-Patterns
                    // it is recommended to use $timeout instead https://stackoverflow.com/a/18996042/499220
                    console.warn('The refresh() method is obsolete. Please use the $timeout service that is now provided in the context of the script execution.');

                    var scope = _scope;
                    while (scope) {
                        if (scope.$$phase) {
                            return;
                        }
                    }

                    _scope.$apply();
                };

                // Function constructor arguments information: Function(...args: string[], functionBody: string)
                // a function with arguments named and ordered by the provided `args` parameters and `functionBody` as executable code will be generated.
                // e.g. Function('form', 'scope', code) => function(form, scope) { /* code */ }
                var onChangeFunc = new Function('form', 'item', 'scope', 'refresh', '$timeout', onChangeScript);

                return function (form, item) {
                    try {
                        var field = $('#' + fieldId);

                        var allowSubmit = onChangeFunc.call(field, form, item, _scope, refresh, $timeout);

                        var fieldElement = field[0];
                        if (fieldElement) {
                            fieldElement.preventSubmit = false;
                            if (allowSubmit === false) {
                                fieldElement.preventSubmit = true;
                            }
                        }
                    } catch (e) {
                        console.error('Error running Action Form on change script', e);
                    }
                }
            }

            $.each($scope.form.fields, function (k, field) {

                if (field.onChange) {
                    // This will be called from `data-ng-change` attributes that are generated by xsl (e.g. attr-common.xsl)
                    field.onChange = createOnChangeHandler($scope, field.id, field.onChange);
                }

                if (field.options) {
                    // this is a dropdown, initialize ddValue and tbValue
                    field.ddValue = field.tbValue = field.value;

                    // add a getValue function on dropdowns, which will be used by validators to get the proper value for validation
                    if (_.find(['closed-multiple-dropdown', 'closed-multiple-checkbox', 'dropdown-checkboxes'],
                        function (type) { return field.type == type; })
                    ) {
                        field.getValue = function (value) {
                            return value.indexOf('/') === 0 ? value.substring(1) : value;
                        }
                    }

                    if (field.type == 'closed-multiple-checkbox' || field.type == 'dropdown-checkboxes') {
                        var selItems = field.value;
                        $.each(field.options, function (k, oItem) {
                            oItem.selected = $.inArray(oItem.value, selItems) != -1;
                        });
                    } else {
                        for (var i = 0; i < field.options.length; i++)
                            if (field.options[i].value == field.value) {
                                field.selected = field.options[i]; break;
                            }
                    }

                    // if it has "other" option and value doesn't exist in dropdown, switch dd to other
                    var other = $.grep(field.options, function (oOpt, iOpt) { return oOpt.filter == 'other'; });
                    other = other.length ? other[0] : null;

                    if (other && field.value && $.grep(field.options, function (oOpt, iOpt) { return oOpt.value == field.value; }).length == 0) {
                        field.ddValue = other.value;
                        field.otherValue = field.value;
                        field.selected = _.filter(field.options, function (o) { return o.filter == "other"; })[0];
                    }

                    if (field.type == 'address-region') {

                        $scope.setRegionFieldValue = function (source) { // source: 'dropdown' | 'textbox' | 'other'
                            switch (source) {
                                case 'dropdown': {
                                    if (field.ddValue !== 'Other') {
                                        // angularjs needs undefined to select the Empty option set in admin a.k.a. Title when no selection
                                        if (!field.ddValue) {
                                            field.ddValue = undefined;
                                        }
                                        field.tbValue = field.otherValue = '';
                                        field.value = field.ddValue;
                                        field.showOtherTextbox = false;

                                        if (field.value && field.countryField) {
                                            var selectedRegion = _.find($scope.countries[field.countryField].regions, function (obj) {
                                                return obj.value == field.value;
                                            });
                                            field.viewValue = selectedRegion ? selectedRegion.text : field.value;
                                        }
                                    } else {
                                        field.value = '';
                                        field.showOtherTextbox = true;
                                        field.otherValue = field.value;
                                    }
                                    break;
                                }
                                case 'textbox': {
                                    field.ddValue = field.otherValue = '';
                                    field.value = field.tbValue;
                                    break;
                                }
                                case 'other': {
                                    field.ddValue = 'Other';
                                    field.value = field.otherValue;
                                    field.showOtherTextbox = true;
                                    break;
                                }
                            }
                        }

                    }
                    // if it's a checkbox list, this is also needed
                    if (field.type == 'closed-multiple-checkbox' || field.type == 'dropdown-checkboxes') {
                        $scope.concatValues(field);
                        // also, watch for changes

                        $scope.$watch('form.fields.' + field.name + '.value', function () {
                            var selItems = field.value;
                            $.each(field.options, function (k, oItem) {
                                oItem.selected = $.inArray(oItem.value, selItems) != -1;
                            });
                        }, true);

                        field.checkAll = function () {
                            $.each(field.options, function (k, oItem) {
                                if (field.visible !== false)
                                    oItem.selected = true;
                            });
                            setTimeout(function () {
                                field.onChange && field.onChange($scope.form, field);
                                $("[name='" + field.id + "']").valid();
                            }, 0)
                        };

                        field.uncheckAll = function () {
                            $.each(field.options, function (k, oItem) {
                                if (field.visible !== false)
                                    oItem.selected = false;
                            });
                            setTimeout(function () {
                                field.onChange && field.onChange($scope.form, field);
                                $("[name='" + field.id + "']").valid();
                            }, 0)
                        };
                    } else {
                        $scope.$watch('form.fields.' + field.name + '.value', function (newValue, oldValue) {
                            // this allows setting the value of dropdown directly in the model
                            // but watch out if we have multiple entries with same value filtered away
                            newValue !== oldValue && setDropdownSelected(field, newValue);
                        });
                    }

                    if (field.linkedTo) {
                        if (!_.find(field.options, function (option) { return field.tbValue.constructor === Array ? $.inArray(option.value, field.tbValue) != -1 : option.value == field.tbValue })) {
                            field.value = '';
                        }

                        $.each($.map(field.linkedTo.split(','), function (x) { return x.trim() }), function (i, linkedField) {
                            $scope.$watch('form.fields.' + linkedField + '.value', function (newValue, oldValue) {

                                if (typeof newValue != 'undefined' && !angular.equals(newValue, oldValue)) {
                                    console.log($scope.form.fields[linkedField]);
                                    $scope.getFieldData(field);
                                }

                            });
                            $scope.$watch('form.fields.' + linkedField + '.options', function (newValue, oldValue) {

                                if (typeof newValue != 'undefined' && $scope.form.fields[linkedField].linkedTo) {
                                    $scope.getFieldData(field);
                                }

                            }, true);
                        });
                    }

                    // also group options by filters for easy iteration
                    if (field.options.length) {

                        // this is used by the permission grid
                        field.optionsFilters = []; // the object below loses order, so we're going to use this one for iterations
                        $.each(field.options, function (ii, oo) {
                            if ($.inArray(oo.filter, field.optionsFilters) == -1)
                                field.optionsFilters.push(oo.filter);
                        });

                        field.optionsNames = [];// the object below loses order, so we're going to use this one for iterations
                        field.optionsByName = {};
                        $.each(field.options, function (ii, oo) {
                            if (!field.optionsByName[oo.text]) {
                                field.optionsNames.push(oo.text);
                                field.optionsByName[oo.text] = [];
                            }
                            field.optionsByName[oo.text].push(oo);
                        });
                    }

                }

                if (field.type === 'open-dnn-editor') {
                    var dnnTextEditorIframe = $('#' + field.id);
                    if (dnnTextEditorIframe.length && dnnsf.canAccessIFrame(dnnTextEditorIframe[0]) && dnnTextEditorIframe[0].contentWindow.getContent) {
                        dnnTextEditorIframe.attr("data-content", field.value);
                        dnnTextEditorIframe[0].contentWindow.setContent(field.value);
                    }
                }
            });

            // done intializing fields, call on load handler if any
            if ($scope.form.onLoad) {
                eval('( function(form) { var $scope = scope = this; try { ' + $scope.form.onLoad + '; } catch (e) { console.log(\'Error running Action Form on load script\', e); } } )')
                    .call($scope, $scope.form);
            }

            if ($scope.form.SaveInCookie) {
                var saveInCookiesTimer;
                function saveInCookies() {
                    $timeout.cancel(saveInCookiesTimer);
                    saveInCookiesTimer = $timeout(function () {

                        var saveData = getFormData($element.closest('.form-root'));
                        dnnsfHttp($scope.settings.ModuleId, {
                            method: 'POST',
                            url: $scope.form.submitUrl + "&event=autosave&submission=" + ($scope.form.submissionKey || ''),
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            data: $.param(saveData)
                        }).then(function (response, status) {
                            $cookieStore.put($scope.form.SaveInCookie, response.data.submissionKey, { path: '/', expires: 365 });
                        });

                    }, 500);
                }

                $scope.$watch('form.fields', saveInCookies, true);
            }
            $scope.showLoader = false;
            formRoot.find('.c-form.hidden').removeClass('hidden');

            dnnsf.events.emit('formLoaded');

            setTimeout((_) => {
                $scope.checkBootstrapIsLoaded();
            }, 1000);
        };

        $scope.checkBootstrapIsLoaded = function () {
            if (!dnnsf.isEditor)
                return;

            if (afSettings.FormTemplateUiLibrary == 'Unknown')
                return; // we don't know

            var bs3Loaded = dnnsf.bootstrap3Loaded();
            var bs5Loaded = dnnsf.bootstrap5Loaded();

            if (bs5Loaded && !bs3Loaded)
                return; // already loaded

            if (!bs5Loaded) {
                var err = `This form template requires Bootstrap 5 to run correctly. <br />
                       Change the template in Form Settings or
                       include Bootstrap 5 in your skin or under Site Settings / Site Behavior / Default Pages / HTML Page Header Tags.
                       This warning is only shown to admins. <br />
                       <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Read more</a>.`;
            } else {
                var err = `Both Bootstrap 3 and Bootstrap 5 are loaded on the page, which might result in unexpected behavior.
                           Consider removing Bootstrap 3 or change the Form Template to match.<br />
                           This warning is only shown to admins.`;
            }

            $('#dnn' + afSettings.settings.ModuleId + 'root')
                .append(`<div class="af-warning" role="alert">${err}</div>`);
        };

        function setDropdownSelected(field, val) {
            for (var i = 0; i < field.options.length; i++)
                if (field.options[i].value == val) {
                    field.selected = field.options[i];
                    break;
                }
        }

        $scope.refreshCaptcha = function (mid, fieldName) {
            var field = $scope.form.fields[fieldName];

            dnnsfHttp($scope.settings.ModuleId, {
                method: 'GET',
                url: $scope.settings.apiUrl + 'RefreshField/Captcha?fieldId=' + field.fieldId + '&fieldName=' + fieldName,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function (response) {
                $timeout(function () {
                    $scope.form.fields[fieldName].value = response.data.CaptchaEncrypted;
                    $('#dnn' + mid + fieldName + 'captchaenc').val(response.data.CaptchaEncrypted);
                    $('#dnn' + mid + 'root').find("img[data-fieldid=" + field.fieldId + "]").attr('src', response.data.ImageUrl);
                });
            });
        }

        $scope.getFieldData = function (field) {
            $timeout(function () {
                // get list from server
                var saveData = getFormData($element.closest('.form-root'));
                field.$_loading = true;

                dnnsfHttp($scope.settings.ModuleId, {
                    method: 'POST',
                    url: $scope.form.getItemsUrl + "&fieldId=" + $scope.form.fields[field.name].fieldId + '&fieldName=' + field.name,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: $.param(saveData)
                }).then(function (result) {
                    var data = result.data;
                    $('#' + field.id).closest('.field-container')
                        .removeClass('has-error')
                        .find('span.text-danger')
                        .html('');
                    if (data.error) {
                        data.validationErrors = [{ 'fieldId': field.name, 'message': data.error }];
                        delete data.error;
                        parseFormResponse2(formRoot, null, data);
                        field.$_loading = false;
                        field.options = [];
                        field.value = '';
                        return;
                    }
                    field.options = data;
                    var found = false;
                    for (var i = 0; i < field.options.length; i++)
                        if (field.tbValue.constructor === Array ? $.inArray(field.options[i].value, field.tbValue) != -1 : field.options[i].value == field.tbValue) {
                            field.selected = field.options[i];
                            if (field.tbValue.constructor === Array) {
                                $.each(field.tbValue, function (i, v) {
                                    $.each(field.options, function (j, k) {
                                        k.value == v && (field.options[j].selected = true);
                                        found = true;
                                    });
                                });
                            } else {
                                _.forEach(field.options, function (option, index) {
                                    if (option.value === field.tbValue) {
                                        option.selected = true;
                                        found = true;
                                        return false;
                                    }
                                });
                            }
                            field.value = field.tbValue; //need it to get 
                            break;
                        }
                    if (!found)
                        field.value = '';
                    $scope.concatValues(field);
                    field.$_loading = false;
                });
            });
        };

        $scope.concatValues = function (ctl) {
            if (!ctl.options)
                return;
            var vals = [];
            var texts = [];
            $.each(ctl.options, function (k, o) {
                if (o.selected && o.visible !== false) {
                    vals.push(o.value);
                    texts.push(o.text);
                }
            });
            ctl.value = vals;
            if (ctl.selectedItemsText)
                texts.length == 0
                    ?
                    ctl.text = afSettings.localization.dropdownNoSelection
                    :
                    ctl.text = afSettings.localization.dropdownSelectedBefore + ' ' + texts.length + ' ' + afSettings.localization.dropdownSelectedAfter;
            else
                texts.length == 0 ? ctl.text = afSettings.localization.dropdownNoSelection : ctl.text = texts.join(',');
        };

        // holds a list of region fields bound to each country
        $scope.countries = {};

        $scope.wireRegion = function (regionField, countryField) {
            if (!$scope.countries[countryField])
                $scope.countries[countryField] = { regionFields: [] };
            $scope.countries[countryField].regionFields.push(regionField);

            $scope.loadRegions(regionField, countryField, function () {
                // select current region by code or by name
                var field = $scope.form.fields[regionField];
                var regions = $scope.countries[countryField].regions;

                if (regions.length) {

                    for (var i = 0; i < regions.length; i++)
                        if (regions[i].value == field.value) {
                            $scope.form.fields[regionField].ddValue = regions[i].value;
                            return;
                        }
                    // check by text
                    for (var i = 0; i < regions.length; i++)
                        if (regions[i].text == field.value) {
                            $scope.form.fields[regionField].ddValue = regions[i].value;
                            return;
                        }
                    if (field.otherTextbox && $scope.initCountry) {
                        $scope.initCountry = false;
                        var isValueInOptions = $.grep(field.options, function (option, iOpt) { return option.value == field.value; }).length > 0;
                        if (!isValueInOptions && field.value) {
                            field.ddValue = 'Other';
                            field.otherValue = field.value;
                            field.showOtherTextbox = true;
                            return;
                        }
                    }
                    $scope.setRegionFieldValue('dropdown');
                }
            });
        };

        $scope.loadRegions = function (regionField, countryField, fnDone) {
            dnnsf.log('loadRegions', countryField, $scope.countries[countryField], $scope.form.fields[countryField]);

            $scope.$watch('form.fields.' + countryField, function () {
                if (!$scope.countries[countryField] || !$scope.form.fields[countryField])
                    return;

                $scope.countries[countryField].loading = true;

                var field = $scope.form.fields[regionField];
                var data = {};
                data[countryField] = $scope.form.fields[countryField].value;

                dnnsfHttp($scope.settings.ModuleId, {
                    method: 'POST',
                    url: $scope.form.getItemsUrl + "&fieldId=" + field.fieldId + '&fieldName=' + field.name,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: $.param(data)
                }).then(function (result) {
                    $scope.countries[countryField].loading = false;
                    $scope.countries[countryField].regions = result.data;
                    if ($scope.countries[countryField].regions.length) {
                        // reset all textboxes values
                        $.each($scope.countries[countryField].regionFields, function (i, regionField) {
                            $scope.form.fields[regionField].countryField = countryField;
                            if ($scope.form.fields[regionField]) {
                                $scope.form.fields[regionField].ddValue = "";
                                $scope.form.fields[regionField].tbValue = "";
                                $scope.form.fields[regionField].otherValue = "";
                            }
                        });
                    } else {
                        // reset all dropdown values
                        $.each($scope.countries[countryField].regionFields, function (i, regionField) {
                            if ($scope.form.fields[regionField]) {
                                $scope.form.fields[regionField].ddValue = "";
                                $scope.form.fields[regionField].tbValue = "";
                                $scope.form.fields[regionField].otherValue = "";
                            }
                        });
                    }

                    fnDone && fnDone();
                });
            }, true);

        };

        $scope.showSelected = function (node, selected, name) {
            if (selected) {
                $scope.form.fields[name].value = node.value;
                $scope.form.fields[name].text = node.text;
            } else {
                $scope.form.fields[name].value = "";
                $scope.form.fields[name].text = "";
            }
        }

        $scope.closeDropdown = function (e, name) {
            $scope.form.fields[name].showdrop = false;
            $scope.$apply();
        }

        $scope.uptStarRating = function (value, name) {
            $scope.form.fields[name].value = value;
        }

        $scope.updateField = function (field, val) { //used for dropdown with autocomplete and sortable-input
            $scope.form.fields[field].value = val;
            if ($scope.form.fields[field].options && $scope.form.fields[field].options.length) {
                setDropdownSelected($scope.form.fields[field], val);
            }
            $scope.form.fields[field].onChange && $scope.form.fields[field].onChange($scope.form, field);
        }
    }
    ActionFormCtrl.$inject = ['$scope', '$timeout', '$sce', '$cookieStore', '$element', 'dataSources', 'dnnsf', 'afSettings', 'dnnsfHttp'];

    var _scriptExecuter = (function () {
        var parseHtml = function (htmlValue) {
            var htmlElements = $($.parseHTML(htmlValue, null, true));
            var scriptTagElements = htmlElements.get().reduce(function (acc, el) {
                if (el.nodeName.toLowerCase() == "script") {
                    acc.push(el);
                } else {
                    $(el).find("script").each(function (idx, el2) { acc.push(el2); });
                }
                return acc;
            }, []);

            $(scriptTagElements).remove();
            htmlElements = htmlElements.filter(function (idx, el) { return el.nodeName.toLowerCase() != "script" });

            return {
                scriptElements: scriptTagElements,
                htmlElements: htmlElements.get()
            }
        };

        var fromScriptElements = function (scriptElements, evaluationOptions) {
            scriptElements = scriptElements || [];
            evaluationOptions = evaluationOptions || {};
            evaluationOptions.args = evaluationOptions.args || {};
            evaluationOptions.factoryArgs = evaluationOptions.factoryArgs || {};

            return scriptElements.reduce(function (acc, script) {
                if ($(script).attr('src')) {
                    return acc.then(function () {
                        return new Promise(function (resolve) {
                            var scriptSrc = $(script).attr('src');
                            $(script).removeAttr('src');

                            var documentHead = document.head;
                            if (evaluationOptions.attachExternalScriptsTo) {
                                documentHead = $(evaluationOptions.attachExternalScriptsTo)[0];
                            }

                            // we do not want to reject on failure, we should allow the rest of the scripts to execute regardless.
                            // we also use a converter to execute the script using globalEval with a monkey patched document object that
                            // substitutes evaluationOptions.attachExternalScriptsTo for the head so that dnnsf-embed properly adds the iframe in it's place.
                            $.ajax({
                                url: scriptSrc,
                                dataType: "script",
                                converters: {
                                    "text script": function (result) {
                                        return $.globalEval(result, undefined, {
                                            createElement: function (tagName, options) {
                                                var newEl = document.createElement(tagName, options);
                                                if (evaluationOptions.attachExternalScriptsTo && tagName.toLowerCase() === "script") {
                                                    Array.from(script.attributes).map(function (attr) { newEl.setAttribute(attr.name, attr.value); });
                                                }
                                                return newEl;
                                            },
                                            head: documentHead
                                        });
                                    }
                                }
                            }).then(resolve, resolve);
                        });
                    });
                }
                return acc.then(function () {
                    try {
                        var argNames = Object.keys(evaluationOptions.args)
                            .concat(Object.keys(evaluationOptions.factoryArgs));
                        var scriptFunc = new Function(argNames, $(script).text());

                        var argValues = Object.values(evaluationOptions.args)
                            .concat(Object.values(evaluationOptions.factoryArgs)
                                .map(function (argFact) { return argFact(); })
                            );

                        scriptFunc.apply(this, argValues);
                    } catch (err) {
                        console.error(err);
                    }
                });

            }, Promise.resolve())
        };

        var fromHtmlString = function (htmlValue, evaluationOptions) {
            var elements = parseHtml(htmlValue);

            if (!elements.scriptElements.length) {
                var promise = Promise.resolve(elements.htmlElements);
                promise.htmlElements = elements.htmlElements;
                return promise;
            }

            var executionPromise = fromScriptElements(elements.scriptElements, evaluationOptions);
            executionPromise.htmlElements = elements.htmlElements;
            return executionPromise;
        };

        var getHtmlString = function (htmlElements) {
            return htmlElements.map(function (el) {
                return el.nodeType === Node.TEXT_NODE
                    ? el.textContent
                    : el.outerHTML;
            }).join('')
        };

        return {
            parseHtml: parseHtml,
            fromScriptElements: fromScriptElements,
            fromHtmlString: fromHtmlString,
            getHtmlString: getHtmlString
        };
    })();

    var formEventsFactory = function (executionContext) {

        var onActionResult = function (actionResult) {
            var isConnected = executionContext.btnSettings.isConnected;

            if (isConnected && actionResult.validationErrors) {
                actionResult.connectedForms = executionContext.$btn.data('connectedForms');
            }

            parseFormResponse2(executionContext.formRoot, executionContext.$btn, actionResult);
            if (actionResult.validationErrors && executionContext.onDone) {
                executionContext.onDone(actionResult);
            }
        }

        return {
            onLoadComplete: function (loadResult) {
                var formRoot;
                var options = executionContext.options;
                var fnDone = executionContext.fnDone;

                $('#' + options.rootElementClientId).find('.af-alert').remove();
                options.hasErrors = false;

                if (loadResult.ResultType == "ActionResult") {
                    // the popup will not be opened because of the error/message
                    options.manualMode == "Popup" && (dnnsf.api.actionForm.isFormPopupOpen['formPopup' + options.moduleId] = false);
                    parseFormResponse(loadResult.ActionResult, {
                        error: function (err) {
                            options.hasErrors = true;
                            var pnlMessage = $('<div class="af-alert alert alert-danger"></div>').html(loadResult.ActionResult.Error);
                            $('#' + options.rootElementClientId).html($('<div class="frontEndTemplate"></div>').append(pnlMessage));
                        }
                    });
                }
                loadResult.Settings.apiUrl = options.apiUrl;
                loadResult.Settings.timeZoneOffset = timeZoneOffset;

                var processedLocalization = {};
                if (loadResult.Localization) {
                    var processingQueue = Object.entries(loadResult.Localization);
                    Object.assign(processedLocalization, loadResult.Localization);
                    while (processingQueue.length) {
                        var curr = processingQueue.shift();
                        var subkeys = curr[0].split(".");
                        if (subkeys.length > 1) {
                            if (curr[2]) {
                                var subObj = curr[2][subkeys[0]] || {};
                                curr[2][subkeys[0]] = subObj;
                                processingQueue.push([subkeys.slice(1).join("."), curr[1], subObj]);
                            } else {
                                var subObj = processedLocalization[subkeys[0]] || {};
                                processedLocalization[subkeys[0]] = subObj;
                                processingQueue.push([subkeys.slice(1).join("."), curr[1], subObj]);
                            }
                        } else if (curr[2]) {
                            curr[2][subkeys[0]] = curr[1];
                        }
                    }
                }
                dnnsf.api.actionForm.patchSettings(options.moduleId, Object.assign({}, loadResult, {
                    Localization: processedLocalization
                }));

                if (!$.isEmptyObject(loadResult.ActionResult) && loadResult.ActionResult.Content) {
                    formRoot = $(loadResult.ActionResult.Content);
                    var pnlMessage = $('<div class="af-alert alert alert-info"></div>').append(formRoot);
                    $('#' + options.rootElementClientId).append(pnlMessage);
                } else {
                    formRoot = $('#dnn' + options.moduleId + 'root');
                }

                loadResult.CssIncludes && loadResult.CssIncludes.forEach(function (cssPath) {
                    dnnsf.includeCss(cssPath);
                });

                var jsIncludesToLoad = [];
                if (loadResult.JsIncludes && loadResult.JsIncludes.length) {
                    var loadedJsIncludes = dnnsf.api.actionForm.getLoadedJsIncludes();
                    jsIncludesToLoad = Array.from(new Set(loadResult.JsIncludes)).filter(function(inc) {
                        return loadedJsIncludes.indexOf(inc.toLowerCase()) === -1;
                    });
                }
                
                if(jsIncludesToLoad.length) {
                    jsIncludesToLoad.forEach(function (jsPath, index, array) {
                        if (index !== array.length - 1) {
                            $.getScript(jsPath);
                        } else {
                            $.getScript(jsPath, function () {
                                initFormController(options, formRoot);
                                fnDone && fnDone();
                            });
                        }
                    });
                    dnnsf.api.actionForm.addLoadedJsIncludes(jsIncludesToLoad);
                } else {
                    initFormController(options, formRoot);
                    fnDone && fnDone();
                }
            },

            onFlushableActionResult: function (actionResult) {
                onActionResult(actionResult);
            },

            onFinalActionResult: function (finalActionResult) {
                var isConnected = executionContext.btnSettings.isConnected;

                var prevOnDone = executionContext.onDone;
                executionContext.onDone = function () {
                    prevOnDone && prevOnDone.apply(null, arguments);
                    prevOnDone = null;
                }

                onActionResult(finalActionResult);

                if (prevOnDone) {
                    prevOnDone(finalActionResult);
                }
                if (isConnected)
                    executionContext.$_scope.controls = {};

            }
        };
    };

    var initForm = function (options, fnDone) {
        var svcFramework = $.ServicesFramework(options.moduleId);
        options.apiUrl = svcFramework.getServiceRoot("DnnSharp/ActionForm");

        options.adminApiUrl = options.virtualDirectory + "/DesktopModules/DnnSharp/ActionForm/AdminApi.ashx";
        dnnsf.portalId = options.portalId;

        dnnsf.api.actionForm.addLoadedJsIncludes(options.loadedJsIncludes);
        delete options.loadedJsIncludes;

        //openMode: Always, Page, Popup, Inline, Manual
        var formSettings = dnnsf.api.actionForm.getSettings(options.moduleId);
        var queryString = $.extend(
            {},
            dnnsf.getUrlParts(location.search).query,
            formSettings && !$.isEmptyObject(formSettings.passQs) && formSettings.passQs,
            options.qs && !$.isEmptyObject(options.qs) && options.qs
        );
        dnnsf.api.actionForm.patchSettings(options.moduleId, { options: options });
        $('#' + options.rootElementClientId).addClass(options.cssName);
        $('#' + options.rootElementClientId).attr({ 'af-name': options.popupSettings.name, 'data-moduleid': options.moduleId }); //for openPopupByName()
        if (options.openMode != "Always" && !options.manualMode) {
            window['showFormPopup' + options.moduleId] = function () {
                dnnsf.api.actionForm.openPopupById(options.moduleId);
            };
            window['hideFormPopup' + options.moduleId] = function () {
                $('#dnn' + options.moduleId + 'popup').modal('hide')
            }
            window['showFormInline' + options.moduleId] = function () {
                dnnsf.api.actionForm.initForm(options.moduleId);
                showFormInline(options.moduleId, options.rootElementClientId);
            }
            window['hideFormInline' + options.moduleId] = function () {
                hideFormInline(options.moduleId, options.rootElementClientId);
            }
            if (!options.manualMode && options.openMode != "Always" && options.openMode != "Manual")
                $('#' + options.rootElementClientId).html($('<div class="frontEndTemplate"></div>').html(options.frontEndTemplate));

            return;
        } else {
            setTimeout(function () {
                options.showLoading && $('#' + options.rootElementClientId + ' > .common-loading-container').show();
                options.tabsProLoading && $('#' + options.rootElementClientId).closest('.tab-pane').hasClass('active') && dnnsf.events.broadcast('loadForm', { 'loading': true, moduleId: options.moduleId });
                dnnsf.initStickyLoading(options.rootElementClientId);
            }, 0);

            (!options.manualMode && options.openMode != "Always") &&
                $('#' + options.rootElementClientId).html($('<div class="frontEndTemplate"></div>').html(options.frontEndTemplate));
        }
        // ^^backward compatibility for showFormPopup, hideFormPopup, showFormInline, hideFormInline functions^^
        // getSettings
        $.extend(queryString, {
            'referrer': document.referrer,
            'openMode': options.openMode === "Manual" ? options.manualMode : options.openMode,
            '_url': document.URL
        });


        $.ajax({
            url: dnn.getVar("sf_siteRoot", "/") + "DesktopModules/MVC/DnnSharp/ActionForm/Load?" + $.param(queryString) + (options.dnnPageQuery ? '&' + options.dnnPageQuery : ''),
            method: "get",
            cache: false,
            headers: {
                "DNNSF-Time-Offset": timeZoneOffset,
                "ModuleId": options.moduleId,
                "TabId": options.tabId,
                "RequestVerificationToken": svcFramework.getAntiForgeryValue(),
            }
        })
            .done(function (formHtml) {
                var result = _scriptExecuter.parseHtml(formHtml);

                var existingFormRoot = $('#' + options.rootElementClientId).find('#dnn' + options.moduleId + 'root');
                if (existingFormRoot.length) {
                    $('#dnn' + options.moduleId + 'root').replaceWith(result.htmlElements);
                } else {
                    $('#' + options.rootElementClientId).append(result.htmlElements);
                }

                _scriptExecuter.fromScriptElements(result.scriptElements, {
                    args: {
                        events: formEventsFactory({
                            options: options,
                            fnDone: fnDone,
                        })
                    },
                    attachExternalScriptsTo: $('#' + options.rootElementClientId)
                });
            });
    }

    function initFormController(options, formRoot) {

        if (options.hasErrors) return;
        if (!formRoot.length || formRoot[0].initialized)
            return;

        formRoot[0].onFormSubmit = formRoot[0].onFormSubmit || [];
        formRoot[0].initialized = true;

        // init common features
        dnnsf.init($, options);

        var formServerInitSettings = dnnsf.api.actionForm.getSettings(options.moduleId);
        var localization = dnnsf.localization = formServerInitSettings.Localization;

        // call localization inside fileupload-validate
        dnnsf.useLocalization && dnnsf.useLocalization();

        var app = angular.module('ActionForm' + formRoot.attr('id'), ['ngSanitize', 'ngAnimate', 'dnnsf', 'afControls', 'loadOnDemand', 'ui.bootstrap', 'ui.bootstrap.datetimepicker']);

        var dynamicDependencies = ['ui.bootstrap.contextMenu', 'cp.ngConfirm'] //will be added if the js is loaded from input config
        $.each(dynamicDependencies, function (i, dep) {
            try {
                if (angular.module(dep))
                    app.requires.push(dep);
            } catch (e) { }
        });

        app.run(["$http", function ($http) {
            $http.defaults.headers.common["DNNSF-Time-Offset"] = timeZoneOffset;
        }]);
        app.controller('ActionFormCtrl', ActionFormCtrl);

        app.directive('hasRepeaters', [function () {
            return {
                restrict: 'A',
                priority: Number.MIN_SAFE_INTEGER,
                scope: false,
                link: function (scope) {
                    setTimeout(function () {
                        if (!scope.$root.repeaters) {
                            options.showLoading && $('#' + options.rootElementClientId + ' > .common-loading-container').hide();
                            options.tabsProLoading && dnnsf.events.broadcast('loadForm', { 'loading': false, moduleId: scope.settings.ModuleId });
                        }
                    }, 0)
                }
            }
        }]);

        app.directive('addCustomAttributes', [function () {
            return {
                restrict: 'A',
                scope: false,
                link: function (scope, element, attrs) {
                    if (scope.settings.Fields[attrs.afField]) {
                        var customAttributesList = scope.settings.Fields[attrs.afField].CustomAttributes;
                        customAttributesList.forEach(function (attribute) {
                            element.attr(attribute.name, attribute.value);
                        });
                    }
                }
            }
        }]);

        app.directive('repeatDone', [function () {
            return {
                restrict: 'AE',
                scope: false,
                link: {
                    pre: function (scope, element, attrs) {
                        scope.$root.repeaters = true;
                    },
                    post: function (scope, element, attrs) {
                        setTimeout(function () {
                            if (scope.$last) { // all are rendered
                                options.showLoading && $('#' + options.rootElementClientId + ' > .common-loading-container').hide();
                                options.tabsProLoading && dnnsf.events.broadcast('loadForm', { 'loading': false, moduleId: scope.settings.ModuleId });
                            }
                        }, 0);
                    }
                }
            }
        }]);

        app.directive('maxSelection', [function () {
            return {
                restrict: 'AE',
                scope: {
                    value: '=',
                    maxSelection: '=',
                    ngModel: '='
                },
                link: {
                    post: function (scope, element, attrs) {
                        scope.$watch('value', function (newValue, oldValue) {
                            if ((newValue !== oldValue && newValue.length === scope.maxSelection) || scope.maxSelection <= 0) {
                                element.attr('disabled', !scope.ngModel);
                            } else {
                                element.attr('disabled', false);
                            }
                        });
                    }
                }
            }
        }]);

        app.factory('dataSources', ['$http', 'dnnsf', function ($http, dnnsf) {
            return {
                get: function (settings, fnReady) {
                    var p = $.extend({}, settings, { Method: 'GetData', tabId: options.tabId, mid: options.moduleId, alias: options.alias });
                    $http({
                        method: 'GET',
                        url: options.adminApiUrl + '?' + $.param(p),
                        cache: true
                    }).then(function (response, status) {
                        fnReady && fnReady(response.data);
                    });
                }
            };
        }]);


        // the default cookieStore does not support path or expiration
        app.provider('$cookieStore', [function () {
            var self = this;
            self.defaultOptions = {};

            self.setDefaultOptions = function (options) {
                self.defaultOptions = options;
            };

            self.$get = function () {
                return {
                    get: function (name) {
                        var jsonCookie = $.cookie(name);
                        if (jsonCookie) {
                            return angular.fromJson(jsonCookie);
                        }
                    },
                    put: function (name, value, options) {
                        options = $.extend({}, self.defaultOptions, options);
                        $.cookie(name, angular.toJson(value), options);
                    },
                    remove: function (name, options) {
                        options = $.extend({}, self.defaultOptions, options);
                        $.removeCookie(name, options);
                    }
                };
            };
        }]);

        app.directive('dropdownWatch', ['$interval', function ($interval) { // resize "dropdown with checkboxes" based on content width and height
            return {
                restrict: 'A',
                scope: {
                    dropdownName: '=',
                    disableCheckboxes: '@'
                },
                controller: ['$scope', '$element', function ($scope, $element) {
                    $scope.dropdownName.show = false;
                    var dropdownPanel = $element.closest('.field-container').find(".dropdown-panel")
                    var disabled = $element[0].disabled;

                    if (disabled && $scope.disableCheckboxes === "True") {
                        $element.prop("disabled", false);
                    }
                    $scope.$watch("dropdownName.show", function (newVal, oldVal) {
                        if (!newVal)
                            return;
                        if (disabled && $scope.disableCheckboxes === "True") {
                            dropdownPanel.find('a')
                                .parent().addClass("dnnsf-disabled-checkboxes");//  disable 'select all' and 'clear all'

                            dropdownPanel.find('.normalCheckBox').each(function () {
                                $(this).prop("disabled", true).addClass("disabled")
                                    .parent().addClass("not-allowed");
                            });
                        }

                        var dropdownOpen = $interval(function () {
                            if (dropdownPanel.width() > 0) {
                                resizeDropdown(dropdownPanel, $scope.dropdownName);
                                $interval.cancel(dropdownOpen);
                            }
                        }, 50); //interval
                    });

                    function resizeDropdown(dropdownPanel, dropdownName) {
                        if (dropdownPanel.attr('data-window-width') == $(window).width())
                            return;
                        if (dropdownName.show) {
                            dropdownPanel.css('opacity', '0');
                            if (dropdownPanel.attr('data-window-width')) {
                                dropdownPanel.width(dropdownPanel.width() - 15); // this eliminates endless adding of padding when you resize the window
                                dropdownPanel.attr('style', '');
                            }
                            dropdownPanel.css('display', 'table');
                            var inputWidth = dropdownPanel.parent().prev().width();
                            var windowWidth = $(window).width();

                            dropdownPanel.attr('data-window-width', windowWidth);
                            dropdownPanel.css('display', 'inline-block'); // i took the width from display:table 
                            dropdownPanel.parent().width(inputWidth);
                            dropdownPanel.css('overflow-x', 'auto');
                            dropdownPanel.css('opacity', '1');
                        }
                    }; //resize
                }] //controller
            }; //directive return
        }]); //directive

        app.directive('enforceMinMaxNumber', [function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: true,
                link: function (scope, element, attrs, ngModel) {
                    scope.minNumber = parseFloat(attrs.minNumber);
                    scope.maxNumber = parseFloat(attrs.maxNumber);

                    scope.enforceMinMaxOnBlur = function (value) {
                        var numberValue = parseFloat(value);
                        var enforcedValue;

                        if (numberValue > scope.maxNumber) {
                            enforcedValue = scope.maxNumber;
                        }

                        if (numberValue < scope.minNumber) {
                            enforcedValue = scope.minNumber;
                        }

                        if (!enforcedValue) { return; }

                        ngModel.$setViewValue(enforcedValue);
                        ngModel.$render();

                        element.valid();
                    }
                }
            }
        }]);

        // wrapper for masked input
        app.directive('inputMask', function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    delete $.jMaskGlobals.translation['#'];
                    var label = attrs.placeholder || "";
                    var mask = attrs.inputMask.replace(/[0-9a-zA-Z]/g, '_');
                    var maskOptionsObject = {
                        translation: {
                            '9': {
                                pattern: /\d/, optional: true
                            },
                            'a': {
                                pattern: /[a-zA-Z]/
                            },
                            '*': {
                                pattern: /[0-9a-zA-Z]/
                            }
                        },
                        placeholder: label || mask
                    };

                    var parsedMaskOptions;

                    if (attrs.maskOptions) {
                        try {
                            parsedMaskOptions = JSON.parse(attrs.maskOptions);
                        } catch (error) {
                            console.error("Couldn't parse JSON in " + attrs.afFieldTitle + " Mask Options")
                        }
                    } else {
                        parsedMaskOptions = {}
                    }

                    $(el).mask(attrs.inputMask, $.extend(maskOptionsObject, parsedMaskOptions));

                    el.on('focus', function () {
                        el.attr('placeholder', mask);
                    })
                    el.on('keyup blur', function () {
                        label && el.attr('placeholder', label);
                        el.trigger('change');
                    });
                    if (scope.form.fields[attrs.afField].value) {
                        setTimeout(function () {
                            el.trigger('input');
                        }, 0);
                    }
                }
            };
        });

        // wrapper for masked input
        app.directive('onblur', function () {
            return {
                restrict: 'A',
                scope: {
                    onblur: '&'
                },
                link: function (scope, el, attrs) {
                    $(el).parents('.element-area:first').click(function (e) {
                        e.stopPropagation();
                    });
                    $(document).click(function () {
                        scope.onblur();
                        scope.$apply();
                    });
                }
            };
        });

        // DOM wathcher
        app.directive('domWatch', function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    $(el).on(attrs.domWatch, function () {
                        scope.$eval(attrs.ngModel + "='" + el.val() + "'");
                        scope.$apply();
                    });
                }
            };
        });

        // this directive knows to bind a value to a html control, but only when this value exists
        app.directive('afBindvalue', ['$compile', '$timeout', '$parse', function ($compile, $timeout, $parse) {
            return {
                restrict: 'A',
                scope: false,
                require: 'ngModel',
                link: function (scope, element, attrs, ngModel) {
                    // if it's not an input element, define a new render function
                    if (element.filter(':input').length == 0) {
                        ngModel.$render = function () {
                            if (ngModel.$viewValue === undefined || ngModel.$viewValue === null)
                                return;
                            if (!element.hasClass('model-only'))
                                element.html(ngModel.$viewValue);
                        };
                    }

                    scope.$watch(attrs.afBindvalue, function (value) {
                        if (!scope.form.fields || !scope.form.fields[attrs.afField])
                            return;

                        var field = scope.form.fields[attrs.afField];
                        if (field.touched)
                            return;

                        if (attrs.afBindfrom) {
                            var options = scope.$eval(attrs.afBindfrom);
                            if (!options)
                                return;
                            var optionsFound = $.grep(options, function (o) { return o.value === value });
                            if (optionsFound.length > 0) {
                                ngModel.$setViewValue(optionsFound[0]);
                            };
                        }
                        else {
                            ngModel.$setViewValue(value);
                        }
                        ngModel.$render();
                    });
                }
            };
        }]);

        // initialize rich edits
        app.directive('afRichedit', ['$compile', '$timeout', '$parse', function ($compile, $timeout, $parse) {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModel) {
                    var fnInitRichEdit = function () {

                        if (!$(elm).is(':visible')) {
                            $timeout(fnInitRichEdit, 200);
                            return;
                        }

                        $(elm).wysiwyg({
                            autoGrow: false,
                            maxHeight: 600,
                            initialMinHeight: 50,
                            initialContent: '',
                            brIE: false,
                            replaceDivWithP: true,
                            events: {
                                save: function () {
                                    try {
                                        ngModel.$setViewValue(this.getContent());
                                    } catch (e) {
                                    }
                                }
                            }
                        });

                        // localize wysiwyg
                        $('.wysiwyg [role="menuitem"]').each(function () {
                            var l = localization['wysiwyg.' + $(this).attr('class')];
                            l && $(this).attr('title', l);
                        });


                        ngModel.$render = function () {
                            $(elm).wysiwyg('setContent', ngModel.$viewValue || '');
                        };
                        $(elm).width('100%');
                    };

                    $timeout(fnInitRichEdit, 100);

                }
            };
        }]);

        app.factory('scriptExecuter', [function () {
            return _scriptExecuter;
        }]);

        app.directive('afBindHtml', ['$sce', 'scriptExecuter', function ($sce, scriptExecuter) {
            return {
                restrict: 'A',
                scope: true,
                link: function (scope, element, attrs) {
                    scope.$watch(attrs.afBindHtml, function (value) {
                        if (!value) {
                            return;
                        }

                        var result = scriptExecuter.parseHtml(value);

                        var htmlStr = scriptExecuter.getHtmlString(result.htmlElements);
                        scope.afBoundHtml = $sce.trustAsHtml(htmlStr);

                        if (!element.data('afbindhtmlscriptsexecuted')) {
                            scriptExecuter.fromScriptElements(result.scriptElements, {
                                attachExternalScriptsTo: element
                            });
                            element.data('afbindhtmlscriptsexecuted', true);
                        }
                    });
                }
            }
        }]);

        // dnnsfAngularLock is just a quick hack to skip angualr initialization in some situations
        !window.dnnsfAngularLock && angular.bootstrap(formRoot, ['ActionForm' + formRoot.attr('id')]);
        var $_scope = angular.element(formRoot).scope();
        //formRoot[0].onFormSubmit = $_scope._registerToEvent['submit'];

        // --------------------------------------------------------------------------------------------------------------------------------
        // init popovers
        formRoot.find('span.popupOnHover').popover({ trigger: 'hover' });

        function findErrorElement(sourceElement, errorElementClass) {
            var errorElement = sourceElement.find(errorElementClass);

            if (!errorElement.length)
                errorElement = sourceElement.closest('.field-container').find(errorElementClass);

            if (!errorElement.length) {
                errorElement = sourceElement.closest('.field-container').siblings(errorElementClass);
            }

            return errorElement;
        }

        // setup validation plugin
        var validationSettings = {
            errorElement: 'span',
            errorClass: 'text-danger',
            highlight: function (element, errorClass) {
                $(element).parents('.field-container:first').addClass('has-error');
            },
            unhighlight: function (element, errorClass) {
                if ($(element).hasClass('ignore')) {
                    return;
                }
                $(element).removeAttr('aria-describedby');

                var fieldsGroup = element.attributes['class'] ? element.attributes['class'].value.match(/(group\d+-AtLeastOneIsFilled)/) : '',
                    AtLeastOneIsFilled = fieldsGroup ? $(element).closest('.form-root').find('.form-group .' + fieldsGroup[0] + ':not(.required)') : '';
                if (AtLeastOneIsFilled.length && !$(element).hasClass('required')) {
                    $.each(AtLeastOneIsFilled, function (index, input) {
                        if (input.type != 'checkbox' && input.type != 'radio') {
                            $(input).parent().removeClass('has-error');
                        } else {
                            $(input).closest('.form-group div.has-error').removeClass('has-error');
                        }
                    });
                    $(element).next('.text-danger').hide();
                }
                else { $(element).parents('.field-container:first').removeClass('has-error').find('.text-danger').not('.ignore').hide(); }
            },
            errorPlacement: function (error, element) {
                // accessibility
                var elementId = element.attr('id') || element.closest('.field-container').find('[data-ng-model]').attr('id')// file-upload;
                error.attr({ 'id': 'error-' + elementId, 'role': 'alert' });
                element.attr('aria-describedby', 'error-' + elementId);
                if (element.hasClass('multiple-choice-checkbox')) {
                    var parentElement = element.closest('.checkbox-list');
                    error.attr('id', 'error-' + parentElement.attr('id'));
                    element.attr('aria-describedby', 'error-' + parentElement.attr('id'));
                }
                // end accessibility

                var errPlace = findErrorElement(element, '.err-placeholder');
                if (errPlace.length) {
                    if (errPlace.find('span.text-danger').text() != error.text())
                        errPlace.append(error);
                } else {
                    if (element.is(':checkbox') || element.is(':radio')) {
                        element.parent().append(error);
                    } else {
                        element.next().is('.text-danger') ? element.next().replaceWith(error) : error.insertAfter(element.filter(function () {
                            return !element.closest('.field-container').hasClass('ng-hide')
                        }));
                    }
                    var tabParent = element.closest('.tab-pane');
                    tabParent.length && !tabParent.hasClass('active') && $('[href="#' + tabParent.attr('id') + '"]').addClass('has-error');
                }
            },
            success: function (element) {
                element.closest('.field-container').addClass("is-valid")
            },
            onkeyup: function (element) { return true },
            // numInput is for flatpickr
            ignore: '.ignore,:hidden,:disabled,.flatpickr-time .numInput',
        }

        if (options.onFocusoutValidation) {
            _.assign(validationSettings, {
                onfocusout: function (element) {
                    if ($(element).hasClass('ignore-focusout-validation'))
                        return true;
                    $(element).valid();
                }, onkeyup: $.noop
            }); // for 'true' you need a function, 'false' works}
        } else {
            _.assign(validationSettings, { onkeyup: function (element) { $(element).valid(); } }); // for 'true' you need a function, 'false' works}
        }

        formRoot.validate && formRoot.validate(validationSettings);

        // validate required upload files
        $.validator && $.validator.addMethod("required-file", function (value, element) {
            return value !== "" || $(element).scope().queue.length || $(element).scope().loadedFiles.length;
        });

        // validate required upload files
        $.validator && $.validator.addMethod("required-fromclass", function (value, element) {
            return $(element).hasClass('afvalid');
        });

        $.validator && $.validator.addMethod("required-cblist", function (value, element) {
            var group = $(element).attr('data-validation-group');
            var valid = false;
            $('[data-validation-group="' + group + '"]').each(function () {
                if (this.checked)
                    valid = true;
            });
            return valid;
        }, localization.validation.required);

        $.validator && $.validator.addMethod("required-ddwithcb", function (value, element) {
            return $(element).attr("data-val") !== "[]";
        }, localization.validation.required);

        $.validator && $.validator.addMethod("required-dnnsf", function (value, element) {

            if (element.nodeName.toLowerCase() === "select") {
                // could be an array for select-multiple or a string, both are fine this way
                var val = $(element).val();
                return val && val.length > 0;
            }
            if (this.checkable(element)) {
                return this.getLength(value, element) > 0;
            }

            if ($_scope.form.RequiredFieldAllowsWhiteSpace) {
                return value.length > 0;
            }
            else {
                return $.trim(value).length > 0;
            }
        }, localization.validation.required);

        // initialize password confirm
        formRoot.find('[data-password-confirm]').each(function () {
            $(this).rules("add", {
                equalTo: '#' + $(this).attr('data-password-confirm'),
                messages: {
                    equalTo: localization['validation.passwordNoMatch']
                }
            });
        });

        formRoot.find('[data-textbox-confirm]').each(function () {
            var firstField = $(this).attr('af-field-title');
            var secondField = $('#' + $(this).attr('data-textbox-confirm')).attr('af-field-title');
            $(this).rules("add", {
                equalTo: '#' + $(this).attr('data-textbox-confirm'),
                messages: {
                    equalTo: firstField + ' & ' + secondField + ' ' + localization['validation.fieldsDoNotMatch']
                }
            });
        });

        // fix width when printing
        if (formRoot.closest('#Table1').length) {
            formRoot.closest('#Table1').addClass('container')
                .parent().addClass(formRoot.attr('data-rootclass'));
            $('body').addClass('bstrap30 bstrap3-material');
        }

        //fix for when in pop-up
        if (formRoot.closest('.container').length == 0) {
            formRoot.closest('.phFormTemplate').addClass('container');
        }

        function parseVar(strVar) {
            if (!isNaN(parseInt(strVar)))
                return parseInt(strVar);

            if (!isNaN(parseFloat(strVar)))
                return parseFloat(strVar);

            if (strVar[0] == '[') {
                // looks like an array
                return eval(strVar.replace('\n', ''));
            }

            if (strVar == "false")
                return false;

            if (strVar == "true")
                return true;

            // just return it as string
            return strVar;
        }

        // load localized error messages
        for (var key in localization) {
            if (key.indexOf('validation.') == 0) {
                var relKey = key.substr('validation.'.length);
                if ($.validator)
                    $.validator.messages[relKey] = localization[key].indexOf('{0}') == -1 ? localization[key] : $.validator.format(localization[key]);
            } else if (key.indexOf('$.datepicker.') == 0 && $.datepicker) {
                var relKey = key.substr('$.datepicker.'.length);
                var s = {};
                s[relKey] = parseVar(localization[key]);
                $.datepicker.setDefaults(s);
            }
        }

        $('.modal').on('shown.bs.modal', function () {
            var x = 0;

            var checkModals = setInterval(function () {
                $('.modal:visible').each(function () {
                    var popup = $(this);
                    popup.find('.modal-dialog:first').css('z-index', popup.find('.modal-backdrop:first').css('z-index') + 1);
                    popup.after(popup.find('.modal-dialog:first').siblings('.modal-backdrop'));
                });
                if (++x === 5) {
                    window.clearInterval(checkModals);
                }
            }, 1000);
        });

        // init file upload
        formRoot.find('.file-upload').each(function () {
            this["aform"] = formRoot;
        });

        if (window.aform_incFileUplad) {
            if (!$().fileupload)
                return;

            formRoot.find('.file-upload').each(function () {

                if (!this.aform)
                    return; // not one of our fields

                var $root = $(this).parents('.fileupload-root:first');

                // redefined formRoot in this context
                var formRoot = this.aform;
                var _this = $(this);
                $root.find('.files').empty().append($('<p/>').text(angular.element(formRoot).scope().form.fields[_this.attr('data-af-field')].value));

                // hack for DNN 7 to leave our upload field alone
                var btn = $root.find('.fileinput-button');
                if (btn.find('.dnnInputFileWrapper').size() > 0) {
                    btn.find('input').appendTo(btn);
                    btn.find('.dnnInputFileWrapper').remove();
                } else {
                    if (btn.find('input')[0])
                        btn.find('input')[0].wrapper = 'hack';
                }

            })

            // once is enough
            window.aform_incFileUplad = false;
        }

        //This is a fix for Xcilion skin for stoping changing the portal on EnterKey
        $(document).on('keydown', 'input:text.preventdefault', function (evt) {
            if (evt.keyCode == 13) {
                evt.preventDefault();
                evt.stopImmediatePropagation();
            }
        });

        $('body').on('keydown', 'input:text:not(.preventdefault),input:password:not(.preventdefault)', function (evt) {
            var btn = $(evt.currentTarget).closest('.form-root').find('.submit[data-default-button=on]:first');
            if (evt.keyCode == 13 && btn.length) {
                btn.click();
                evt.preventDefault();
            }
        });

        formRoot.on('click', ".form-button", function () {
            submitForm(this);
        });

        function submitForm(el, fnDone, qs) {
            var fieldsToIgnoreSelectors = ':disabled, .ignore';// ignore dropdown with checkboxes 
            $_scope.fieldsToIgnoreClass = '';

            if ($_scope.settings.SubmitHiddenFields.Value) {
                fieldsToIgnoreSelectors += ',.ignore-submit-hidden-fields, .richedit'
            } else {
                fieldsToIgnoreSelectors += ',:hidden';
                $_scope.fieldsToIgnoreClass = '.ng-hide';
            };

            var connectedForms = {};
            var btnSettings = $_scope.settings.Fields[$(el).attr('data-name')];
            if (!btnSettings) { //submit from tabsPro event
                btnSettings = {
                    'isConnected': false
                }
            }
            else {
                var tokenizedConnectedForms = $_scope.form.fields[btnSettings.TitleCompacted].connectedForms;
                btnSettings.isConnected = tokenizedConnectedForms && tokenizedConnectedForms.length > 0;
                btnSettings.isConnected && (connectedForms = tokenizedConnectedForms);
            }
            var _this = el;
            // reset
            formRoot.find(".server-error").html("").hide();
            var causesValidation = $(_this).attr('data-validation') == 'on';
            var fieldsToValidate = formRoot.find('input,textarea,select,.checkbox-list').not(fieldsToIgnoreSelectors);
            $.each(connectedForms, function (i, connectedForm) {
                var formControls = {};
                formControls.fields = angular.element('#dnn' + connectedForm.FormId + 'root').scope().controls;
                if (!$.isEmptyObject(formControls.fields)) {
                    $_scope.controls["#dnn" + connectedForm.FormId] = formControls;
                }
                // formControls.fields.length && $_scope.controls.push(formControls);
                var formEl = $('#dnn' + connectedForm.FormId + 'root');
                var fields = formEl.find('.field-container').not($_scope.fieldsToIgnoreClass).find('input,textarea,select,.checkbox-list').not(fieldsToIgnoreSelectors);
                if (fields.length) {
                    causesValidation && formEl.is(':visible') && fields.valid();
                }

                formEl.bind('fileuploadsubmit', function (e, data) {
                    // Sending the all form fields in fileUpload request
                    var currentData = getFormData(formEl);
                    data.formData = currentData;
                });

            });
            if (causesValidation) {
                fieldsToValidate.each(function (index, input) {
                    if (!$(input).attr('keyup-listener')) { // we don't need duplicate listeners
                        $(input).attr('keyup-listener', 'true')
                        $(input).on("keyup change", function (event) { // add an event listener because the plugin doesn't work as it should
                            $(event.target).valid();
                        });
                    }
                });
            }
            if (causesValidation && fieldsToValidate.size() && !fieldsToValidate.valid()) {
                refreshCaptchaOnError($_scope);

                formRoot.find('.has-error:first').find('input,textarea,select').focus();
                $('.has-error').first()[0].scrollIntoView({ behavior: "smooth", block: "center" });
                fnDone && fnDone({ value: false, refresh: angular.element(formRoot).scope().settings.TabsPro_RefreshTabStateOnLeave.Value });
                return false;
            }

            if (_this.preventSubmit)
                return;

            // check if we need to start uploads
            //formRoot[0].toUpload = 0;
            formRoot[0].$btn = $(_this);
            if (qs && !$.isEmptyObject(qs)) {
                formRoot[0].qs = qs;
            }
            formRoot.bind('fileuploadsubmit', function (e, data) {
                // Sending the all form fields in fileUpload request
                var currentData = getFormData(formRoot);
                data.formData = currentData;
            });

            var $btn = $(_this);
            $($btn).data('connectedForms', connectedForms);
            try {
                if ($btn.hasClass('af-btn-loading')) {
                    var btnContents = $btn.contents();
                    $btn.data('htmlcontent', btnContents.get());
                    btnContents.remove();
                    $btn.html($btn.data('loading-text'));
                    $btn.prop('disabled', true);
                }
            } catch (e) { }

            $btn.data().tabEvent && $btn.data('tabEvent', false);

            var abortSubmit = false;
            var waitFor = 0;

            $.each(Object.keys($_scope.controls), function (i, controlKey) {
                var control = $_scope.controls[controlKey];
                if (control.fields && !$.isEmptyObject(control.fields)) {
                    $.each(Object.keys(control.fields), function (i, _controlKey) {
                        if (control.fields[_controlKey].onSubmit)
                            waitFor++;
                    })
                }
                else {
                    if (control.onSubmit)
                        waitFor++;
                }
            });

            if (formRoot[0].onFormSubmit.length)
                for (var i in formRoot[0].onFormSubmit)
                    formRoot[0].onFormSubmit[i]($btn);
            if (!waitFor) {
                formRoot[0].submitData($btn, fnDone, btnSettings);
            }
            else if (waitFor && (!formRoot.find(".table-striped.files tr.file-table").length && !formRoot.find("[submit-data]").length && !btnSettings.isConnected)) {
                //sending with no file uploaded
                return formRoot[0].submitData($btn, fnDone, btnSettings);
            } else {
                var submitControl = function (control) {
                    if (!control.onSubmit)
                        return
                    control.onSubmit(function () {
                        if (abortSubmit)
                            return;

                        waitFor--;
                        if (waitFor == 0)
                            formRoot[0].submitData($btn, fnDone, btnSettings);
                    }, function (error) {
                        if (abortSubmit)
                            return;
                        formRoot.find(".server-error").html(error).show();
                        afResetButton(formRoot, $btn);
                        abortSubmit = true;
                    });
                }

                $.each(Object.keys($_scope.controls), function (i, controlKey) {
                    var control = $_scope.controls[controlKey];
                    if (control.fields && !$.isEmptyObject(control.fields)) {
                        $.each(Object.keys(control.fields), function (i, _controlkey) {
                            submitControl(control.fields[_controlkey]);
                        })
                    }
                    else
                        submitControl(control);
                });
            }
        }

        formRoot[0].submitData = function ($btn, fnDone, btnSettings) {
            var svcFramework = $.ServicesFramework(options.moduleId);
            var isConnected = btnSettings.isConnected;
            if (formRoot[0].qs && !$.isEmptyObject(formRoot[0].qs)) {
                var submitUrl = dnnsf.getUrlParts($btn.attr('data-submiturl'))
                submitUrl.query = $.extend(submitUrl.query, formRoot[0].qs);
                $btn.attr('data-submiturl', submitUrl.getUrl(submitUrl));
            }

            if (formRoot[0].submitting)
                return;

            //getting data for submit
            var data = getFormData(formRoot);
            if (isConnected) {
                data = { '$_thisForm': data };
                $.each($($btn).data('connectedForms'), function (i, v) {
                    var fields = {}
                    fields[v.FormName] = getFormData($('#dnn' + v.FormId + 'root'));
                    $.extend(data, fields)
                });
            }

            //delete files
            Promise.all(
                Object.entries($_scope.controls)
                    .filter(function (entry) {
                        return entry[1].deleteFiles;
                    })
                    .map(function (entry) {
                        return entry[1].deleteFiles().then(function (results) {
                            formRoot[0].submitting = false;
                            results.map(function (data) {
                                parseFormResponse2(formRoot, $btn, data);
                            });
                        });
                    })
            ).then(function (data) {

            });

            var submitFormData = function (event, onDone) {
                formRoot[0].submitting = true;
                var setDisableState = function () {
                    var btns = formRoot.find('.submit').not($btn);
                    $.each(btns, function (i, formButton) {
                        $(formButton).attr('disabled') && $(formButton).data('disabled', true);
                        !$btn.data().tabEvent && $(formButton).attr('disabled', 'disabled');
                    })
                }
                formRoot.find('.submit-progress').css('visibility', 'visible').stop(true, true).fadeIn();
                var xhr = new XMLHttpRequest();
                //var executed = [];
                var executedOnDone = false;
                var qs = $.param({
                    "referrer": document.referrer,
                    "_url": document.URL
                });
                if (isConnected) {
                    xhr.open("POST", $btn.attr("data-submiturl") + '&' + qs, true);
                    xhr.setRequestHeader("Content-type", "application/json");
                } else {
                    xhr.open("POST", $btn.attr("data-submiturl") + '&' + qs, true);
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                }
                xhr.setRequestHeader("DNNSF-Time-Offset", timeZoneOffset);
                svcFramework.setModuleHeaders(xhr);

                var executedUntilIdx = 0;

                var parseActionFromResponse = function (responseStr) {

                    var scriptEndMarker = "</script>";
                    var actions = [];
                    var lastMatchIdx = 0;

                    while (true) {
                        var scriptStartIdx = responseStr.indexOf("<script", lastMatchIdx);
                        if (scriptStartIdx < 0) {
                            break;
                        }
                        var scriptEndIdx = responseStr.indexOf(scriptEndMarker, scriptStartIdx);
                        if (scriptEndIdx < 0) {
                            break;
                        }
                        scriptEndIdx += scriptEndMarker.length;
                        actions.push({
                            startIdx: scriptStartIdx,
                            endIdx: scriptEndIdx,
                            content: responseStr.substr(scriptStartIdx, scriptEndIdx - scriptStartIdx)
                        });
                        lastMatchIdx = scriptEndIdx;
                    }

                    if (!actions.length) {
                        return null;
                    }

                    return {
                        actions: actions,
                        endIndex: lastMatchIdx,
                    };
                }

                xhr.onprogress = function () {

                    var searchStartIdx = executedUntilIdx;
                    var actionParseResult = parseActionFromResponse(xhr.response.substr(searchStartIdx));
                    if (!actionParseResult) {
                        return;
                    }

                    executedUntilIdx += actionParseResult.endIndex;

                    $.each(actionParseResult.actions, function (i, v) {

                        try {
                            var submitContext = {
                                $_scope: $_scope,
                                formRoot: formRoot,
                                $btn: $btn,
                                btnSettings: btnSettings,
                                onDone: function () {
                                    executedOnDone = true;
                                    onDone && onDone.apply(null, arguments);
                                },
                            };

                            var actionScriptContent = $(v.content).text();
                            var actionFunc = new Function(['events'], actionScriptContent);
                            actionFunc(formEventsFactory(submitContext));
                        } catch (e) {
                            console.error(
                                "Invalid action content at actionIdx " + i +
                                " (startIdx: " + searchStartIdx + v.startIdx +
                                ", endIdx: " + searchStartIdx + v.endIdx + ").",
                                xhr.response,
                                e
                            );
                            return;
                        }
                    });
                };
                xhr.onreadystatechange = function () {
                    if (xhr.readyState != 4) {
                        return;
                    }

                    // xhr is in DONE state. Mark form as not submitting.
                    formRoot[0].submitting = false;

                    // onDone was already executed. nothing to do.
                    if (executedOnDone) {
                        return;
                    }

                    // onDone was not executed we need to either find the final action and execute it
                    // or just execute onDone without a final result.

                    var actionParseResult = parseActionFromResponse(xhr.response.substr(executedUntilIdx));
                    if (!actionParseResult) {
                        onDone && onDone();
                        return;
                    }

                    if (actionParseResult.actions.length > 1) {
                        parseFormResponse2(formRoot, $btn, { 'error': localization.actionErrorDefaultMessage, 'reset': true });
                        console.error(
                            "More than one action parsed in xhr done state from last executed action." +
                            " executedUntilIdx: " + executedUntilIdx,
                            response
                        );
                        return;
                    }

                    try {
                        var submitContext = {
                            $_scope: $_scope,
                            onDone: onDone,
                        };

                        var action = actionParseResult.actions[0];
                        var actionScriptContent = $(action.content).text();
                        var actionFunc = new Function(['events'], actionScriptContent);
                        actionFunc(formEventsFactory(submitContext));
                    } catch (e) {
                        parseFormResponse2(formRoot, $btn, { 'error': localization.actionErrorDefaultMessage, 'reset': true });
                        console.log(response);
                        return;
                    }
                };

                if (event == 'TabsPro_OnTabLeave') {
                    var ignoreTabLeave = $_scope.settings.TabsPro_IgnoreTabLeaveIfNoChanges && $_scope.settings.TabsPro_IgnoreTabLeaveIfNoChanges.Value;
                    var formSettings = dnnsf.api.actionForm.getSettings($_scope.settings.ModuleId);
                    var hasChanges = formSettings.submittedData && !_.isEqual(formSettings.submittedData, data);
                    if (ignoreTabLeave && hasChanges == false) {
                        onDone({});
                        formRoot[0].submitting = false;
                        // ignore event
                        return;
                    }
                    dnnsf.api.actionForm.patchSettings($_scope.settings.ModuleId, { submittedData: data });
                }

                setDisableState();
                if (isConnected)
                    xhr.send(JSON.stringify(data));
                else
                    xhr.send($.param(data));
            }

            var event = dnnsf.getUrlParts($btn.attr("data-submiturl")).query['event'];
            switch (event) {
                //case 'click':
                //break;
                //case 'TabsPro_OnTabEnter':
                //break;
                case 'TabsPro_OnTabLeave': {
                    if (!options.hasTabLeaveActions)
                        return fnDone({
                            value: true,
                            refresh: angular.element(formRoot).scope().settings.TabsPro_RefreshTabStateOnLeave.Value
                        });
                    submitFormData(event, function (data) {
                        if (data && data.validationErrors != undefined) {
                            fnDone({
                                value: false,
                                refresh: angular.element(formRoot).scope().settings.TabsPro_RefreshTabStateOnLeave.Value
                            });
                        } else if (!angular.element(formRoot).scope()) {
                            var waitForInitialization = setInterval(function () {
                                if (angular.element(formRoot.selector).scope()) {
                                    fnDone({
                                        value: true,
                                        refresh: angular.element(formRoot.selector).scope().settings.TabsPro_RefreshTabStateOnLeave.Value
                                    });
                                    clearInterval(waitForInitialization);
                                }
                            }, 5);
                        } else {
                            fnDone({
                                value: true,
                                refresh: angular.element(formRoot).scope().settings.TabsPro_RefreshTabStateOnLeave.Value
                            });
                        }
                    })
                    break;
                }
                default:
                    submitFormData(event);
            }

        };

        if (options.hasTabEnterActions || options.hasTabLeaveActions) {
            dnnsf.events.listen('OnTabsLeave', options.moduleId, function (data, fnDone) {

                var isTarget = false;
                $.each(data.targetModuleList, function (index, moduleId) {
                    if (options.moduleId == moduleId)
                        isTarget = true;
                })
                if (isTarget && options.hasTabLeaveActions) {
                    var submitUrl = dnnsf.getUrlParts($_scope.form.submitUrl)
                    submitUrl.query = $.extend(submitUrl.query, { 'event': 'TabsPro_OnTabLeave' });
                    var btn = document.createElement("button");
                    $(btn).attr('class', 'form-button');
                    $(btn).attr('data-submiturl', submitUrl.getUrl(submitUrl));
                    if ($_scope.settings.TabsPro_IgnoreValidationOnLeave.Value) {
                        $(btn).attr('data-validation', 'off');
                    } else {
                        $(btn).attr('data-validation', 'on');
                    }
                    $(btn).data('tabEvent', true);
                    submitForm(btn, fnDone);
                } else {
                    fnDone();
                }
            });
        }

        if (options.hasTabEnterActions) {
            dnnsf.events.listen('OnTabsEnter', options.moduleId, function (data, fnDone) {
                if (!options.hasTabEnterActions) {
                    return fnDone && fnDone();
                }
                var newQs = { 'event': 'TabsPro_OnTabEnter' };
                if (data.qs && !$.isEmptyObject(data.qs)) {
                    $.extend(newQs, data.qs);
                    dnnsf.api.actionForm.patchSettings(options.moduleId, { passQs: data.qs });
                }
                var isTarget = false;
                $.each(data.targetModuleList, function (index, moduleId) {
                    if (options.moduleId == moduleId)
                        isTarget = true;
                })
                if (isTarget) {
                    var submitUrl = dnnsf.getUrlParts($_scope.form.submitUrl)
                    submitUrl.query = $.extend(submitUrl.query, newQs);
                    var btn = document.createElement("button");
                    $(btn).attr('class', 'form-button');
                    $(btn).attr('data-submiturl', submitUrl.getUrl(submitUrl));
                    $(btn).attr('data-validation', 'off');
                    $(btn).data('tabEvent', true);
                    submitForm(btn, fnDone, data.qs);
                } else {
                    fnDone();
                }
            });
        }

        dnnsf.events.listen('ActionFormPing', options.moduleId, function (data, fnDone) {
            $.each(data.targetModuleList, function (index, moduleId) {
                if (options.moduleId == moduleId) {
                    fnDone(options.moduleId);
                } else {
                    fnDone();
                }
            })
        });
    };

    function getFormData(formRoot) {
        var $_scope = angular.element(formRoot).scope();
        var data = {};
        formRoot.find(':input,[data-val],.value-node').not("button[class^='trumbowyg-'], textarea.g-recaptcha-response").each(function () {
            //formRoot.find('input').filter(':text,:password,:hidden').add(formRoot.find("select,textarea")).each(function () {
            if (!$(this).attr("id") || $(this).closest($_scope.fieldsToIgnoreClass).length)
                return;
            // initialize to empty
            var name = $(this).attr("field-id") || $(this).attr("id").replace(/dnn\d+/, "");
            if (!data[name])
                data[name] = '';

            // for radios, only set if selected
            if ($(this).attr('type') == 'radio') {
                if (this.checked)
                    data[name] = $(this).val();
            } else if ($(this).attr('data-val') || $(this).attr('data-val') === '') {
                data[name] = $(this).attr('data-val');
            }
            else if ($(this).hasClass('value-node')) {
                data[name] = $(this).html();
            } else {
                data[name] = $(this).val();
            }

        });

        var checkboxes = _.map(formRoot.find('.field-container').not($_scope.fieldsToIgnoreClass).find('[type="checkbox"][id]:not([id=""])'),
            function (checkbox) {
                return [$(checkbox).attr('id').replace(/dnn\d+/, ''), $(checkbox)]
            });

        var part_checkboxes = _.partition(checkboxes,
            function (checkbox) {
                return checkbox[0].indexOf('-') == -1
            });

        _.each(part_checkboxes[0],
            function (checkbox) {
                data[checkbox[0]] = checkbox[1].is(':checked') ? 'True' : 'False'
            });

        var checkbox_lists = _.groupBy(part_checkboxes[1],
            function (checkbox) {
                return checkbox[0].substr(0, checkbox[0].indexOf('-'))
            });

        _.each(checkbox_lists,
            function (list, name) {
                data[name] = JSON.stringify(
                    _.map(
                        _.filter(list,
                            function (checkbox) {
                                return checkbox[1].is(':checked')
                            }),
                        function (checkbox) {
                            return checkbox[1].val()
                        }))
            });

        formRoot.find(".itemwithqty input:visible").each(function () {
            data[$(this).attr("id").replace(/dnn\d+/, "")] = $('#' + $(this).attr("id") + 'Qty').val() + ' ' + $(this).val();
        });

        formRoot.find('iframe.dnnsf-text-editor').each(function () {
            if (dnnsf.canAccessIFrame(this) && this.contentWindow.getContent) {
                data[$(this).attr("name").replace(/dnn\d+/, "")] = this.contentWindow.getContent();
            }
        });

        // finally, call registered controls
        $.each(Object.keys($_scope.controls), function (i, controlKey) {
            var control = $_scope.controls[controlKey];
            if (!control.getValue)
                return;

            // added control.field.name because dynamic fields don't have their back-end structure public on the front-end like normal fields do
            var fieldId = control.field.TitleCompacted || control.field.name;

            data[fieldId] = control.getValue();
        });

        _.forEach($_scope.form.fields, function (afField) {
            if (afField.type === "recaptcha") {
                data[afField.name] = afField.value;
                return false;
            }
        });

        return data;
    }

    function resetRecaptchaValidation(widgetId, formRoot) {

        var recaptchaElement = $("div[vc-recaptcha]", formRoot);

        if (!recaptchaElement.length) {
            return;
        }

        if (typeof grecaptcha === 'undefined') {
            console.error('grecaptcha is undefined');
            return;
        }

        grecaptcha.reset(widgetId);
        var recaptchaParent = recaptchaElement.closest('.field-container');
        var recaptchaError = recaptchaParent.find('.text-danger');

        setTimeout(function () {
            recaptchaParent.removeAttr('aria-describedby');
            recaptchaError.remove();
        }, 3000);
    }

    function afResetButton(formRoot, $btn) {
        if (!$btn) {
            return;
        }
        setTimeout(function () {
            try {
                $btn.empty();
                $btn.append($btn.data('htmlcontent'));
                $btn.prop('disabled', false);
            } catch (e) { }
            var btns = formRoot.find('.submit').not($btn);
            $.each(btns, function (i, formButton) {
                if ($(formButton).data('disabled')) {
                    $(formButton).data('disabled', false)
                } else {
                    $(formButton).removeAttr('disabled');
                }
            })
            formRoot && formRoot.find('.submit-progress').stop(true, true).fadeOut(function () {
                $(this).css('visibility', 'hidden');
            });
        }, 500);
    }

    function refreshCaptchaOnError(scope) {
        formRoot.find('.imgcode').each(function (index, captchaImg) {
            scope.refreshCaptcha(scope.settings.ModuleId, $(captchaImg).attr('data-af-field'));
        });
    }

    function parseFormResponse2(formRoot, $btn, data) {

        parseFormResponse(data, {
            executeJsFunction: function (fnName) {
                window.parent[fnName](window.frameElement);
            },
            executeJsCode: function (jsCode) {
                if (!form)
                    var form = formRoot.scope() && formRoot.scope().form;

                var toEval = new Function('form', jsCode);

                // try/catch is already implemented in the code being executed that we have in Common in the actions
                toEval.call(this, form);
            },
            error: function (err, reset) {
                formRoot.find(".server-error").append($.parseHTML(err)).show();
                $('.g-recaptchadnnsf', formRoot).each(function (index, recaptchaElement) {
                    grecaptcha.reset($(this).attr('data-widgetid'));
                    if ($(recaptchaElement).attr('data-size') === 'invisible') {
                        grecaptcha.execute($(this).attr('data-widgetid'));
                    }
                });
            },
            validationErrors: function (_data) {
                var displayErrors = function (errors, mid) {
                    refreshCaptchaOnError(formRoot.scope());

                    $.each(errors, function (i, err) {
                        var fieldId = mid + err.fieldId;
                        var field = $('#dnn' + fieldId);
                        var parent = field.closest('.field-container');

                        if (!parent.length)
                            parent = $('[name="dnn' + fieldId + '"]').closest('.field-container');

                        // tabspro specific
                        var tabParent = parent.closest('.tab-pane');
                        if (tabParent.length && !tabParent.hasClass('active')) {
                            var tab = $('[href="#' + tabParent.attr('id') + '"]');
                            tab.addClass('has-error');
                        }
                        // end tabspro specific

                        field.attr('aria-describedby', 'error-' + field.attr('id'));

                        parent.addClass('has-error');
                        $('#dnn' + fieldId)
                        parent.find('.text-danger').length ?
                            parent.find('.text-danger').html(err.message).show() :
                            parent.append('<span id="' + 'error-' + field.attr('id') + '" class="text-danger">' + err.message + '</span>');

                        var errorElements = $('.has-error');
                        if (errorElements.length) {
                            // focus and scroll to the element
                            errorElements.first()[0].scrollIntoView({ behavior: "smooth", block: "center" });
                        } else {
                            console.error("Action Form: Validation error on a hidden field.")
                        }
                    });

                }
                var mid = $(formRoot).parent().attr('data-moduleid');
                if (_data.validationErrors.constructor === Array) {
                    //is current form
                    displayErrors(_data.validationErrors, mid);
                } else {
                    //conected forms
                    $.each(_data.validationErrors, function (i, v) {
                        if (v.length) {
                            var form;

                            if (i != '$_thisForm') {
                                form = _data.connectedForms.find(function (j, k) {
                                    return j.FormName.toLowerCase() == i.toLowerCase();
                                })
                            }
                            displayErrors(v, form ? form.FormId : mid);
                        }
                    });
                }

                resetRecaptchaValidation(formRoot.scope().widgetId, formRoot);

                // if inside tabs module, move to the first invalid tab
                formRoot.closest('.tabsProRoot').find('a.tabLink.has-error').first().click();

                return;
            },
            redirect: function (url, isPushState) {
                if (data.forceDownload) {
                    var urlPath = dnnsf.getUrlParts(url).pathname;
                    var fileNameAndExtension = urlPath.substring(urlPath.lastIndexOf("/") + 1);
                    if (!window.ActiveXObject) {
                        var save = document.createElement('a');
                        save.href = url;
                        save.target = '_blank';
                        save.download = fileNameAndExtension || 'unknown';

                        var evt = new MouseEvent('click', {
                            'view': window,
                            'bubbles': true,
                            'cancelable': false
                        });
                        save.dispatchEvent(evt);

                        (window.URL || window.webkitURL).revokeObjectURL(save.href);
                        afResetButton(formRoot, $btn);

                    }
                    // for IE < 11
                    else if (!!window.ActiveXObject && document.execCommand) {
                        var _window = window.open(url, '_blank');
                        _window.document.close();
                        _window.document.execCommand('SaveAs', true, fileNameAndExtension || url)
                        _window.close();
                        afResetButton(formRoot, $btn);
                    }
                    return;
                }

                if (!data.popup && !data.newTab) {

                    if (isPushState) {
                        //$('.angrid').scope().$location.url(url);
                        setTimeout(function () {
                            window.history.pushState({}, '', url + location.hash);//added location.hash for tabsPro
                            afResetButton(formRoot, $btn);
                        }, 500)
                    } else {
                        window.location = url;
                        if (url.indexOf("mailto:") != -1 || url.indexOf("tel:") != -1 || url.indexOf("ftp:") != -1) {
                            afResetButton(formRoot, $btn);
                        }
                    }
                    return;
                }

                // handle new tab
                if (data.newTab) {
                    if (!!window.ApplePaySession) { // it's Safari 10+
                        window.location = url;
                    } else {
                        window.open(url, '_blank');
                        afResetButton(formRoot, $btn);
                    }
                    return;
                }

                // open popup
                //set modal and append to body
                var popup = $('<div class="af-modal modal fade">' +
                    '<div class="modal-dialog modal-lg">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title">' + data.popupTitle + '</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<iframe width="100%" src="' + url + '" frameborder="0" scrolling="yes"></iframe>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>').appendTo('body');

                //console.log(popup.modal); // removed unnecesary logs
                popup.modal({
                    backdrop: true
                });

                popup.on('hidden.bs.modal', function () {
                    //stop resizing
                    window.clearInterval(resizeInterval);
                    //remove from DOM
                    popup.remove();
                    //remove backdrop
                    $('.modal-backdrop').remove();

                });

                afResetButton(formRoot, $btn);

                //resize iframe so it has no scroll bar
                var __prevHeight = 0;
                var resizeInterval = setInterval(function () {
                    var iframe = $('.af-modal:visible').find('iframe');
                    try {
                        var bodyHeight = iframe[0].contentWindow.document.body.scrollHeight;// the corect way to get iframe height
                        //if (bodyHeight < __prevHeight) {
                        //    bodyHeight = bodyHeight - 50;// Decreseaing in height is slow because something somewhere is intercating with them. Here is a little boost ...
                        //}
                        if (bodyHeight != __prevHeight) {
                            __prevHeight = bodyHeight;
                            iframe.height(Math.max(200, bodyHeight));// minimum 200px
                        }
                    } catch (e) {
                        iframe.height(window.innerHeight - 240);// better save the sorry
                    }
                }, 1000);
            },

            message: function (msg, type) {
                if (!type || type == 'success') {
                    formRoot.find(".c-form").slideUp();
                    formRoot.find(".submit-confirm2").hide();
                    $('html, body').animate({
                        scrollTop: formRoot.offset().top - 200
                    }, 500);
                }
                formRoot.find(".submit-confirm").html(msg).show();
                var scope = formRoot.find(".submit-confirm").scope();

                angular.element(formRoot).injector().invoke(function ($compile) {
                    $compile(formRoot.find(".submit-confirm").contents())(scope);
                });

            },
            appendHtml: function (appendHtml, appendTo, reset) {
                $(appendTo).append(appendHtml);
                reset && afResetButton(formRoot, $btn);
            },
            data: function (data) {
                var moduleId = data.baseId.replace('dnn', '');
                dnnsf.api.actionForm.patchSettings(moduleId, { Data: data });
                angular.element(formRoot).scope().load(moduleId);
                angular.element(formRoot).scope().$apply();
                angular.element(formRoot).scope().$broadcast('updateFormData');
            },
            noOp: function () {
            }
        }, $btn, formRoot);
    }

    function parseFormResponse(data, handlers, afButton, afFormRoot) {

        // initialize with default handlers, unless provieded by caller
        handlers = $.extend({
            keepOnPage: function (url) {
                window.location.reload(true);
            },
            redirect: function (url) {
                window.location = url;
            },
            appendHtml: function (appendHtml, appendTo) {
                $(appendTo).append(appendHtml);
            },
            error: function (err) { },
            message: function (msg, type) { },
            data: function (msg, type) { },
            executeJsCode: function (jsCode) {
                try {
                    eval(jsCode)
                } catch (e) {
                    console.error(e);
                }
            }
        }, handlers);

        // parse response and call handlers
        if (data.functionName) {
            handlers.executeJsFunction && handlers.executeJsFunction(data.functionName);
        } if (data.JsCode) {
            handlers.executeJsCode && handlers.executeJsCode(data.JsCode);
        } else if (data.Error || data.error) {
            handlers.error && handlers.error(data.Error || data.error, data.reset);
        } else if (data.validationErrors) {
            handlers.validationErrors && handlers.validationErrors(data);
        } else if (data.Content) {
            handlers.message && handlers.message(data.Content, data.Type);
        } else if (data.KeepOnPage) {
            handlers.KeepOnPage && handlers.KeepOnPage(data.Url);
        } else if (data.Url) {
            handlers.redirect && handlers.redirect(data.Url, data.PushState);
            return; // do not reset form button by default
        } else if (data.appendHtml) {
            handlers.appendHtml && handlers.appendHtml(data.appendHtml, data.appendTo, data.reset);
            return;
        } else if (data.data) {
            handlers.data && handlers.data(data.data);
        } else if (data.noOp) {
            handlers.noOp && handlers.noOp();
        }

        afResetButton(afFormRoot || formRoot, afButton);
    }

    // expose public api
    window.initForm = initForm;
    window.getFormData = getFormData;
    window.afResetButton = afResetButton;
    window.parseFormResponse = parseFormResponse;

})($, window.dnnsfAngular15 || window.angular);

function browseGrid(settings) {
    $('body').append('<div class="loader-wrapper" id="modalLoader"><div class="loader"></div></div>');
    $.get(window.dnnsf.commonUrl + '/static/dnnsf/tpl/gridModal.html', function (data) {
        var iframeData = data.replace('gridUrl', settings.url);
        iframeData = iframeData.replace('popupHeight', $(window).height() - 150 + 'px');
        $('body').append(iframeData);
        $('#gridFrame').load(function () {
            $('#gridFrame').contents().find('body').css({ 'overflow': 'auto' });
            $('#gridFrame').contents().find('body table').css({ 'width': '90%', 'margin': '0 auto' });
            setTimeout(function () {
                $('#gridModal').modal('show');
                $('#modalLoader').remove();
            }, 500);
            $('#gridModal').on('shown.bs.modal', function (e) {
                getData();
            });
        });
        $('#gridModal').on('hidden.bs.modal', function (e) {
            $('#gridModal').remove();
        });
    });
    function getData() {
        var iframe = window.frames['gridFrame'].document;
        $('body', iframe).on('click', '.grid-item', function () {
            if (!$(this).has('span.grid-field-value').size())
                return;
            var gridScope = window.frames['gridFrame'].angular.element($(this).closest('.item-value')).scope();
            $.each(settings.mappings, function (e, f) {
                var elem = $('* [data-ng-model^="form.fields.' + e + '"]');
                var parent = angular.element(elem).closest('.form-root').scope();
                parent.form.fields[e].value = gridScope.item[f];
                parent.form.fields[e].onChange && parent.form.fields[e].onChange(parent.form);
                parent.$apply();
            });
            $('#gridModal').modal('hide');
        })
            .on('mouseenter', '.grid-item', function () {
                $(this).closest('.item-value').addClass('hover-item');
            })
            .on('mouseleave', '.grid-item', function () {
                $(this).closest('.item-value').removeClass('hover-item');
            });
    };
}
