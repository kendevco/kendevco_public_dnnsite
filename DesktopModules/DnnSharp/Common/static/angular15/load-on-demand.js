/*global angular*/
(function (angular) {
    'use strict';
    var regModules = ["ng"];

    var aModule = angular.module('loadOnDemand', []);

    aModule.factory('scriptCache', ['$cacheFactory', function ($cacheFactory) {
        return $cacheFactory('scriptCache', {
            capacity: 10
        });
    }]);

    aModule.provider('$loadOnDemand',
        ['$controllerProvider', '$provide', '$compileProvider', '$filterProvider',
            function ($controllerProvider, $provide, $compileProvider, $filterProvider) {

                var modules = {},
                    providers = {
                        $controllerProvider: $controllerProvider,
                        $compileProvider: $compileProvider,
                        $filterProvider: $filterProvider,
                        $provide: $provide // other things
                    };
                this.$get = ['scriptCache', '$timeout', '$log', '$document', '$injector', '$compile',
                    function (scriptCache, $timeout, $log, $document, $injector, $compile) {
                        return {
                            getConfig: function (name) {
                                if (!modules[name]) {
                                    return null;
                                }
                                return modules[name];
                            },
                            loadedModules: [],
                            load: function (name, callback) {
                                if (this.loadedModules.indexOf(name) != -1)
                                    return callback();
                                this.loadedModules.push(name);
                                var self = this,
                                    // config = self.getConfig(name),
                                    config = name,
                                    resourceId = 'script:' + config.script,
                                    moduleCache = [];
                                moduleCache.push = function (value) {
                                    if (this.indexOf(value) == -1) {
                                        Array.prototype.push.apply(this, arguments);
                                    }
                                };
                                if (!config) {
                                    var errorText = 'Module "' + name + '" not configured';
                                    $log.error(errorText);
                                    throw errorText;
                                }

                                var scripts = [];
                                function loadScript(url, onLoadScript) {
                                    if (scripts.indexOf(url) != -1) {
                                        onLoadScript
                                        return;
                                    }
                                    $timeout(onLoadScript);
                                }
                                function loadCSS(href) {

                                    var cssLink = $("<link>");
                                    $("head").append(cssLink); //IE hack: append before setting href
                                    cssLink.attr({
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: href
                                    });

                                };
                                function loadDependencies(moduleName, allDependencyLoad) {
                                    if (regModules.indexOf(moduleName) > -1) {
                                        return allDependencyLoad();
                                    }
                                    var loadedModule = angular.module(moduleName),
                                        requires = getRequires(loadedModule);

                                    function onModuleLoad(moduleLoaded) {
                                        if (moduleLoaded) {

                                            var index = requires.indexOf(moduleLoaded);
                                            if (index > -1) {
                                                requires.splice(index, 1);
                                            }
                                        }
                                        if (requires.length === 0) {
                                            $timeout(function () {
                                                allDependencyLoad(moduleName);
                                            });
                                        }
                                    }

                                    var requireNeeded = getRequires(loadedModule);
                                    angular.forEach(requireNeeded, function (requireModule) {
                                        moduleCache.push(requireModule);

                                        if (moduleExists(requireModule)) {
                                            return onModuleLoad(requireModule);
                                        }

                                        var requireModuleConfig = self.getConfig(requireModule);
                                        if (requireModuleConfig) {
                                            loadScript(requireModuleConfig.script, function () {
                                                loadDependencies(requireModule, function requireModuleLoaded(name) {
                                                    onModuleLoad(name);
                                                });
                                            });
                                        } else {
                                            $log.warn('module "' + requireModule + "' not loaded and not configured");
                                            onModuleLoad(requireModule);
                                        }
                                        return null;
                                    });

                                    if (requireNeeded.length == 0) {
                                        onModuleLoad();
                                    }
                                    return null;
                                }

                                if (!scriptCache.get(resourceId)) {
                                    config.css && $.each(config.css, function (i, css) {
                                        loadCSS(css);
                                    });
                                    loadScript(config.script, function () {
                                        moduleCache.push(name);
                                        loadDependencies(name, function () {
                                            register($injector, providers, moduleCache);
                                            $timeout(function () {


                                                callback(false);
                                            });
                                        });

                                    });
                                } else {
                                    $timeout(function () {
                                        callback(true);
                                    });
                                }
                            }
                        };
                    }];
                this.config = function (config) {
                    init(angular.element(window.document));
                    if (angular.isArray(config)) {
                        angular.forEach(config, function (moduleConfig) {
                            modules[moduleConfig.name] = moduleConfig;
                        });
                    } else {
                        modules[config.name] = config;
                    }
                };
            }]);

    aModule.directive('loadOnDemand', ['$http', 'scriptCache', '$log', '$loadOnDemand', '$compile', '$timeout', '$injector', '$interval',
        function ($http, scriptCache, $log, $loadOnDemand, $compile, $timeout, $injector, $interval) {
            return {
                replace: false,
                link: {
                    pre: function (scope, element, attr) {
                        var srcExp = attr.loadOnDemand,
                            tpl = attr.src,
                            childScope;

                        function clearContent() {
                            if (childScope) {
                                childScope.$destroy();
                                childScope = null;
                            }
                            element.html('');
                        }

                        scope.$watch(srcExp, function (moduleName) {
                            if (moduleName) {
                                $loadOnDemand.load(moduleName, function () {
                                    $timeout(function () {
                                        reCompileDirective(moduleName);
                                    });
                                });
                            } else {
                                clearContent();
                            }

                        });
                        function reCompileDirective(moduleName) {

                            var content = angular.element(element).children();
                            var limitInterval = 30;
                            var checkIfCompiled = $interval(function () {
                                $timeout(function () {
                                    var currentContent = angular.element(element).children();
                                    if (currentContent[0] != content[0]) {
                                        console.warn("[LoadOnDemand] Avoided compiling stale content.", element);
                                        content = currentContent;
                                    }

                                    $compile(content[0])(scope, function (clonedElement, __scope) {
                                        if ($(element)) {
                                            $(element).replaceWith(clonedElement); // attach the clone to DOM document at the right place
                                        }
                                    });
                                    if ($injector.has(moduleName + 'Directive') || limitInterval === 0) {
                                        $interval.cancel(checkIfCompiled);
                                    } else {
                                        limitInterval--;
                                    }
                                })
                            }, 100);
                        }
                    },
                    post: function (scope, element, attr) {

                    }
                }
            };
        }]);

    function getRequires(module) {
        var requires = [];
        angular.forEach(module.requires, function (requireModule) {
            if (regModules.indexOf(requireModule) == -1) {
                requires.push(requireModule);
            }
        });
        return requires;
    }
    function moduleExists(moduleName) {
        try {
            angular.module(moduleName);
        } catch (e) {
            if (/No module/.test(e)) {
                return false;
            }
        }
        return true;
    }
    function register($injector, providers, registerModules) {
        var i, ii, k, invokeQueue, moduleName, moduleFn, invokeArgs, provider;
        if (registerModules) {
            var runBlocks = [];
            for (k = registerModules.length - 1; k >= 0; k--) {
                moduleName = registerModules[k];
                regModules.push(moduleName);
                moduleFn = angular.module(moduleName);
                runBlocks = runBlocks.concat(moduleFn._runBlocks);
                try {
                    for (invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; i < ii; i++) {
                        invokeArgs = invokeQueue[i];

                        if (providers.hasOwnProperty(invokeArgs[0])) {
                            provider = providers[invokeArgs[0]];
                        } else {
                            return $log.error("unsupported provider " + invokeArgs[0]);
                        }
                        provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
                    }
                } catch (e) {
                    if (e.message) {
                        e.message += ' from ' + moduleName;
                    }
                    $log.error(e.message);
                    throw e;
                }
                registerModules.pop();
            }
            angular.forEach(runBlocks, function (fn) {
                $injector.invoke(fn);
            });
        }
        return null;
    }

    function init(element) {
        var elements = [element],
            appElement,
            module,
            names = ['ng:app', 'ng-app', 'x-ng-app', 'data-ng-app'],
            NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;

        function append(elm) {
            elm && elements.push(elm);
        }

        angular.forEach(names, function (name) {
            names[name] = true;
            append(document.getElementById(name));
            name = name.replace(':', '\\:');
            if (element.querySelectorAll) {
                angular.forEach(element.querySelectorAll('.' + name), append);
                angular.forEach(element.querySelectorAll('.' + name + '\\:'), append);
                angular.forEach(element.querySelectorAll('[' + name + ']'), append);
            }
        });

        angular.forEach(elements, function (elm) {
            if (!appElement) {
                var className = ' ' + element.className + ' ';
                var match = NG_APP_CLASS_REGEXP.exec(className);
                if (match) {
                    appElement = elm;
                    module = (match[2] || '').replace(/\s+/g, ',');
                } else {
                    angular.forEach(elm.attributes, function (attr) {
                        if (!appElement && names[attr.name]) {
                            appElement = elm;
                            module = attr.value;
                        }
                    });
                }
            }
        });
        if (appElement) {
            (function addReg(module) {
                if (regModules.indexOf(module) == -1) {
                    regModules.push(module);
                    var mainModule = angular.module(module);
                    angular.forEach(mainModule.requires, addReg);
                }
            })(module);
        }
    }

})(window.dnnsfAngular15 || window.angular);