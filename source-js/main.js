$(document).ready(function() {

  $('.next').click(function () {
    var currentImage = $('.curry')
    var currentImageIndex = $('.main-slide.curry').index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $('.main-slide').eq(nextImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass('curry')

    if (nextImageIndex == ($('.main-slide:last').index() + 1)) {
      $('.main-slide').eq(0).fadeIn(1000);
      $('.main-slide').eq(0).addClass('curry')
    } else {
      nextImage.fadeIn(1000);
      nextImage.addClass('curry')
    }
  })

  $('.prev').click(function () {
    var currentImage = $('.curry')
    var currentImageIndex = $('.main-slide.curry').index();
    var prevImageIndex = currentImageIndex - 1;
    var prevImage = $('.main-slide').eq(prevImageIndex);

    currentImage.fadeOut(1000)
    currentImage.removeClass('curry')
    prevImage.fadeIn(1000)
    prevImage.addClass('curry')
  })
})