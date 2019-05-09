Splitting();
$(window).mousemove(function(e) {

  $(".cursor").css({
    left: e.pageX,
    top: e.pageY
  })

})

$(".link")
.on("mouseenter", function() {

  $('.cursor').addClass("active")

})
.on("mouseleave", function() {

  $('.cursor').removeClass("active")

})
