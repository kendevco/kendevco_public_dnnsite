; function dnnsfInitFrame(iframe, prefix, optUrl) {

    var $ = dnnsfjQuery;
    iframe = $(iframe);
    if (iframe.length) {
        iframe[0].src = iframe[0].src + (iframe[0].src.indexOf('?') == -1 ? '?' : '&') + 'isAdminIframe=true';
    }
    $(function () {
        iframe.attr("scrolling", "no");
        var prevHeight = 0;
        setInterval(function () {
            if (iframe[0].contentWindow.document.body) {
                var height = iframe[0].contentWindow.document.body.scrollHeight;

                if (height != prevHeight) {
                    height += 25;
                    prevHeight = height;
                    iframe.height(height);
                }

                $('body', iframe[0].contentWindow.document).css('overflow', 'hidden').attr('scroll', 'no');
            }

        }, 200);

        $(window).bind("message", function (event) {
            iframe.attr("scrolling", "no");
            var msg;
            try { msg = JSON.parse(event.originalEvent.data); } catch (e) { return; }
            if (msg && typeof msg == "object") {
                if (msg.type == prefix + "-scroll") {
                    $('html, body').animate({
                        scrollTop: iframe.offset().top + msg.offset
                    }, 500);
                }
            }
        });

        var _oldOffset = 0;
        setInterval(function () {
            var offset = $(window).scrollTop() - iframe.offset().top
                + $('body').offset().top; // in admin mode, there's a margin on the body to account for the top control panels

            // only send the message if offset has changed
            if (offset == _oldOffset || !iframe[0].contentWindow)
                return;

            _oldOffset = offset;
            iframe[0].contentWindow.postMessage(JSON.stringify({
                type: prefix + "-offset",
                offset: offset
            }), "*");
        }, 100);

        // fix the opacity that DNN adds in edit mode
        iframe.parents('.DnnModule:first').css('opacity', '1');

    });

}
