(function (angular) {
    "use strict";
    angular.module("tagify", [])
        .directive("tagify", ["$interval", function ($interval) {

            function initTagify(scope, element, attrs) {

                var elementValueArray = [],
                    // this is the comma separated list of tag values
                    elementValueCopy = element.val();

                if (elementValueCopy) {
                    elementValueArray = elementValueCopy.split(",");
                }

                // we need to remove the value to process it
                // we are adding it later through the tagify.addtags function
                element.val("");

                var tagifyElement = element.tagify({
                    placeholder: dnnsf.localization.tagsInput.placeholder,
                    enforceWhitelist: true,
                    skipInvalid: true,
                    keepInvalidTags: false,
                    dropdown: {
                        closeOnSelect: false,
                        enabled: 0,
                        fuzzySearch: true,
                        maxItems: Infinity,
                        searchKeys: ["realValue", "value"],
                        classname: "tags-input-dropdown",
                        caseSensitive: false,
                    },

                    // the structure is "value", "realValue" because tagify has hardcoded the key "value" to also display as text to the users
                    // so we are using "value" as text and "realValue" as the value that we are actually sending to the back-end
                    whitelist: scope.suggestions.map(function (suggestion) { return { value: suggestion.text, realValue: suggestion.value } }),
                    maxTags: Number(attrs.limit) || scope.suggestions.length,

                    // this is how we format the real value of the tags
                    originalInputValueFormat: function (valuesArr) { return valuesArr.map(function (item) { return item.realValue; }) }
                });

                var initialTags = elementValueArray.map(function (valueString) {
                    var tagOption = scope.suggestions.find(function (suggestion) {
                        return suggestion.value === valueString;
                    })
                    return { value: tagOption.text, realValue: tagOption.value }
                });

                tagifyElement.data("tagify").addTags(initialTags);
                return tagifyElement.data("tagify");

            }

            return {
                restrict: "A",
                scope: {
                    field: "=",
                    registerControl: "&",
                    updateField: "&",
                    suggestions: "=",
                },
                link: {
                    post: function (scope, element, attrs) {
                        var tagify = initTagify(scope, element, attrs);

                        attrs.$observe('disabled', function(value) {
                            tagify.setReadonly(attrs.disabled);
                            tagify.setDisabled(attrs.disabled);
                        });
                    }
                }
            }
        }]);
})(window.dnnsfAngular15 || window.angular);