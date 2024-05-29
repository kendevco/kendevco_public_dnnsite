;
/*
 * DnnSF (DNN Sharp Foundation)
 */
(function (window) {
    try {
        new MouseEvent('test');
        return false; // No need to polyfill
    } catch (e) {
        // Need to polyfill - fall through
        var MouseEvent = function (eventType, params) {
            params = params || { bubbles: false, cancelable: false };
            var mouseEvent = document.createEvent('MouseEvent');
            mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            return mouseEvent;
        }
        MouseEvent.prototype = Event.prototype;
        window.MouseEvent = MouseEvent;
    }
    // Polyfills DOM4 MouseEvent
})(window);

if (typeof (dnnsfjQuery) == 'undefined') dnnsfjQuery = jQuery || $;

/*yepnope1.5.x|WTFPL*/
(function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } })(this, document);

// fix IE console issues
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };

var dnnsf = dnnsf || {};

// copy state into dnnsf
if (typeof g_dnnsfState != 'undefined')
    for (var key in g_dnnsfState)
        dnnsf[key] = g_dnnsfState[key];

// extend with common functions
dnnsf.init = function ($, appState) {
    // save dnnsfjQuery object for future use
    dnnsf.$ = $;
    if (!window.dnnsfjQuery)
        window.dnnsfjQuery = $;
    if (!window.jQuery)
        window.jQuery = $;

    // execute the initialization code when done loading
    (function (fn) {
        if ($.isReady) fn(); else $(fn);
    })(function () {

        // if we're in an iframe, hide the scrollbar of current window and rely on auto-height featre
        if (window.top != window && window.location.href.indexOf('isAdminIframe=true') != -1) {
            $('body').css('overflow', 'hidden').attr('scroll', 'no');
        }

    });
};

// returns a query string parameter by name
dnnsf.urlParam = function (name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(decodeURIComponent(window.location.href));
    if (!results) { return 0; }
    return results[1] || 0;
};

dnnsf.parseQueryString = function (queryString) {
    var qs = {},
        match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query = (queryString.indexOf('?') == 0 ? queryString.substring(1) : queryString);

    if (query.indexOf('#') != -1)
        query = query.substring(0, query.indexOf('#'));
	
    while (match = search.exec(query))
        qs[decode(match[1])] = decode(match[2]);
	
    return qs;
};

dnnsf.updateQueryStringParam = function (key, value) {
    var baseUrl = location.protocol + '//' + location.host + location.pathname,
        urlQueryString = document.location.search,
        newParam = key + '=' + encodeURIComponent(value),
        params = '?' + newParam;

    // If the "search" string exists, then build params from it
    if (urlQueryString) {
        keyRegex = new RegExp('([\?&])' + key + '[^&]*');

        // If param exists already, update it
        if (urlQueryString.match(keyRegex) !== null) {
            params = urlQueryString.replace(keyRegex, "$1" + newParam);
        } else { // Otherwise, add it to end of query string
            params = urlQueryString + '&' + newParam;
        }
    }
    history.pushState({}, "", baseUrl + params + location.hash);
};

dnnsf.urlParams = {};
(window.onpopstate = function () {
    dnnsf.urlParams = dnnsf.parseQueryString(window.location.search);
})();

dnnsf.getUrlParts = function (url) {
    var a = document.createElement('a');
    a.href = url;
    var path = a.pathname || '/';
    if (path[0] != '/')
        path = '/' + path;

    return {
        href: a.href,
        host: a.host,
        hostname: a.hostname,
        port: a.port,
        pathname: path,
        protocol: a.protocol,
        hash: a.hash,
        search: a.search,
        query: dnnsf.parseQueryString(a.search),
        relativeUrl: path + a.search + a.hash,

        getUrl: function () {
            return this.pathname + ($.isEmptyObject(this.query) ? '' : '?' + $.param(this.query)) + this.hash;
        }
    };
}

// this scrolls the page to given scroll, taking into account offset and iframe communication when applicable
dnnsf.scrollTo = function (scroll) {

    if (isNaN(parseInt(scroll)))
        return;

    if (window.top != window) {
        // post to top window
        window.top.postMessage(JSON.stringify({
            type: dnnsf.urlParam('comm-prefix') + "-scroll",
            offset: scroll
        }), "*");
    } else {
        // scroll this window
        $('html, body').animate({
            scrollTop: scroll
        }, 500);
    }

};

