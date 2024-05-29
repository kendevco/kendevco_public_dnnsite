$(document).ready(function() {
  $('.expandable-toggle').click(function (e) {
    e.preventDefault();
    $(this).next().toggleClass('hide');

    var $icon = $(this).find('.toggle-icon');
    $icon.text(toggleText($icon.text()));
  });

  $('.expandable-close').click(function (e) {
    e.preventDefault();
    $(this)
      .parents('.expandable-section-body')
      .toggleClass('hide');

    var $icon = $(this)
      .parents('.expandable-section-item')
      .find('.toggle-icon');

    $icon.text(toggleText($icon.text()));
  });

  function toggleText(current) {
    if (current == "add") {
      return "remove";
    }
    return "add";
  }
});