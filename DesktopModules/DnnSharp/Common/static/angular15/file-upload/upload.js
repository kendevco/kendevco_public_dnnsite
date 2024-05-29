;
(dnnsfjQuery || $)(document).bind('drop dragover', function (e) {
    // Used it like this because kind and type are not accessible at read time.
    var item = (dnnsfjQuery || $).extend(true, {}, e.originalEvent.dataTransfer.items[0])

    if (item) {
        if (item.kind === "string" && item.type === "text/plain") {
            return;
        }
    }

    e.preventDefault(); //preventing the default browser action when the file is dropped outside of our dropZone
});

(function (angular) {
    angular.module('afControls')
        .config([
            '$httpProvider', 'fileUploadProvider',
            function ($httpProvider, fileUploadProvider) {
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                fileUploadProvider.defaults.redirect = window.location.href.replace(
                    /\/[^\/]*$/,
                    '/cors/result.html?%s'
                );
                //if (isOnGitHub) {
                // Demo settings:
                angular.extend(fileUploadProvider.defaults, {
                    // Enable image resizing, except for Android and Opera,
                    // which actually support image resizing, but fail to
                    // send Blob objects via XHR requests:
                    disableImageResize: /Android(?!.*Chrome)|Opera/
                        .test(window.navigator.userAgent)//,
                    //maxFileSize: 999000,
                    //acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                });
                //}
            }
        ])

        .directive('afMultiUpload', ['$compile', '$http', '$templateCache', '$interval', 'dnnsfHttp', '$timeout',
            function ($compile, $http, $templateCache, $interval, dnnsfHttp, $timeout) {
                return {
                    restrict: 'A',
                    scope: {
                        settings: '=',
                        field: '=',
                        registerControl: '&',
                        registerToEvent: '&',
                        selection: '=',
                        updateField: '&',
                        isRequired: '=',
                        isEnabled: '='
                    },

                    link: function (scope, element, attrs) {
                        scope.dnnsf = dnnsf;
                        var templateUrl;
                        var element0;

                        if (attrs.singlefileupload != undefined) {
                            templateUrl = scope.settings.FormTemplateBaseUrl + "/controls/upload-single.html?v=" + scope.settings.ModuleVersion;
                        } else {
                            templateUrl = scope.settings.FormTemplateBaseUrl + "/controls/upload.html?v=" + scope.settings.ModuleVersion;
                        }

                        $http.get(templateUrl, { cache: $templateCache }).then(function (response) {
                            var tplContent = response.data;

                            element0 = $compile(tplContent)(scope);
                            element.replaceWith(element0);

                            var svcFramework;
                            if (dnnsfjQuery.ServicesFramework) {
                                svcFramework = dnnsfjQuery.ServicesFramework(scope.settings.ModuleId);
                            }
                            scope.options = {
                                url: scope.settings.UploadUrl + '&fieldname=' + scope.field.name,
                                urlDelete: scope.settings.UploadUrl + '&fieldname=' + scope.field.name + '&method=delete',
                                beforeSend: function (xhr, data) {
                                    if (svcFramework) {
                                        svcFramework.setModuleHeaders(xhr);
                                    }
                                }
                            };

                            scope.loadingFiles = false;
                            scope.queue = [];
                            scope.singleFile = '';
                            scope.getExistingFiles();
                        });

                        //inserting existing files in a list || can be changed to be in scope.queue
                        scope.getExistingFiles = function () {
                            var folderPath = scope.field.folder;
                            if (folderPath.hasOwnProperty('IsExpression')) {
                                if (folderPath.IsExpression && !folderPath.Value)
                                    folderPath = folderPath.Expression;
                                else
                                    folderPath = folderPath.Value;
                            }

                            // If no folder is set in the settings
                            // the files will be uploaded to the Temp folder
                            // and then deleted after the actions are processed,
                            // so we should not try to preview any of them here.
                            if (!folderPath) {
                                scope.selection = scope.loadedFiles = [];
                                return;
                            }
                            var baseUrl = scope.settings.PortalFolder + folderPath;

                            scope.loadedFiles = scope.loadedFiles || [];
                            if (scope.selection) {
                                if (attrs.singlefileupload != undefined) {
                                    //populating loaded file for single file upload field
                                    var file = {
                                        name: scope.selection,
                                        baseUrl: baseUrl + '/' + scope.selection,
                                        state: "existing"
                                    };
                                    scope.loadedFiles.push(file);
                                    scope.selection = scope.loadedFiles;
                                } else {
                                    scope.loadedFiles = [];
                                    //populating loaded files for multiple file upload field
                                    scope.loaded = angular.fromJson(scope.selection);
                                    for (var i = 0; i < scope.loaded.length; i++) {
                                        var file = {
                                            name: scope.loaded[i],
                                            baseUrl: baseUrl + '/' + (scope.loaded[i].name || scope.loaded[i]),
                                            state: "existing"
                                        };
                                        scope.loadedFiles.push(file);
                                    }
                                    console.log("loadedFiles: ", scope.loadedFiles);
                                    scope.selection = _.map(scope.loadedFiles, "name");
                                }
                            }
                        }

                        scope.clearExistingFile = function (file, $index) {
                            scope.loadedFiles[$index].state = "delete";
                        };

                        scope.clearSingleFile = function () {
                            if (scope.queue & scope.queue.length) {
                                scope.queue[queue.length - 1].$cancel();
                            }
                            scope.singleFile = {};
                        };

                        scope.$on('fileuploadadd', function (a, b) {
                            scope.$watch(function () {
                                return scope.processing && scope.processing();
                            }, function (newVal, oldVal) {
                                var formRoot = $(element0).closest('.form-root');
                                var $btn = formRoot[0].$btn;
                                newVal ? formRoot.find('.submit').not($btn).attr('disabled', 'disabled') : formRoot.find('.submit').not($btn).removeAttr('disabled');
                            });
                            if (attrs.singlefileupload != undefined) {
                                scope.singleFile = {};

                                setTimeout(function () {
                                    console.log("added new file in queue!", scope.queue);
                                    if (scope.queue.length > 1) {
                                        scope.queue.splice(0, 1);
                                        console.log("scope.queue: ", scope.queue);
                                        scope.singleFile = scope.queue[scope.queue.length - 1];
                                    } else {
                                        scope.singleFile = scope.queue[scope.queue.length - 1];
                                    }
                                    scope.$apply();
                                }, 0);
                            } else {
                                setTimeout(function () {
                                    scope.files = scope.files || [];
                                    scope.files.push(b.files[0].name);
                                    scope.$apply();
                                }, 0);
                            }
                        });

                        scope.$on('fileuploadstart', function () {
                            scope.toUpload = scope.queue.length;
                            scope.files = [];
                            scope.single = "";
                        });

                        scope.$on('fileuploadchange', function (f, v) {
                            scope.updateField({ field: scope.field.name, val: scope.loadedFiles });
                        });

                        scope.$on('remove', function () {
                            $(element0).closest('.form-root').find('div.alert.server-error').hide();
                        });

                        scope.$on('fileuploaddone', function (event, data) {
                            var errors = "";
                            _.each(data.result, function (file) {
                                if (file.error) {
                                    errors += file.error + "\n";
                                }
                            });
                            if (errors) {
                                scope.fnCallOnError(errors);
                            } else {
                                scope.toUpload--;
                                scope.singleFile = scope.single = {
                                    name: data.result[0].relativeurl,
                                    state: "new"
                                };
                                scope.loadedFiles.push(scope.single)

                                if (scope.toUpload == 0)
                                    scope.fnCallWhenDone();
                            }
                        });

                        if (!scope.field.isInitialized) {
                            scope.field.isInitialized = true;
                            scope.registerControl({
                                control: {
                                    field: scope.field,
                                    onSubmit: function (fnCallWhenDone, fnCallOnError) {
                                        scope.fnCallWhenDone = scope.field.fnCallWhenDone = fnCallWhenDone;//need it for drag and drop
                                        scope.fnCallOnError = fnCallOnError;
                                        var isErr = false;
                                        $.each(scope.queue, function (i, file) {
                                            if (file.error) {
                                                isErr = true;
                                                fnCallOnError(file.error);
                                                $timeout(function () { // timeout is for scope.$apply, we are outside angularjs here
                                                    if (attrs.singlefileupload != undefined) {
                                                        scope.singleFile = {};
                                                        scope.loadedFiles = '';
                                                    }
                                                })
                                            }
                                        });

                                        if (!isErr) {
                                            scope.submit();
                                            scope.queue = [];
                                        }
                                    },
                                    getValue: function () {
                                        if (!scope.selection)
                                            scope.selection = [];
                                        if (attrs.singlefileupload != undefined) {
                                            if (!scope.single && !scope.selection.length) {
                                                scope.single = {
                                                    name: "",
                                                    state: ""
                                                };
                                                return JSON.stringify(scope.single);
                                            } else if (!scope.single && scope.selection.length) {
                                                scope.single = scope.selection[0];
                                                return JSON.stringify(scope.single);
                                            } else {
                                                return JSON.stringify(scope.singleFile.name ? { "name": scope.singleFile.name, "state": "new" } : scope.single);
                                            }
                                        } else {
                                            var files = JSON.stringify(_.uniqBy(scope.loadedFiles, 'name'));
                                            return files;
                                        }
                                    },
                                    deleteFiles: function () {
                                        if (!scope.loadedFiles) {
                                            return Promise.resolve();
                                        }

                                        return Promise.all(
                                            scope.loadedFiles
                                                .filter(function (file) {
                                                    return file.state === "delete";
                                                })
                                                .map(function (file) {
                                                    return dnnsfHttp.post(
                                                        scope.settings.ModuleId,
                                                        scope.options.urlDelete + "&f=" + file.name,
                                                        {
                                                            headers: { "DNNSF-Time-Offset": scope.settings.timeZoneOffset }
                                                        }
                                                    ).then(function (response) { return response.data; });
                                                })
                                        );
                                    },
                                    addFile: function (file) {
                                        element0.fileupload('add', { files: [file] });
                                    }
                                }
                            });
                        }

                        scope.registerToEvent({
                            eventName: 'submit',
                            fn: function (fnCallWhenDone, fnCallOnError) {
                                scope.fnCallWhenDone = fnCallWhenDone;
                                scope.fnCallOnError = fnCallOnError;
                                scope.submit();
                            }
                        });

                        var stop;
                        scope.fnInit = function () {
                            if (angular.isDefined(stop)) return;

                            stop = $interval(function () {
                                if (scope.option) {
                                    if (scope.field.fileExt) {
                                        scope.field.fileExt && scope.option('acceptFileTypes', new RegExp('(\\.|\\/)(' + scope.field.fileExt.replace(/,/g, '|') + ')$', 'i'));
                                    }
                                    if (scope.field.fileLimit && scope.field.fileLimit / 10000 < 1) {
                                        scope.field.fileLimit = scope.field.fileLimit * 1000000;
                                        scope.field.fileLimit && scope.option('maxFileSize', scope.field.fileLimit);
                                    }
                                    $interval.cancel(stop);
                                }
                            }, 100);
                        };
                        scope.fnInit();
                    }
                };
            }]);

})(window.dnnsfAngular15 || window.angular);
