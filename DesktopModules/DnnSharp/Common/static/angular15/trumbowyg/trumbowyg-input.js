(function (angular) {

    angular.module('trumbowyg', [])

        .directive('trumbowyg', ['$ngConfirm', function ($ngConfirm) {
            return {
                transclude: true,
                restrict: 'EA',
                require: '?ngModel',
                scope: {
                    ngModel: '=',
                    updateField: '&',
                    theme: '@',
                    btns: '@',
                    btnsGrps: '=',
                    btnsDef: '=',
                    initialValue: '@',
                    lang: '@',
                    registerControl: '&',
                    field: '=',
                },
                link: {
                    pre: function (scope, element, attrs) {
                        scope.editorConfig = {};
                        scope.groups = {};
                        var customButtons = {};
                        scope.name = attrs.name;

                        // Dark Theme checkbox
                        (scope.theme === 'True') && element.closest('.af-slide').addClass('trumbowyg-dark');

                        // button groups as object with array values
                        _.forEach(scope.btnsGrps, function (group) {
                            var groupName = group.name;
                            scope.groups[groupName] = group.value.split(" ");
                        });

                        var btns = _.forEach(attrs.btns.split('|'), function (item, index, array) {
                            if (array[index].slice(0, 7) === 'btnGrp-') {
                                array[index] = item;
                            } else {
                                array[index] = _.forEach(item.split(','), function (item, index, array) {
                                    array[index] = item.trim();
                                });
                            }
                        })

                        _.forEach(btns, function (item, index, array) {
                            if (item.slice(0, 7) === 'btnGrp-') {
                                var splitArray = item.split(',');
                                array[index] = splitArray[0];
                                for (var i = 1; i < splitArray.length; i++) {
                                    array.splice(index + 1, 0, splitArray[i]);
                                }
                            }
                        })

                        // custom buttons 
                        _.forEach(scope.btnsDef, function (item, index, array) {
                            var buttonsArray = [];
                            _.forEach(item.DropdownButtons.Value.split(' '), function (item, index, array) {
                                buttonsArray.push(item);
                            })
                            customButtons[item.DropdownName.Value] = {
                                "ico": item.DropdownIcon.Value,
                                "dropdown": buttonsArray
                            }
                        });

                        scope.groups && (scope.editorConfig.btnsGrps = scope.groups);
                        btns && (scope.editorConfig.btns = btns);
                        customButtons && (scope.editorConfig.btnsDef = customButtons);
                        if (attrs.fileManager) {
                            function hasUploadBtn(btns) {
                                var hasBtn = false;
                                _.each(btns, function (v, i) {
                                    if (v == 'upload' || v.indexOf('upload') != -1) {
                                        hasBtn = true;
                                        return;
                                    }

                                })
                                return hasBtn;
                            }

                            if (!hasUploadBtn(scope.editorConfig.btns))
                                scope.editorConfig.btns.push(['upload']);
                            $.extend(true, $.trumbowyg, {
                                plugins: {
                                    upload: {
                                        init: function (trumbowyg) {
                                            var btnDef = {
                                                fn: function () {
                                                    var rangePosition = rangy.saveSelection();
                                                    var settings = {
                                                        'trumboId': attrs.id
                                                    };
                                                    dnnsf.api.actionForm.openFileManager(attrs.fileManager, settings, function (files) {
                                                        rangy.restoreSelection(rangePosition, true);
                                                        $.each(files.selectedFiles, function (i, v) {
                                                            trumbowyg.doc.execCommand('insertImage', false, v.fileUrl)
                                                        });
                                                        $('#' + attrs.fileManager).closest('.dz-modal').removeClass('in').removeAttr('style');
                                                    })
                                                }
                                            };
                                            trumbowyg.addBtnDef('upload', btnDef);
                                            trumbowyg.buildBtn('upload');
                                        }
                                    }
                                }
                            })
                        }
                    },
                    post: function (scope, element, attrs, ngModelCtrl) {
                        scope.registerControl({
                            control: {
                                field: scope.field,
                                onSubmit: function (fnCallWhenDone, fnCallOnError) {
                                    fnCallWhenDone();
                                },
                                getValue: function () {
                                    return angular.element(element).trumbowyg('html');
                                }
                            }
                        });

                        var semantic = (attrs.semantic == "True");
                        setTimeout(function () {
                            if (element.hasClass('required'))
                                element.prev().addClass('required');
                        }, 0)

                        var eventId = dnnsf.events.on('openImageProperties' + attrs.fieldid, function () {
                            var model = this.props;
                            var updateProperties = this.update;
                            $ngConfirm({
                                title: 'Properties',
                                icon: 'fa fa-edit',
                                contentUrl: dnnsf.commonUrl + '/static/angular15/trumbowyg/tpl/file-properties.html',
                                animation: 'scale',
                                closeIcon: true,
                                backgroundDismiss: true,
                                onScopeReady: function (sc) {
                                    sc.img = model;
                                    var watchWidth = sc.$watch('img.width', function (newWidth, oldWidth) {
                                        if (newWidth == 0)
                                            return sc.img.width = '';
                                        if (sc.img.keepAspectRatio && sc.img.aspectRatio !== newWidth / sc.img.height) {
                                            sc.img.height = parseFloat((newWidth / sc.img.aspectRatio).toFixed(2));
                                        }
                                    })
                                    var watchHeight = sc.$watch('img.height', function (newHeight, oldHeight) {
                                        if (newHeight == 0)
                                            return sc.img.height = '';
                                        if (sc.img.keepAspectRatio && sc.img.aspectRatio !== sc.img.width / newHeight) {
                                            sc.img.width = parseFloat((sc.img.aspectRatio * newHeight).toFixed(2));
                                        }
                                    })
                                },
                                buttons: {
                                    update: {
                                        btnClass: "btn-primary",
                                        action: function (sc, button) {
                                            updateProperties(sc.img);
                                            scope.updateField({ field: attrs.afField, val: $(element).trumbowyg('html') });
                                        }
                                    }
                                },
                            })
                        })

                        var removeformatPasted = false;
                        var tagsToRemove = [];
                        var tagsToKeep = [];

                        //Remove format pasted
                        if (attrs.removeformatpastedoption == 'True') {
                            removeformatPasted = true;
                        }

                        //Tags to remove
                        if (attrs.tagstoremoveoption == 'True') {
                            tagsToRemove = attrs.tagstoremove.split(",");
                        }

                        //Tags to keep
                        if (attrs.tagstokeepoption == 'True') {
                            tagsToKeep = attrs.tagstokeep.split(",");
                        }

                        var options = angular.extend({
                            fullscreenable: true,
                            closable: false,
                            lang: scope.lang,
                            semantic: semantic,
                            removeformatPasted: removeformatPasted,
                            tagsToRemove: tagsToRemove,
                            tagsToKeep: tagsToKeep,
                            // concatenation is for SharpCDN
                            svgPath: dnnsf.commonUrl + "/static/angular15/trumbowyg/ui/" + "icons.svg"
                        }, scope.editorConfig);

                        ngModelCtrl.$render = function () {
                            angular.element(element).trumbowyg('html', ngModelCtrl.$viewValue);
                        };
                        angular.element(element).trumbowyg(options).on('tbwchange', function () {
                            setTimeout(function () {
                                element.prev().valid();
                            }, 200)
                            scope.updateField({ field: attrs.afField, val: angular.element(element).trumbowyg('html') });
                        });

                        var elementHeight = parseInt(element[0].style.height);

                        if (elementHeight > 0) {
                            $(element).parent().find('textarea')[0].style.height = (elementHeight - 38).toString() + 'px'; // 38 is the buttonbar height
                            $(element).parent().attr('style', element.attr('style'));
                            element.removeAttr('style');
                            element[0].style.height = (parseInt($(element).parent()[0].style.height) - 40).toString() + 'px';
                        } else {
                            $(element).parent().attr('style', element.attr('style')).height('auto');
                            element.removeAttr('style');
                        }

                        // Initial Value
                        scope.ngModel = scope.ngModel || scope.initialValue;
                        element.html(scope.ngModel);

                        scope.$on('updateFormData', function () {
                            updateViewAndModel(scope.ngModel);
                        });
                        scope.$applyAsync();

                        scope.$watch(function () {
                            return ngModelCtrl.$modelValue;
                        }, function (newValue) {
                            if (newValue) {
                                updateViewAndModel(newValue);
                            }
                        });

                        attrs.$observe('disabled', function (newVal, oldVal) {
                            if (newVal) {
                                element.trumbowyg('disable');
                            } else {
                                element.trumbowyg('enable');
                            }
                        });

                        function updateViewAndModel(value) {
                            // this is the view value of trumbowyg
                            element.html(value);

                            // this is the value that is pulled by AF on submit
                            angular.element(element).trumbowyg('html', value);
                        }
                    }
                }
            }
        }]);
})(window.dnnsfAngular15 || window.angular);
