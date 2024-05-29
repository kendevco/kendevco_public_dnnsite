$( document ).ready(function() {
    
  //class toggles for categories menu dropdown
  $("#toggle-categories").click(function(){
  		$(".categories-menu-trigger").toggleClass("active");
	});

	$("#toggle-categories").click(function(){
  		$(".category-list").toggleClass("active");
	});

	//brings user down page to search/category results if search or category is active
	 if(window.location.href.indexOf("/CategoryName") > -1) {
      $('.clear-filters').addClass("active");
   	   document.getElementById('dig-deeper').scrollIntoView();
   	}

   	if(window.location.href.indexOf("/EDNSearch/") > -1) {
      $('.clear-filters').addClass("active");
   	   document.getElementById('dig-deeper').scrollIntoView();
   	}

   	//Grabs the text from the current category text set by EasyDNNCategories module
    var currentCategory = $('.cancer-frontier .category-menu-container .category-list  li.active div a').text();

    //Sets the click to open placeholder to the current active category
    $(".cancer-frontier .category-menu-container .categories-menu-trigger span").html(currentCategory);

   	//Sets the click to open placeholder to "Select a Category" if no category is active
   	$(".cancer-frontier .category-menu-container .categories-menu-trigger span").each(function() {
        if ($(this).text() == "") {
           $(".cancer-frontier .category-menu-container .categories-menu-trigger span").html("Select a Category")
        }
   	});

    $('.trigger .actionTextContainer span').html('View More Resources <i class="fal fa-angle-down"></i>');

    $( ".trigger" ).click(function() {
      $('.trigger .actionTextContainer span').html('View More Resources <i class="fal fa-angle-down"></i>');
    });
});

// $(window).load(function(){
//    	if(window.location.href.indexOf("?CategoryName") > -1) {
//    	   document.getElementById('dig-deeper-anchor').scrollIntoView();
//    	}

//    	if(window.location.href.indexOf("/EDNSearch/") > -1) {
//    	   document.getElementById('dig-deeper-anchor').scrollIntoView();
//    	}
// });