dnnsf.initStickyLoading = function (mid) {
    var context = {
        timeOutVar: null,
        parent: $('#' + mid),
        el: $('#' + mid + ' .common-data-loading'),
        el2: $('#' + mid + ' .common-loading-text')
    };

    var elOffset = 0;
    if (context.el.parent().height() <= 270) {
        // put the loading animation in the middle of the container if it's height is small.
        elOffset = context.el.parent().height() / 2 - context.el.height() / 2;
    } else {
        // put the loading animation 200px from the top of the container if it's height can accommodate the loader.
        elOffset = 200;
    }
    var el2Offset = elOffset + 50;
    context.el.css("top", elOffset + 'px');
    context.el2.css("top", el2Offset + 'px');

    $(window).off('scroll', onWindowScroll).on('scroll', context, onWindowScroll);
}

function onWindowScroll(event) {
    var context = event.data;

    clearTimeout(context.timeOutVar);
    context.timeOutVar = setTimeout(function () {
        if (context.parent.offset && window.pageYOffset > context.parent.offset().top) {
            var top = window.pageYOffset - context.parent.offset().top + 200;
            context.el.fadeOut(0)
                .css({ "top": top + "px" })
                .fadeIn(300);
            context.el2.fadeOut(0)
                .css({ "top": 50 + top + "px" })
                .fadeIn(300);
        }
        else {
            context.el.css({ "top": '200px' });
            context.el2.css({ "top": "250px" });
        }
    }, 500);
};

// always use this logging function since it will take care of disabling the logging on production 
//   and also it measures execution time (not very precisely though)
dnnsf.log = function () {
    if (!this.isDebug || !window.console || !console.log)
        return;

    // append timestamp to list of arguments
    var args = Array.prototype.slice.call(arguments);
    args.push(new Date().getTime() - this.start);

    // call the broser logging function
    // TODO: in IE objects are no expanded, instead IE will show [Object object] string
    // it would be useful to do a JSON.stringify on IE
    Function.apply.call(console.log, console, args);
};

dnnsf.canAccessIFrame = function (ifr) {
    var key = (+new Date) + "" + Math.random();

    try {
        var global = ifr.contentWindow;
        global[key] = "check";
        return global[key] === "check";
    }
    catch (e) {
        return false;
    }
}

/**
 * Provide controllerName and actionName as string with no slashes
 * @param {string} controllerName
 * @param {string} actionName
 * @param {object} args
 */
dnnsf.getWebApiEndpoint = function (controllerName, actionName, args) {
    if (!args) args = {};

    delete args.$$_q;

    var url = dnnsf.webApiServiceRoot + controllerName + '/' + actionName;
    var queryString = "";

    for (var name in args) {
        if (args.hasOwnProperty(name))
            queryString += '&' + name + '=' + encodeURIComponent(args[name]);
    }
    if (queryString) {
        url += "?" + queryString.substr(1); // remove first '&' character
    }
    return url;
}

dnnsf.adminApi = function (method, args, options, isWebApi) {
    options = options || {};
    options.apiUrl = options.apiUrl || g_dnnsfState.adminApi;
    options.moduleId = options.moduleId || g_dnnsfState.moduleId || -1;
    options.tabId = options.tabId || g_dnnsfState.tabId;
    options.apiVersion = options.apiVersion || g_dnnsfState.apiVersion;
    options.alias = options.alias || dnnsf.alias || g_dnnsfState.alias;
    options.aliasid = options.aliasid || dnnsf.aliasid || g_dnnsfState.aliasid;
    // if webApi is true then it builds the url for webApi with slahes, else it builds the normal URL
    if (isWebApi) {
        var webApiRootUrl = g_dnnsfState.siteRoot; // this contains both the virtual path and portal name and ensures WebAPI calls are okay.
        var webApiUrl = webApiRootUrl + options.apiUrl.replace(/^\/|\/$/g, '');
        url = webApiUrl + "/" + method + '?_aliasid=' + options.aliasid // options here is the URL string (e.g. Api/Admin)
    }
    else {
        url = options.apiUrl + '?method=' + method +
            (options.apiVersion == '2.0'
                ?
                ('&_aliasid=' + options.aliasid + '&_mid=' + options.moduleId + '&_tabid=' + options.tabId)
                :
                ('&_aliasid=' + options.aliasid + '&mid=' + options.moduleId + '&tabid=' + options.tabId))
    }

    if (!args)
        return url;

    for (var name in args) {
        if (name === "$$_q")
            continue;
        if (args.hasOwnProperty(name))
            url += '&' + name + '=' + encodeURIComponent(args[name]);
    }
    return url;
};

