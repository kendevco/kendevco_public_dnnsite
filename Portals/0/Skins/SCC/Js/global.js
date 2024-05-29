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

    // Make the two hospital names in the left nav (Barnes-Jewish St. Peters and Progress West) un-clickable    
    var arr = [118, 119, 120, 121, 122, 123];
    $('.subNavLeftMenu ul li.hasChild').each(function() {
        var $this = $(this);
        if (arr.indexOf(parseInt($this.attr('tabid'))) > -1) {
            $this.find('a').addClass('inactiveLink').attr('href', '#');
        }
    });

    // Category section
    $('#category-show').click(function() {
        $('#category-banner').fadeOut("slow");
        $('.category-menu-section').show();
        return false;
    });

    $('.cross-icon').click(function() {
        $('.category-menu-section').hide();
        $('#category-banner').fadeIn("slow");
        return false;
    });

    // Set Banner Title
    var categoryTitle = "News Releases";
    if ($('ul.row-section li.active a').text() != "") {
        categoryTitle = $('ul.row-section li.active a').text();
    }
    $('span.catbannertxt').html(categoryTitle);
    $('.icon-blog-category').parent().append(" / " + categoryTitle);

    enableSearchButtonForGSC();
});

function enableSearchButtonForGSC() {
    $(".img-submit").click(function () {
        var searchTerm = $(this).parent().find("input[name='search']").val();
        window.location = "/Search?search=" + searchTerm;
    });
}

 $(document).ready(function () {
		$('#mobile-search-icon').click(function(){
			$('.row2right').toggleClass('active');
		});
        $('#search-button').click(function(){
            var searchInput = encodeURI($('#gcse-search').val());
            window.location.href = "Search?search=" + searchInput;
        });
        $("#gcse-search").keyup(function(e) {
            if (e.keyCode === 13) {
				e.preventDefault();
                var searchInput = encodeURI($('#gcse-search').val());
				window.location.href = "Search?search=" + searchInput;
            }
        });
        
    });