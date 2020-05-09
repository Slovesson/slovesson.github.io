$(function () {
  "use strict";

  /* Анимация, плавный скроллинг */
  $('a[href^="#"]').click(function () {
    let target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },

      800
    );
  });

  let offset = $("#main-bar").offset();

  $(window).scroll(function () {
    if ($(window).scrollTop() > offset.top) {
      $("#main-bar").addClass("fixed");
    } else {
      $("#main-bar").removeClass("fixed");
    }
  });

  if (window.innerWidth < 1025) {
    $("#slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $("#slider2").slick({
      infinite: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  } else {
    $("#slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $("#slider2").slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
});