dnnsf.parseCssBlock = function (styleContent) {

    var rules = {};
    dnnsf.$.each(styleContent.split(';'), function (i, part) {
        var isep = part.indexOf(':');
        if (isep == -1)
            return; // ?
        rules[dnnsf.$.trim(part.substr(0, isep))] = dnnsf.$.trim(part.substr(isep + 1));
    });

    return rules;
};

dnnsf.createClass = function (name, rules) {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule) {
        (style.styleSheet || style.sheet).addRule(name, rules);
    }
    else {
        style.innerHTML = name + "{" + rules + "}";
    }
};

dnnsf.stackTrace = function () {

    //return '';
    //var e = new Error('dummy');
    //var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
    //    .replace(/^\s+at\s+/gm, '')
    //    .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
    //    .split('\n');
    //// remove the call to this function
    //stack.splice(0, 1);
    //return stack;
};

// this function tries to guess if a string is an object or array
dnnsf.eval = function (obj) {

    if (typeof (obj) != 'string')
        return obj;

    if (!isNaN(parseInt(obj)))
        return parseInt(obj);

    if (!isNaN(parseFloat(obj)))
        return parseFloat(obj);

    // TODO: find a better way to determine json arrays and objects - for example with a regex
    if (obj[0] == '[' || obj[0] == '{')
        return eval(obj);

    if (obj == "false")
        return false;

    if (obj == "true")
        return true;

    // just return it as string
    return obj;
};

// if object is array, return it, otheriwse return a new array with only this item
dnnsf.toArray = function (obj) {
    if (!obj) return [];
    if (!$.isArray(obj))
        obj = [obj];
    return obj;
};

dnnsf.tryParseBool = function (o) {
    //  JSON values aren't necessary strings
    if (typeof (o) !== 'string')
        return o;

    if (o.toLowerCase() == 'true')
        return true;

    if (o.toLowerCase() == 'false')
        return false;

    return o;
};

dnnsf.stringToBool = function (input) {
    return typeof input === 'boolean' && input || (input ? JSON.parse(input.toLowerCase()) : false);
}

// returns baseId + altId if altId exists, otherwise generates an unique string
dnnsf.uniqueId = function (baseId, altId) {
    if (!altId || altId == -1)
        return baseId + new Date().getTime() + Math.floor(Math.random() * 10000);
    return baseId + altId;
}

dnnsf.generateUuid = function () {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16);
    });
}

