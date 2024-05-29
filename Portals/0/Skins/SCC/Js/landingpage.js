$(function() {
  $(".fancybox").fancybox({
    // width: "70%", // or whatever
    // height: "70%",
    padding: 0,
    type: "iframe",
    iframe: {
      preload: false
    },
    helpers: {
      media: {}
    }
  });
});
