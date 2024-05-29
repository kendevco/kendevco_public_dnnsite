(function (angular) {
    "use strict";
    angular.module("ngGoogleplaces", [/*"ngMapPlaces"*/]) // The dep module is being loaded on demand in GooglePlaces.cshtml (BS5) and googleplaces.xsl (BS3)

        .directive("ngGoogleplaces", ["$interval", function ($interval) {
            return {
                restrict: "E",
                templateUrl: dnnsf.commonUrl + '/static/angular15/googleplaces/googleplaces.html?v=' + dnnsf.commonVersion,
                scope: {
                    field: '=',
                    registerControl: '&',
                    updateField: '&'
                },
                link: {
                    pre: function ($scope) {
                        $scope.fieldParameters = $scope.field.Parameters;
                        $scope.fieldData = $scope.$parent.form.fields[$scope.field.TitleCompacted];

                        $scope.googleUrl = 'https://maps.google.com/maps/api/js?libraries=places';
                        $scope.googleUrlWithKey = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=' + $scope.fieldData.apikey;

                        $scope.type = $scope.fieldData.types === "mixed" ? undefined : [$scope.fieldData.types];
                        $scope.placesFields = Object.keys($scope.fieldParameters.BasicData)
                            .concat(Object.keys($scope.fieldParameters.Contact), Object.keys($scope.fieldParameters.Atmosphere));

                        if ($scope.fieldData.componentRestrictions) {
                            var countries = $scope.fieldData.componentRestrictions.split(",").map(function (countryCode) { return countryCode.trim(); })
                            $scope.componentRestrictions = JSON.stringify({
                                country: countries
                            })
                        }
                    },
                    post: function ($scope, element, attrs) {
                        $scope.placeChanged = function () {
                            $scope.place = this.getPlace();
                            $scope.updateField({ field: attrs.afField, val: $scope.place });
                        }
                        $scope.registerControl({
                            control: {
                                field: $scope.field,
                                onSubmit: function (fnCallWhenDone, fnCallOnError) {
                                    fnCallWhenDone && fnCallWhenDone();
                                },
                                getValue: function () {
                                    return JSON.stringify($scope.place || {});
                                }
                            }
                        });
                    }
                }
            }
        }]);
})(window.dnnsfAngular15 || window.angular);