dnnsf.randomString = function (length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

dnnsf.initParameters = function (def, field, ensureItSupportsExpressions) {
    if (!def || def.Parameters == undefined || !field)
        return;

    for (var i = 0; i < def.Parameters.length; i++) {

        var p = def.Parameters[i];
        if (ensureItSupportsExpressions && (p.Type == 'Select' || p.Type == 'FieldSelect')
            && ($.type(field.Parameters[p.Id]) != "object" || (!field.Parameters[p.Id].hasOwnProperty('Value') && !field.Parameters[p.Id].hasOwnProperty('IsExpression'))))
            field.Parameters[p.Id] = { Value: field.Parameters[p.Id], IsExpression: false, Expression: '' };

        // action list need to be initialized to empty arrays
        if (p.Type == 'ActionList' && !field.Parameters[p.Id]) {
            field.Parameters[p.Id] = [];
        } else if (p.Type == 'ActionList' && field.Parameters[p.Id]) {
            field.Parameters[p.Id] = $.grep(field.Parameters[p.Id], function (e) { return !e.IsDeleted });
        }

        // check either this parameter already has a value
        if (typeof field.Parameters[p.Id] != 'undefined')
            continue;
        if (p.Id != 'DataSource') {
            if (typeof field.Parameters[p.Id] != 'undefined')
                continue;
            if (p.Type == 'Select' || p.Type == 'FieldSelect' || p.Type == 'MultipleFieldSelect')
                field.Parameters[p.Id] = {
                    Expression: '',
                    Value: p.DefaultValue ? g_localizeMaybeJson(p.DefaultValue) : '',
                    IsExpression: false
                };
            else field.Parameters[p.Id] = p.DefaultValue ? g_localizeMaybeJson(p.DefaultValue) : '';
        } else {
            // check either this parameter already has a value
            if (typeof field.Parameters[p.Id] != 'undefined') {
                // try to convert to object format
                if (!field.Parameters[p.Id].hasOwnProperty('SupportsExpressions')) {
                    // if already an object with IsExpression
                    if (field.Parameters[p.Id].hasOwnProperty('IsExpression')) {
                        field.Parameters[p.Id].SupportsExpressions = true;
                    }
                    else {
                        field.Parameters[p.Id] = {
                            SupportsExpressions: false,
                            Expression: '',
                            Value: field.Parameters[p.Id],
                            IsExpression: false,
                            Parameters: {}
                        }

                    }
                }
                continue;
            }

            field.Parameters[p.Id] = p.DefaultValue ? g_localizeMaybeJson(p.DefaultValue) : ({
                SupportsExpressions: p.Settings && p.Settings['SupportsExpressions'] == 'true',
                Expression: '',
                Value: '',
                IsExpression: false,
                Parameters: {}
            });
        }
        //  maybe we have non-localized default settings
        if (!field.Parameters[p.Id] && !p.DefaultValue && p.Settings && p.Settings['Defaults']) {
            var val = p.Settings['Defaults'];
            //  also see g_localizeMaybeJson; it will throw exception if not json
            if (val && (val[0] == '[' || val[0] == '{')) {
                var processBool = (val[0] != '[');
                val = $.parseJSON(val);
                //  we only can have arrays of bools ?
                if (!processBool) {
                    field.Parameters[p.Id] = {};
                    for (var j = 0; val.length > j; ++j)
                        field.Parameters[p.Id][val[j]] = true;
                    return;
                }
            }
            field.Parameters[p.Id] = val;
        }

        // booleans will come as strings, convert them to true bool
        if (typeof (field.Parameters[p.Id]) === 'object') {
            $.each(field.Parameters[p.Id], function (key, value) {
                field.Parameters[p.Id][key] = dnnsf.tryParseBool(value);
            });
        } else {
            field.Parameters[p.Id] = dnnsf.tryParseBool(field.Parameters[p.Id]);
        }

    }

}

dnnsf.includeJs = function (window, file, callback) {
    var head = window.document.getElementsByTagName('head')[0];
    var script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.src = file;
    script.onload = script.onreadystatechange = function () {
        // execute dependent code
        if (callback) callback();
        // prevent memory leak in IE
        head.removeChild(script);
        script.onload = null;
    };
    head.appendChild(script);
}

dnnsf.includeCss = function (path) {
    $('<link>')
        .appendTo('head')
        .attr({
            type: 'text/css',
            rel: 'stylesheet',
            href: path
        });
}

dnnsf.asQueryString = function (obj) {
    var qs = '';
    for (var k in obj) {
        if (!obj.hasOwnProperty(k))
            continue;
        qs += encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]) + '&';
    }
    if (qs.length)
        qs = qs.substring(0, qs.length - 1)
    return qs;
}

dnnsf.appendQueryToUrl = function (url, query) {
    if (url[url.length - 1] == '?' || url[url.length - 1] == '&')
        url = url.substr(0, url.length - 1);

    var sep = url.indexOf('?') == -1 ? '?' : '&';

    if ("string" == typeof query)
        url += sep + query;
    else for (var k in query) {
        if (!query.hasOwnProperty(k))
            continue;
        url += sep + encodeURIComponent(k) + '=' + encodeURIComponent(query[k]);
        sep = '&';
    }

    return url;
};

dnnsf.getTimezoneOffset = function (date) {
    function pad(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
    }

    var local = date || new Date();
    var tzo = -local.getTimezoneOffset();
    var sign = tzo >= 0 ? '+' : '-';

    return sign + pad(tzo / 60)
        + ':' + pad(tzo % 60);
};

dnnsf.loadJsFromHtml = function (html) {
    var scripts = $(html).find('script');
    if (scripts.length <= 0)
        return;
    var filesToLoad = [];
    $.each(scripts, function (i, v) {
        if ($(v).attr('src') != undefined)
            filesToLoad.push({ src: $(v).attr('src') })
        else
            filesToLoad.push({ toEval: $(v).text() })
    });
    loadJs(filesToLoad[0]);

    function loadJs(js) {
        if (js.toEval) {
            eval(js.toEval)
            filesToLoad.shift();
            filesToLoad.length && loadJs(filesToLoad[0]);
        } else {
            filesToLoad.shift();
            $.ajax({
                cache: true,
                url: js.src,
                dataType: "script",
                success: function () {
                    if (filesToLoad.length && filesToLoad[0].toEval) {
                        eval(filesToLoad[0].toEval);
                        filesToLoad.shift();
                    }
                    filesToLoad.length && loadJs(filesToLoad[0]);
                }
            });
        }
    }
}

