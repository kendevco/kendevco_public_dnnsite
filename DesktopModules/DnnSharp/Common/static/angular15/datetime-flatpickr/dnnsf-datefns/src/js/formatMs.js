import isValid from 'date-fns/isValid'
import defaultLocale from 'date-fns/locale/en-US'
import subMilliseconds from 'date-fns/subMilliseconds'
import toDate from 'date-fns/toDate'
import originalFormatters from 'date-fns/_lib/format/formatters'
import longFormatters from 'date-fns/_lib/format/longFormatters'
import getTimezoneOffsetInMilliseconds from 'date-fns/_lib/getTimezoneOffsetInMilliseconds'
import {
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  throwProtectedError
} from 'date-fns/_lib/protectedTokens'
import toInteger from 'date-fns/_lib/toInteger'
import requiredArgs from 'date-fns/_lib/requiredArgs'

var secondsFraction = function (date, token) {
  // This is unbounded, which is supported by datefns, but the dotnet specs have a maximum of 7 decimals precision.
  var convertedToken = "S".repeat(token.length);
  return originalFormatters.S(date, convertedToken);
}

// supporting only specifiers listed in Microsoft docs: https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings
var dotnetFormatters = {
  d: function (date, token, localize) {
    switch (token) {
      case "ddd":
        return originalFormatters.E(date, "EEE", localize);
      case "dddd":
        return originalFormatters.E(date, "EEEE", localize);
      default:
        return originalFormatters.d(date, token, localize);
    }
  },
  f: secondsFraction,
  F: function (date, token) {
    var formattedValue = secondsFraction(date, token) || "";
    if (formattedValue == 0) { // this will be true for empty string also.
      return "";
    }
    return formattedValue;
  },
  g: function (date, token, localize) {
    switch (token) {
      case 'g':
      case 'gg':
        return originalFormatters.G(date, "G", localize); // G,GG,GGG is the same for the default formatter.
    }
  },
  h: originalFormatters.h,
  H: originalFormatters.H,
  K: function (date, token, localize, options) {
    switch (token) {
      case "K":
        return originalFormatters.X(date, "XXX", localize, options);
    }
  },
  m: originalFormatters.m,
  M: originalFormatters.M,
  s: originalFormatters.s,
  t: function (date, token, localize) {
    switch (token) {
      case "t":
        return originalFormatters.a(date, "aaaaa", localize);
      case "tt":
        return originalFormatters.a(date, "a", localize);
    }
  },
  y: originalFormatters.y,
  z: function (date, token, localize, options) {
    switch (token) {
      case "z":
        return originalFormatters.X(date, "X", localize, options);
      case "zz":
        return originalFormatters.X(date, "XX", localize, options);
      case "zzz":
        return originalFormatters.X(date, "XXX", localize, options);
    }
  }
};

export default function formatMs(dirtyDate, dirtyFormatStr, dirtyOptions) {
  return originalFormat(dirtyDate, dirtyFormatStr, dirtyOptions, dotnetFormatters);
}

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g

var escapedStringRegExp = /^'([^]*?)'?$/
var doubleQuoteRegExp = /''/g
var unescapedLatinCharacterRegExp = /[a-zA-Z]/

function originalFormat(dirtyDate, dirtyFormatStr, dirtyOptions, formatters) {

  requiredArgs(2, arguments)

  var formatStr = String(dirtyFormatStr)
  var options = dirtyOptions || {}

  var locale = options.locale || defaultLocale

  var localeFirstWeekContainsDate =
    locale.options && locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate)

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate)
  var utcDate = subMilliseconds(originalDate, timezoneOffset)

  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  }

  var result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function (substring) {
      var firstCharacter = substring[0]
      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter]
        return longFormatter(substring, locale.formatLong, formatterOptions)
      }
      return substring
    })
    .join('')
    .match(formattingTokensRegExp)
    .map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'"
      }

      var firstCharacter = substring[0]
      if (firstCharacter === "'") {
        return cleanEscapedString(substring)
      }

      var formatter = formatters[firstCharacter]
      if (formatter) {
        if (
          !options.useAdditionalWeekYearTokens &&
          isProtectedWeekYearToken(substring)
        ) {
          throwProtectedError(substring)
        }
        if (
          !options.useAdditionalDayOfYearTokens &&
          isProtectedDayOfYearToken(substring)
        ) {
          throwProtectedError(substring)
        }
        return formatter(utcDate, substring, locale.localize, formatterOptions)
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
          firstCharacter +
          '`'
        )
      }

      return substring
    })
    .join('')

  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}
