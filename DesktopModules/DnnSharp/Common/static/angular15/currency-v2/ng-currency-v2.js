;
/** @typedef {{ currency: string, decimal: string, fraction: string, group: string, integer: string}} FormattingParts **/

'use strict';
(function (angular) {

    angular.module('ngCurrencyv2', [])

        .directive('ngCurrencyv2', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {
                    updateField: '&',
                    field: '=',
                    ngModel: '=',
                    registerControl: "&",
                    form: '=',
                },
                link: {
                    post: function (scope, el, attrs, ctrl) {
                        var fieldParameters = new CurrencyParameters(scope.field.Parameters);

                        /**@type FormattingParts**/
                        var formattingParts = getFormattingParts(fieldParameters);

                        var autoNumericOptions = {
                            digitGroupSeparator: formattingParts.group,
                            decimalPlaces: fieldParameters.Precision || 0,
                            currencySymbolPlacement: fieldParameters.CurrencyPosition === 'before' ? 'p' : 's',
                            emptyInputBehavior: 'always',
                            overrideMinMaxLimits: 'invalid',
                            watchExternalChanges: true,
                        }

                        if (formattingParts.decimal) {
                            autoNumericOptions.decimalCharacter = formattingParts.decimal;
                        }

                        switch (fieldParameters.MinimumEnforcedValue) {
                            case 'positive': {
                                autoNumericOptions.minimumValue = 0;
                                break;
                            }
                            case 'strictlypositive': {
                                autoNumericOptions.minimumValue = 1 / Math.pow(10, fieldParameters.Precision);

                                el.blur(function () {
                                    if (Number(scope.autoNumericInstance.rawValue) <= 0) {
                                        scope.autoNumericInstance.set(autoNumericOptions.minimumValue);
                                    }
                                });

                                break;
                            }
                        }

                        if (fieldParameters.CurrencyPosition === 'before') {
                            autoNumericOptions.currencySymbol = formattingParts.currency + ' ';
                        } else {
                            autoNumericOptions.currencySymbol = ' ' + formattingParts.currency;
                        }

                        $timeout(function () {
                            // without the timeout, autonumeric doesn't sync with angularjs initially
                            scope.autoNumericInstance = new AutoNumeric(el[0], autoNumericOptions);

                            ctrl.$parsers.push(function (viewValue) {
                                return scope.autoNumericInstance.rawValue;
                            })
                        });

                        scope.registerControl({
                            control: {
                                field: scope.form.fields[attrs.afField],
                                getValue: function () {
                                    if (!scope.autoNumericInstance.rawValue) {
                                        return '';
                                    }

                                    return fieldParameters.InitialCurrency + ' ' +
                                        scope.autoNumericInstance.rawValue;
                                },
                                getLibrary: function () {
                                    return scope.autoNumericInstance;
                                },
                            }
                        });
                    }
                }
            };
        }
        ]);

    function getFormattingParts(fieldParameters) {
        var formattingParts = {};

        var currencyDisplay;
        switch (fieldParameters.CurrencySymbol) {
            case 'symbol': {
                currencyDisplay = 'symbol';
                break;
            }

            case 'narrowSymbol': {
                currencyDisplay = 'narrowSymbol';
                break;
            }

            case 'letters': {
                currencyDisplay = 'code';
                break;
            }
        }

        switch (fieldParameters.NumberFormatLocaleSource) {
            case 'browser': {
                formattingParts = Intl.NumberFormat(
                    navigator.language,
                    {
                        style: 'currency',
                        currency: fieldParameters.InitialCurrency,
                        currencyDisplay: currencyDisplay
                    }
                ).formatToParts(10000.53);
                break;
            }

            // IMPORTANT: in portal/user mode the back-end populates the ManualNumberFormatLocaleCode
            case 'portal':
            case 'user':
            case 'manual': {
                formattingParts = Intl.NumberFormat(
                    fieldParameters.ManualNumberFormatLocaleCode,
                    { style: 'currency', currency: fieldParameters.InitialCurrency }
                ).formatToParts(333333.33);
                break;
            }
        }

        return formattingParts.reduce(function (acc, formattingPart, index) {
            acc[formattingPart.type] = formattingPart.value;
            return acc;
        }, {});
    }

    function CurrencyParameters(properties) {
        Object.keys(properties).forEach(function (propKey) {
            Object.defineProperty(this, propKey, {
                // Create a new getter for the property
                get: function () {
                    return this['_' + propKey];
                },
                set: function (value) {
                    this['_' + propKey] = value;
                }
            });

            if (!properties[propKey].IsExpression) {
                if (properties[propKey].Value !== undefined) {
                    this[propKey] = properties[propKey].Value;
                } else {
                    this[propKey] = properties[propKey];
                }
            } else {
                this[propKey] = properties[propKey].Expression;
            }
        }, this);
    }
})(window.dnnsfAngular15 || window.angular);