dnnsf.events = {

    _listeners: {},

    listen: function (messageType, mid, fn) {
        if (!dnnsf.events._listeners[messageType])
            dnnsf.events._listeners[messageType] = {};
        dnnsf.events._listeners[messageType]['mid' + mid] = fn;
    },

    broadcast: function (messageType, data, fnDone) {
        if (!dnnsf.events._listeners[messageType]) {
            fnDone && fnDone();
            return;
        }
        var listenerCount = Object.keys(dnnsf.events._listeners[messageType]).length;
        var listenerResponses = [];
        $.each(dnnsf.events._listeners[messageType], function (i, fn) {
            var fnHandleResponse = function (response) {
                response && listenerResponses.push(response);
                listenerCount--;
                if (listenerCount == 0)
                    fnDone(listenerResponses);
            };

            fn(data, fnHandleResponse);
        });

    },
    emittedEvents: [],
    on: function (event, fn) {
        if (this.emittedEvents[event] == null) {
            this.emittedEvents[event] = [];
        }
        var id = dnnsf.uniqueId('event');
        this.emittedEvents[event][id] = {
            id: id,
            callback: typeof fn === "function" ? fn : function () { console.log(this); console.error('dnnsfEvents: ' + event + ': Check the callBack function') }
        }
        return id;
    },
    emit: function (event, data) {
        if (this.emittedEvents[event] != null) {
            for (id in this.emittedEvents[event]) {
                if (this.emittedEvents[event].hasOwnProperty(id))
                    this.emittedEvents[event][id].callback.call(data || {});
            }
        }
    },
    unbind: function (event, id) {
        if (this.emittedEvents[event] != null && this.emittedEvents[event][id] != null) {
            delete this.emittedEvents[event][id];
        }
    }
    /*
    var eventId = dnnsf.events.on('aaa', function () { console.log(this //will log {date:11111}) })
    dnnsf.events.emit('aaa', { date: 11111 })
    dnnsf.events.unbind('aaa', eventId);
    */
}

dnnsf.configUtils = {

    groupDefinitions: function (defs, fnInclude) {
        var defGroups = {};
        $.each(defs, function (i, o) {
            if (fnInclude && !fnInclude(o))
                return;
            if (o.Groups.length === 0 && o.Settings['Group'] === '')
                return;

            o.Groups && $.each(o.Groups, function (ig, group) {
                if (!defGroups[group])
                    defGroups[group] = [];
                defGroups[group].push(o);
            });

            if (!defGroups[o.Settings['Group']])
                defGroups[o.Settings['Group']] = [];
            defGroups[o.Settings['Group']].push(o);
        });
        return defGroups;
    }
}

dnnsf.hasProps = function (obj) {
    for (var k in obj)
        if (obj.hasOwnProperty(k))
            return true;
    return false;
};

dnnsf.copyToClipboard = function (val) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.css({
        'position': 'absolute',
        'top': '0',
        'z-index': '-9999999'
    });
    $temp.val(val).select();
    $temp.focus();

    var result = document.execCommand("copy");
    $temp.remove();
    return result;

}

dnnsf.promiseResponse = function (method, url, getSvcFramework) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);

        if (getSvcFramework) {
            var svcFramework = getSvcFramework(dnnsf.moduleId);
            xhr.setRequestHeader("RequestVerificationToken", svcFramework.getAntiForgeryValue());
        }

        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr);
            }
        };
        xhr.onerror = function () {
            reject(xhr);
        };
        xhr.send();
    });
};

// Goes through the noConflict chain to identify all loaded bootstrap instances and retrieves their version. 
// The result can contain duplicate version numbers if the same BS version is loaded multiple times from different files (e.g. DNN Skin and our modules).
// return type: undefined | string[]
dnnsf.getBootstrapVersions = function () {
    if (!$ || !$.fn.tooltip || !$.fn.tooltip.Constructor) {
        return undefined;
    }

    // noConflict overrides the $.fn.tooltip, so we need to make sure we preserve the latest version.
    var latestPlugin;
    var result = [$.fn.tooltip.Constructor.VERSION];
    var noConflict = $.fn.tooltip.noConflict;
    if (noConflict) {
        noConflict = noConflict.bind($.fn.tooltip); // function relies on `this` so we need to properly bind it.
        latestPlugin = noConflict();
        $.fn.tooltip = latestPlugin;
    }

    while (noConflict) {
        noConflict();
        var oldPlugin = $.fn.tooltip;
        $.fn.tooltip = latestPlugin;

        // Check if we still have a reference to a bootstrap object. $.fn.tooltip is also used by jQuery UI tooltip.
        if (!oldPlugin || !oldPlugin.Constructor) {
            break;
        }

        result.push(oldPlugin.Constructor.VERSION);
        noConflict = oldPlugin.noConflict;
        if (noConflict) {
            noConflict = noConflict.bind(oldPlugin); // function relies on `this` so we need to properly bind it.
        }
    }

    return result;
};

