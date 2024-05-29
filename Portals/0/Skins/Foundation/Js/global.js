$(window).load(function () {  

    $('#search-button').click(function(){
        
        var searchInput = encodeURI($('#gcse-search').val());
        document.location.assign(document.location.origin + "/Foundation/Search?search=" + searchInput)
    
    });

    $("#gcse-search").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#search-button").click();
        }
    });

});        


$(function() {

    /*mobile - footer expand/collapse links*/
    $('.footerWrap .box-title').click(function(event) {
        event.stopPropagation();
        var thisBox = $(this).parent().next();
        var thisIcon = $(this).find('.baricon');

        if ($('.footerWrap .baricon').hasClass('icon-accordion-open')) { //get all item has class .baricon'
            $('.footerWrap .baricon').removeClass('icon-accordion-open').not(thisIcon).addClass('icon-accordion-closed'); //close all except the current one
        }

        if ($('.footerWrap .box').is(':visible')) {
            $('.footerWrap .box').not(thisBox).slideUp();
        }
        $(this).find('.baricon').toggleClass('icon-accordion-closed icon-accordion-open');
        $(this).parent().next().slideToggle();
        return false;
    });

    /* Back To Top*/
    $("#topbtn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    /* Top Menu */
    $(".dropBox").hover(function() {
        $(this).parent("li").toggleClass("activeNav")
    });
    $(".push").append("<div class='overlay'></div>");

    $('[data-toggle=".push"]').click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-mainNav");
        $(".overlay").toggleClass('overlay-show');
        $('html, body').css('overflowX', 'hidden');
        return false;
    });
    $(".overlay").click(function() {
        $(".push").toggleClass("open-mainNav");
        $(".overlay").removeClass('overlay-show');
        $('html, body').css('overflowX', 'auto');
        return false;
    });

    // Call popup
    $('#myModal').modal('toggle');

    $('.director').click(function() {
        return false;
        var id = $(this).data('id');
        var $item = $('.director-detail#item-' + id);
        clicked = true;
        if ($item.is(":visible")) {
            $item.slideUp();
        } else {
            var position = $(this).position();
            $('.top-arrow').css('margin-left', position.left + 12 + "px");

            $('.director-detail.item').hide();
            $item.slideDown();
        }
    });

    //appendDirectorDetailToItem();

    enableSearchButtonForGSC();
});

var clicked = false;
var resizeTimer;
$(window).on('resize', function (e) {
    return false;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        $('.director-detail.item').hide();
        // Run code here, resizing has "stopped"
        appendDirectorDetailToItem();
    }, 250);
});

function enableSearchButtonForGSC() {
    $(".img-submit").click(function () {
        var searchTerm = $(this).parent().find("input[name='search']").val();
        window.location = "/Foundation/Search?search=" + searchTerm;
    });
}

function appendDirectorDetailToItem()
{
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
        $('.director').each(function () {
            var id = $(this).data('id');
            $('.director-detail#item-' + id).appendTo($(this));
        });
    }
    else {
        $('.director').each(function () {
            var itemId = $(this).data('item');
            var id = $(this).data('id');
            $('#item-' + id).appendTo($('#item-detail-' + itemId));
        });
    }
}

function enableSearchButtonForGSC() {
    $(".img-submit").click(function () {
        var searchTerm = $(this).parent().find("input[name='search']").val();
        window.location = "/Search?search=" + searchTerm;
    });
}