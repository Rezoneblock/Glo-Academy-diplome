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

  var burger = $('#burger-menu');
  burger.on('click', function () {
    burger.toggleClass('burger--active');
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

  $('.platforms__prev').on('click', function () {
    $('.platforms__swiper').slick('slickPrev');
  })
  $('.platforms__next').on('click', function () {
    $('.platforms__swiper').slick('slickNext');
  })

    $('#select').on('click', function() {
      console.log($('.list2').val());
      if ($('.list2').val() == '10max') {
        $('#last-item1').css('display', 'none');
        $('#last-item2').css('display', 'none');
        $('#last-item3').css('display', 'none');
        $('#last-item4').css('display', 'none');
        $('#last-item5').css('display', 'none');
      }
    })
    $('#select').on('click', function() {
      console.log($('.list2').val());
      if ($('.list2').val() == '15max') {
        $('#last-item1').css('display', 'block');
        $('#last-item2').css('display', 'block');
        $('#last-item3').css('display', 'block');
        $('#last-item4').css('display', 'block');
        $('#last-item5').css('display', 'block');
      }
    })
  

    $('.hero__catalog__list__item__catalog').mouseenter(function () {
      $('.hero__catalog__list__name__catalog__content__list').addClass('catalog__list--visible');
    })
    $('.hero__catalog__list__item__catalog').mouseleave(function () {
      $('.hero__catalog__list__name__catalog__content__list').removeClass('catalog__list--visible');
    })

    $('.catalog__content__list__header-list').on('click', function () {
      $('.catalog__content__list').toggleClass('catalog__list--visible');
    })


})