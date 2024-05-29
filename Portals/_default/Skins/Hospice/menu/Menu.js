function splitSubMenu(columns) {
    //jQuery(".topNav div.sub").each(function (i) {
    //    var items = jQuery(this).find('.tempUL .subheader');//get all child items
    //    var itemsPerCol = Math.floor(items.length / columns);//number of items per column
    //    var delta = items.length % columns;
    //    var i = 0;
    //    var colIndex = 0;
    //    var slice;
    //    while (i < items.length) {

    //    	if (colIndex < delta) {
    //    		slice = items.slice(i, i + itemsPerCol + 1);
    //    		i += itemsPerCol + 1;
    //    	}
    //    	else {
    //    		slice = items.slice(i, i + itemsPerCol);
    //    		i += itemsPerCol;
    //    	}

    //    	slice.wrapAll("<div class='col col-md-3 col-sm-3'><ul class='dropBoxLevel1'></ul></div>");

    //    	colIndex++;
    //    }

    //    jQuery(this).find(".col").unwrap();
    //    jQuery(this).find(".col").wrapAll("<div class='row'></div>");
  
    //});

}

jQuery.fn.isChildOf = function (b) {
    return (this.parents(b).length > 0);
};

jQuery(document).ready(function () {
    jQuery("ul.menu .has-child > a").append("<i class=\"icon icon-direction arrow_carrot-down\"></i>");
     
  //  jQuery(".level0 > a").append("<span class=\"icon-arrow-right-generic\" href=\"javascript:void();\"></span>");

    /*Open external links in new window */
    /*
    jQuery("ul.megamenu li.subheader a").each(function (i) {
        var url = $(this).attr("href");
        var text = $(this).text();
        var domain = window.location.host;
        if (url.indexOf(domain) < 0) {
            $(this).attr("target", "_blank");
        }
    });
    */


    function megaHoverOver() {
        /*
        jQuery(this).find(".sub").stop().fadeTo('slow', 0.95).show();
        jQuery(this).find(".childIndicator").stop().fadeTo('slow', 1).show();

        //Calculate width of all ul's
        (function (jQuery) {
            jQuery.fn.calcSubWidth = function () {
                rowWidth = 0;
                //Calculate row
                $(this).find("col").each(function () {
                    rowWidth += $(this).width();
                });
            };
        })(jQuery);

        
        if (jQuery(this).find(".col").length > 0) { //If row exists...
            var biggestRow = 0;
            //Calculate each row
            jQuery(this).find(".col").each(function () {
                jQuery(this).calcSubWidth();
                //Find biggest row
                if (rowWidth > biggestRow) {
                    biggestRow = rowWidth;
                }
            });
            //Set width
            jQuery(this).find(".sub").css({ 'width': '970px' });
 
            jQuery(this).find(".row:last").css({ 'margin': '0' });


            //set sub menu position
            var rootItemX = $(this).offset().left;
            var rootItemWidth = $(this).width();

            if (rootItemX + biggestRow > $(window).width()) {
            //if ($(this).isChildOf(".rightTopNav")) {               
                var subLeftPos = rootItemWidth - biggestRow - 20; //30 is padding right of submenu
                $(this).find(".sub").css({ 'left': -rootItemX });
            }
            else {
                $(this).find(".sub").css({ 'left': -rootItemX });
            }
        } else { //If row does not exist...

            jQuery(this).calcSubWidth();
            //Set Width
            jQuery(this).find(".sub").css({ 'width': '970px' });

        }
        */
    }

    function megaHoverOut() {
        jQuery(this).find(".sub").stop().fadeTo('slow', 0, function () {
            jQuery(this).hide();
        });
        jQuery(this).find(".childIndicator").stop().fadeTo('slow', 0, function () {
            jQuery(this).hide();
        });
    }


    var config = {
        sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
        interval: 100, // number = milliseconds for onMouseOver polling interval    
        over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
        timeout: 100, // number = milliseconds delay before onMouseOut    
        out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
    };

    //jQuery("ul.megamenu li .sub").css({ 'opacity': '0' });
    //jQuery("ul.megamenu li.level0 div.childIndicator").css({ 'opacity': '0' });
    //jQuery("ul.megamenu li").hoverIntent(config);

});


