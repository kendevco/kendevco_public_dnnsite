/**
 * @typedef {{ value: Date, pickerType: string }} DatePickerParameters
 */

(function (angular) {
  angular
    // warning: the name of the module must be the same as the name of one of the directives
    // as there is some hardcoded logic in load-on-demand.js that checks if the directive has
    // loaded by computing moduleName + 'Directive'
    .module("datetimeflatpickr", [])

    .directive("datetimeflatpickr", [
      function () {
        return {
          restrict: "A",
          scope: {
            updateField: "&",
            registerControl: "&",
            form: "=",
          },
          link: {
            post: function (scope, element, attrs) {
              try {
                scope.params = new DatePickerParameters(
                  scope,
                  scope.form.fields[attrs.fieldId],
                  attrs
                );
                scope.element = element;
              } catch (e) {
                logError(e, element, attrs);
              }
              
              scope.$watch(
                "form.fields." + scope.params.name + ".value",
                function (newValue, oldValue) {
                  if (newValue && typeof newValue == "string") {
                    // check if date range value
                    if (newValue.indexOf(" to ") != -1) {
                      let startDate = newValue.substring(0, newValue.indexOf(" to "));
                      let endDate = newValue.substring(newValue.indexOf(" to ") + 4);
                      let formattedStartDate = parseDate(scope, startDate);
                      let formattedEndDate = parseDate(scope, endDate);

                      scope.updateField({
                        field: scope.params.name,
                        val: [formattedStartDate, formattedEndDate],
                      });
                    } else {
                      let formattedDate = parseDate(scope, newValue);

                      scope.updateField({
                        field: scope.params.name,
                        val: formattedDate,
                      });
                    }

                    setTimeout(() => scope.$apply());
                  }

                  var scopeFieldValue = scope.form.fields[scope.params.name].value;
                  var date;

                  if (scope.params.pickerType === "date" && scopeFieldValue) {
                    date = removeTime(scope.form.fields[scope.params.name].value);
                  }

                  if (scope.params.options.mode != "range") {
                    if (scope.manualMode) {
                      scope.fpInstance.setSelectedDate(date || scopeFieldValue);
                      scope.fpInstance.jumpToDate(scopeFieldValue);
                      if (!isNaN(scopeFieldValue)) {
                        scope.isInvalid && scope.fpInstance.open();
                        scope.isInvalid = false;
                      } else {
                        scope.fpInstance.close();
                        scope.isInvalid = true;
                      }
                    } else {
                      scope.fpInstance.setDate(scopeFieldValue);
                    }
                  }
                }
              );

              // we don't do validation for ranges for now
              if (scope.params.options.mode != "range") {
                var validatorKey = "valid-date-" + scope.params.name;
                $.validator.messages[validatorKey] = $.validator.messages["valid-date"];
                $.validator.addMethod(validatorKey, function (value, element) {
                  return (
                    !scope.fpInstance ||
                    !value ||
                    (scope.fpInstance.selectedDates.length &&
                      scope.fpInstance.selectedDates.every((date) => !isNaN(date)))
                  );
                });
              }

              // If `inline` is true, we must use appendTo to avoid a critical error: https://github.com/flatpickr/flatpickr/issues/1868
              if (scope.params.options.inline) scope.params.options.appendTo = element[0];

              // init
              scope.fpInstance = element.flatpickr(scope.params.options);

              scope.registerControl({
                control: {
                  field: scope.params,
                  getValue: function () {
                    let date = scope.form.fields[scope.params.name].value;

                    //if it's date range...
                    if (scope.fpInstance.selectedDates.length == 2) {
                      const startDate = scope.fpInstance.selectedDates[0];
                      const startDateValue = date ? scope.params.getSubmitValue(startDate) : "";

                      const endDate = scope.fpInstance.selectedDates[1];
                      const endDateValue = date ? scope.params.getSubmitValue(endDate) : "";

                      return startDateValue === endDateValue
                        ? startDateValue
                        : startDateValue + " to " + endDateValue;
                    }

                    return date ? scope.params.getSubmitValue(date) : "";
                  },
                  getLibrary: function () {
                    return scope.fpInstance;
                  },
                },
              });

              element
                .find("input")
                .on("input", function (event) {
                  scope.updateField({
                    field: scope.params.name,
                    val: scope.params.parseString($(this).val()),
                  });
                })
                .on("focus", () => (scope.manualMode = true))
                .on("blur", () => (scope.manualMode = false));

              handleDisabled(scope, attrs);
            },
          },
        };
      },
    ]);

  function logError(err, element, attrs, fpInstance) {
    // $(".date-error").text(err.toString()).show();
    console.error(err);
  }

  function parseDate(scope, newValue) {
    let formattedDate = scope.params.parseString(newValue);

    // ISO8601 format fallback, the Date object handles 8601 as it's first parameter
    if (isNaN(formattedDate)) {
      if (scope.params.pickerType === 'date') {
        formattedDate = dnnsfDateFns.parseMs(newValue, scope.params.options.dateFormat, new Date());
      } else {
        formattedDate = new Date(newValue);
      }
    }

    // check if still couldn't parse the date
    if (isNaN(formattedDate)) {
      logError("Invalid date value received: " + newValue);
    }

    return formattedDate;
  }

  function handleDisabled(scope, attrs) {
    attrs.$observe("disabled", function (value) {
      if (value) {
        scope.fpInstance._input.setAttribute("disabled", "disabled");
      } else {
        scope.fpInstance._input.removeAttribute("disabled");
      }
    });
  }

  function parseTime(t) {
    try {
      var d = new Date();
      var time = t.match(/(\d+)(?::(\d\d))?\s*(p?)(a?)/i);
      var hours = +time[1]; // string to int
      if (time[3] || time[4]) {
        hours = (hours % 12) + (time[3] ? 12 : 0);
      }
      d.setHours(hours);
      d.setMinutes(parseInt(time[2]) || 0);
      return d;
    } catch (e) {
      return Date.parse("invalid");
    }
  }

  function valueChangeHandlerFactory(scope) {
    /**
     * @param {Date[]} selectedDates
     * @param {string} inputValue
     * @param {object} instance The flatpickr instance object.
     * @param {object} data Any data related to the event.
     */
    function valueChangeHandler(selectedDates, inputValue, instance, data) {
      // reset validation
      scope.element.valid();

      if (!inputValue || scope.params.parseString(inputValue).getTime() === selectedDates[0].getTime()) {
        return;
      }

      // the model always stores a Date object
      if (scope.fpInstance) {
        scope.updateField({
          field: scope.params.name,
          val: selectedDates[0],
        });
        setTimeout(() => scope.$apply());
      } else {
        // datepicker not initialized yet, bypass calling onchange
        scope.form.fields[scope.params.name].value = selectedDates[0];
      }
    }

    return valueChangeHandler;
  }

  /**
   * @param {DatePickerParameters} params
   * @param {*} scope
   * @param {*} attrs
   */
  function getCommonOptions(params, scope, attrs) {
    var options = {
      inline: params.inline,
      allowInput: params.allowInput,
      disableMobile: true,
      wrap: true,

      onReady: valueChangeHandlerFactory(scope, params),
      // register both events (onValueUpdate and onChange) to fix some inconsistencies in flatpickr.
      onValueUpdate: valueChangeHandlerFactory(scope, params),
      onChange: valueChangeHandlerFactory(scope, params),
    };

    if (dnnsf.api.actionForm.isFormPopupOpen(attrs.moduleId)) {
      options.static = true;
    }

    return options;
  }

  /**
   * @param {DatePickerParameters} params
   * @param {*} scope
   * @param {*} attrs
   */
  function getTimeOptions(params, scope, attrs) {
    return {
      time_24hr: attrs.clientFormat.indexOf("H") != -1,
      enableTime: true,
      minuteIncrement: params.minuteIncrement || 5,
      minTime: dnnsfDateFns.parseMs(params.minTime, "HH:mm", new Date()),
      maxTime: dnnsfDateFns.parseMs(params.maxTime, "HH:mm", new Date()),
    };
  }

  /**
   * @param {DatePickerParameters} params
   * @param {*} scope
   * @param {*} attrs
   */
  function getDateOptions(params, scope, attrs) {
    var options = {
      formatDate: function (date, format, locale) {
        return dnnsfDateFns.formatMs(date, attrs.clientFormat);
      },
      maxDate: dnnsfDateFns.parseMs(params.maxDate, "yyyy-MM-dd", new Date()),
      minDate: dnnsfDateFns.parseMs(params.minDate, "yyyy-MM-dd", new Date()),
    };

    if (params.disableFutureOrPast === "past") {
      options.minDate = "today";
    } else if (params.disableFutureOrPast === "future") {
      options.maxDate = "today";
    }

    if (params.firstDayOfWeek === "monday") {
      options.locale = {
        firstDayOfWeek: 1,
      };
    }

    if (params.disableWeekends) {
      options.disable = [
        function (date) {
          return date.getDay() === 0 || date.getDay() === 6;
        },
      ];
    }

    return options;
  }

  /**
   * @param {DatePickerParameters} params
   */
  function getOverrides(params) {
    if (params.flatpickrOptionsOverride) {
      try {
        var configFactory = new Function("return " + params.flatpickrOptionsOverride + ";");
        return configFactory();
      } catch (e) {
        throw "Flatpickr library override options are not a valid javascript object";
      }
    }
  }

  function DatePickerParameters(scope, properties, attrs) {
    var tokenizedPropertiesKeys = ["maxDate", "minDate", "maxTime", "minTime", "value", "flatpickrOptionsOverride"];
    var tokenizedProperties = {};

    tokenizedPropertiesKeys.forEach(function (propKey) {
      if (attrs[propKey]) {
        tokenizedProperties[propKey] = attrs[propKey];
      }
    });

    Object.assign(properties, tokenizedProperties);

    Object.keys(properties).forEach(function (prop) {
      Object.defineProperty(this, prop, {
        // Create a new getter for the property
        get: function () {
          return this["_" + prop];
        },
        set: function (value) {
          this["_" + prop] = value;
        },
      });
      this[prop] = properties[prop].Value || properties[prop];
    }, this);

    this.pickerType = attrs.pickertype;

    switch (this.pickerType) {
      case "time":
        this.parseString = (input) => parseTime(input);
        this.init = (input) => parseTime(input);
        this.getSubmitValue = (date) => {
          if (isNaN(date)) {
            return "";
          }
          var tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
          var localISOTime = new Date(date - tzoffset).toISOString().slice(0, -1);
          // always send localISOTime back to the server
          return localISOTime;
        };
        this.options = $.extend(
          {
            dateFormat: attrs.clientFormat || "H:i",
            noCalendar: true,
            parseDate: (datestr, format) => parseTime(datestr),
          },
          getCommonOptions(this, scope, attrs),
          getTimeOptions(this, scope, attrs),
          getOverrides(this, attrs)
        );
        break;

      case "date":
        this.parseString = (input) => dnnsfDateFns.parseMs(input, attrs.clientFormat, new Date());
        this.init = (input) => {
          // a date is always a date, no timezone transformation
          // but because javascript Date applies timezone automatically,
          // we need to pick 12am in user timezone
          if (input.indexOf(" to ") == -1) {
            var date = new Date(input);
            return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
          } else {
            let startDate = input.substring(0, input.indexOf(" to "));
            let endDate = input.substring(input.indexOf(" to ") + 4);
            let startDateObj = new Date(startDate);
            startDateObj = new Date(
              startDateObj.getUTCFullYear(),
              startDateObj.getUTCMonth(),
              startDateObj.getUTCDate()
            );
            let endDateObj = new Date(endDate);
            endDateObj = new Date(
              endDateObj.getUTCFullYear(),
              endDateObj.getUTCMonth(),
              endDateObj.getUTCDate()
            );

            return [startDateObj, endDateObj];
          }
        };
        this.getSubmitValue = (date) => {
          if (isNaN(date)) {
            return "";
          }
          var tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
          var localISOTime =
            new Date(date - tzoffset).toISOString().slice(0, -1) + dnnsf.getTimezoneOffset();

          // always send localISOTime back to the server
          return localISOTime;
        };
        this.options = $.extend(
          {
            // internal format, always ISO
            // the conversion is done by parseDate and formatDate
            dateFormat: "yyyy-MM-dd",
            parseDate: (datestr, format) =>
              dnnsfDateFns.parseMs(datestr, attrs.clientFormat, new Date()),
          },
          getCommonOptions(this, scope, attrs),
          getDateOptions(this, scope, attrs),
          getOverrides(this, attrs)
        );
        break;

      default:
        this.parseString = (input) => dnnsfDateFns.parseMs(input, attrs.clientFormat, new Date());
        this.init = (input) => {
          if (input.indexOf(" to ") == -1) {
            return new Date(input);
          } else {
            let startDate = input.substring(0, input.indexOf(" to "));
            let endDate = input.substring(input.indexOf(" to ") + 4);
            let startDateObj = new Date(startDate);
            let endDateObj = new Date(endDate);

            return [startDateObj, endDateObj];
          }
        };
        this.getSubmitValue = (date) => {
          if (isNaN(date)) {
            return "";
          }
          var tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
          var localISOTime =
            new Date(date - tzoffset).toISOString().slice(0, -1) + dnnsf.getTimezoneOffset(date);

          // always send localISOTime back to the server
          return localISOTime;
        };
        this.options = $.extend(
          {
            // internal format, always ISO8601
            // the conversion is done by parseDate and formatDate
            dateFormat: "yyyy-MM-dd'T'HH:mm:'00.00000000'K",
            parseDate: (datestr, format) => {
              return dnnsfDateFns.parseMs(datestr, attrs.clientFormat, new Date());
            },
          },
          getCommonOptions(this, scope, attrs),
          getDateOptions(this, scope, attrs),
          getTimeOptions(this, scope, attrs),
          getOverrides(this, attrs)
        );
        break;
    }
    this.options.defaultDate = this.init(this.value);
  }

  function removeTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
})(window.dnnsfAngular15 || window.angular);
