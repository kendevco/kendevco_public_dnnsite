(function (angular) {

    angular.module('recaptchav3', []).directive('recaptchav3', ['$document', '$timeout', function ($document, $timeout) {

        return {
            restrict: 'A',
            scope: {
                ngModel: '=',
                key: '=?',
                // form field attributes
                field: '=',
                registerControl: '&',
            },
            link: function (scope, elm, attrs, ctrl) {
                if (scope.key) {
                    $.getScript('https://www.google.com/recaptcha/api.js?render=' + scope.key)
                } else {
                    throw "No recaptcha V3 key found";
                }


                scope.registerControl({
                    control: {
                        field: scope.field,
                        onSubmit: function (fnCallWhenDone, fnCallOnError) {
                            grecaptcha.ready(function () {
                                grecaptcha.execute(scope.key, { action: 'submit' }).then(function (token) {
                                    $timeout(function () {
                                        scope.ngModel = token;
                                        fnCallWhenDone && fnCallWhenDone();
                                    });
                                });
                            });
                        },
                        getValue: function () {
                            return scope.ngModel;
                        }
                    }
                });
            }
        };
    }]);
})(window.dnnsfAngular15 || window.angular);
