$(document.body).ready(function () {

  $('.catalog__content__list__link').on('click', function () {
    $('.catalog__content__list__link').removeClass('catalog-item-active');
  })

  $('.product__image').on('click', function () {
    window.location.href = 'http://gordeevtimur.ru/bmsuniform/product.html';
  })

  /* <-- Плавный якорь --> */
  $(function () {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top - 100 + "px"
      });
      return false;
    });
  });
  /* <-- scroll-up button --> */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#button-up').fadeIn();
    } else {
      $('#button-up').fadeOut();
    }
  });

  $('#button-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  /*-------------------*/





  var mainImg = $('.product-card__product__images__main');
  $('.product-card__product__images__item').on('click', function () {
  var imgIndex = $(this).index();
  $('.product-card__product__images__main').removeClass('image-active')
  $('.product-card__product__images__item').removeClass('item-active')
  $(this).addClass('item-active');
  var activeImg = $('.product-card__product__images__main')[imgIndex];
  $(activeImg).addClass('image-active');
  })

  var color = $('.product-card__product__description__color__item')
  $(color).on('click', function() {
    $(color).removeClass('item-active');
    $(this).addClass('item-active');
  })

  $('#90').on('click', function() {
    $('#91').addClass('falseMethod');
    $('#91').removeClass('trueMethod');
    $('#90').removeClass('falseMethod');
    $('#90').addClass('trueMethod');
    $('#method1').removeAttr("checked");
    $('#method2').attr("checked", "checked");
    $('.product-card__product__description__delivery__points').css('display', 'none');
    $('.product-card__product__description__delivery__self__points').css('display', 'block');
    $()
  })
   $('#91').on('click', function () {
     $('#90').addClass('falseMethod');
     $('#90').removeClass('trueMethod');
     $('#91').removeClass('falseMethod');
     $('#91').addClass('trueMethod');
     $('#method2').removeAttr("checked");
     $('#method1').attr("checked", "checked");
     $('.product-card__product__description__delivery__points').css('display', 'block');
     $('.product-card__product__description__delivery__self__points').css('display', 'none');
   })
   

   $('#ww').on('click', function() {
     $('#ww').css('border-color', 'orange');
     $('#qq').css('border-color', '#919191');
   })
   $('#qq').on('click', function() {
     $('#qq').css('border-color', 'orange');
     $('#ww').css('border-color', '#919191');
   })
   $('#ee').on('click', function() {
     $('#ee').css('border-color', 'orange');
     $('#rr').css('border-color', '#919191');
   })
   $('#rr').on('click', function() {
     $('#rr').css('border-color', 'orange');
     $('#ee').css('border-color', '#919191');
   })

   $('.charact').on('click', function() {
     $('.product-card__specifications__title__header').removeClass('header-active');
     $(this).addClass('header-active');
     $('#charact').css('display', 'flex');
     $('#saller').css('display', 'none');
     $('#othersites').css('display', 'none');
   })
   $('.saller').on('click', function() {
     $('.product-card__specifications__title__header').removeClass('header-active');
     $(this).addClass('header-active');
     $('#charact').css('display', 'none');
     $('#saller').css('display', 'flex');
     $('#othersites').css('display', 'none');
   })
   $('.othersites').on('click', function() {
     $('.product-card__specifications__title__header').removeClass('header-active');
     $(this).addClass('header-active');
     $('#charact').css('display', 'none');
     $('#saller').css('display', 'none');
     $('#othersites').css('display', 'flex');
   })
  






  $('.platforms__swiper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: $('.platforms__prev'),
    nextArrow: $('.platforms__next'),
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
    ]
  });
  $('.product-card__platforms__swiper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: $('#platforms__prev2'),
    nextArrow: $('#platforms__next2'),
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
    ]
  });

  $('.platforms__prev').on('click', function () {
    $('.platforms__swiper').slick('slickPrev');
  })
  $('.platforms__next').on('click', function () {
    $('.platforms__swiper').slick('slickNext');
  })


  $('#platforms__prev2').on('click', function () {
    $('.product-card__platforms__swiper').slick('slickPrev');
  })
  $('#platforms__next2').on('click', function () {
    $('.product-card__platforms__swiper').slick('slickNext');
  })


  var burger = $('#burger-menu');
  burger.on('click', function () {
    burger.toggleClass('burger--active');
  })

  $('.hero__catalog__list__item__catalog').mouseenter(function () {
    $('.hero__catalog__list__name__catalog__content__list').addClass('catalog__list--visible');
  })
  $('.hero__catalog__list__item__catalog').mouseleave(function () {
    $('.hero__catalog__list__name__catalog__content__list').removeClass('catalog__list--visible');
  })

})
  