dnnsf.bootstrap3Loaded = function () {
    var versionList = dnnsf.getBootstrapVersions();
    return versionList && versionList.some(function(versionStr) { return parseInt(versionStr[0]) === 3; });
}

dnnsf.bootstrap5Loaded = function () {
    var versionList = dnnsf.getBootstrapVersions();
    return versionList && versionList.some(function(versionStr) { return parseInt(versionStr[0]) === 5; });
}

dnnsf.api = dnnsf.api || {};

var initDnnsf = function (angular) {
    angular.module('dnnsf', [])
        .service('dnnsf', ['$timeout', function ($timeout) {

            this.env = dnnsf;
            this.start = new Date().getTime();

            // copy everything in dnnsf
            for (var key in dnnsf)
                this[key] = dnnsf[key];
        }])
        .factory('dnnsfHttp', ['$http', function ($http) {
            function createShortMethods(httpSvc, names) {
                $.each(arguments, function (idx, name) {
                    if (typeof name != 'string')
                        return;

                    httpSvc[name] = function (moduleId, url, config, withAntiForgery) {
                        return httpSvc(moduleId, $.extend({}, config || {}, {
                            method: name,
                            url: url
                        }), withAntiForgery);
                    };
                });
            }

            function createShortMethodsWithData(httpSvc, names) {
                $.each(arguments, function (idx, name) {
                    if (typeof name != 'string')
                        return;

                    httpSvc[name] = function (moduleId, url, data, config, withAntiForgery) {
                        return httpSvc(moduleId, $.extend({}, config || {}, {
                            method: name,
                            url: url,
                            data: data
                        }), withAntiForgery);
                    };
                });
            }

            var dnnsfHttp = function (moduleId, options, withAntiForgery) {
                if (withAntiForgery == undefined) {
                    withAntiForgery = true;
                }
                options = options || {};

                if (withAntiForgery && !dnnsfjQuery.ServicesFramework) {
                    console.error('Could not initialize DNN ServicesFramework to inject authorization headers. The request will be made without authorization. Make sure that the IServicesFramework.RequestAjaxScriptSupport and RequestAjaxAntiForgerySupport methods are called when rendering the page on the server side.');
                }

                if (withAntiForgery && dnnsfjQuery.ServicesFramework) {
                    var svcFramework = dnnsfjQuery.ServicesFramework(moduleId);
                    var stubXhr = {
                        headers: {},
                        setRequestHeader: function (key, value) {
                            stubXhr.headers[key] = value;
                        }
                    };
                    svcFramework.setModuleHeaders(stubXhr);

                    options.headers = $.extend({}, options.headers || {}, stubXhr.headers);
                }

                return $http(options);
            };

            createShortMethods(dnnsfHttp, 'get', 'delete', 'head', 'jsonp');
            createShortMethodsWithData(dnnsfHttp, 'post', 'put', 'patch');

            return dnnsfHttp;
        }])
        .factory('myInterceptor', ['$log', '$q', function ($log, $q) {
            var myInterceptor = {
                'response': function (response) {
                    if (response.status == 200 && response.data && response.data.error) {
                        console.log("App HTTP error", response);
                        // if (response.data.redirect) {
                        //     window.top.location = response.data.redirect;
                        //     return;
                        // }
                        // alert('Error getting response from ' + response.config.url + '.\n\nError: ' + response.data.error);
                    }
                    return response;
                },
                'responseError': function (rejection) {
                    if (rejection.status && rejection.status != 404 && !rejection.config.ignoreInterceptor) {
                        // status:0 means an unitialized ajax request, 
                        // it happens for example the page is refreshed before the ajax request gets the chance to make connection
                        console.log("HTTP error", rejection);
                        // alert('error' + rejection);
                    }
                    return $q.reject(rejection);
                }
            };

            return myInterceptor;
        }])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('myInterceptor');
        }]);
}
window.angular ? initDnnsf(angular) : '';
window.dnnsfAngular15 ? initDnnsf(dnnsfAngular15) : '';
