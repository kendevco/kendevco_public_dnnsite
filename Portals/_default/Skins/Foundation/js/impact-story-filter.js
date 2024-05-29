$(document).ready(function () {
  $('.impact-filter-options a').click(function (e) {
    e.preventDefault();
    var category = $(this).data('category');

    $('.impact-filter-options a').each(function () {
      $(this).removeClass('active');
    })

    $(this).addClass('active');

    filterStories(category);
  });

  $('#impact-filter-select').change(function () {
    filterStories($(this).val());
  })

  function filterStories(category) {
    $('.hover-list-item-wrapper').each(function () {
      var $this = $(this);

      if (category == 'all') {
        $this.show();
      } else if (!$this.hasClass(category)) {
        $this.hide();
      } else if ($this.hasClass(category)) {
        $this.show();
      }
    });
  }
});