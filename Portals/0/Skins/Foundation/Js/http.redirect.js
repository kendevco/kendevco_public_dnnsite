// https redirect
// var arrSecure = ["/login.aspx", "/shareyourstory.aspx", "/foundationdonation/donate.aspx", "/wecaredonation/donate.aspx"]
function httpRedirect(arrSecure) {
    if (!inIframe()) {
        var href = window.location.href.toLowerCase();
        var isSecuredPage = false;
        for (var i = 0; i < arrSecure.length; i++) {
            if (href.indexOf(arrSecure[i]) != -1) {
                isSecuredPage = true;
                if (href.indexOf("https://") == -1)
                    window.location.href = href.replace("http://", "https://");
                break;
            }
        }
        if (href.indexOf("https://") != -1 && !isSecuredPage)
            window.location = href.replace("https://", "http://");
    }
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}