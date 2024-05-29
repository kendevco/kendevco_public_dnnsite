$(document).ready(function () {
  $('#mobile-menu').sidr({
    side: 'right',
    displace: false,
  });

  $('.toggle-submenu').click(function (e) {
    e.preventDefault();
    var $this = $(this);

    // Open child menu
    $this.next().toggleClass('visible');

    // Toggle between +/- icons
    var $icon = $this.find('i');
    var newIcon = $icon.text() == "add" ? "remove" : "add";
    $icon.text(newIcon);
  });

  $('.close-menu').click(function (e) {
    e.preventDefault();
    $.sidr('close');
  });

  var $mobileUtilities = $('li.mobile-give-now').nextAll();

  $mobileUtilities.addClass('mobile-utility-menu');
  $mobileUtilities.first().css('padding-top', '30px');
  $mobileUtilities.last().css('padding-bottom', '30px');

  // Workaround to prevent FOUC
  $('#sidr').fadeIn(2000); 
});