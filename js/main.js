$(document.body).ready(function () {

  $('.catalog__content__list__link').on('click', function() {
    $('.catalog__content__list__link').removeClass('catalog-item-active')
  })

  $('.product__image').on('click', function() {
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
  burger.on('click', function() {
    burger.toggleClass('burger--active');
  })


  var next1 = $('#next1');
  var slideL = $('.swiper-slide').length;
  var present = $('.slide--active').attr('id');
  var desc
  var prev1 = $('#prev1');

  prev1.on('click', function() {
    if (present == 1) {
      present = slideL;
      $('.slide--active').removeClass('animation')
      $('.swiper-slide').removeClass('slide--active');
      $('.swiper-slide__desc').removeClass('slide--active');
      $('#' + present).addClass('slide--active');
      desc = parseInt(present) + 3;
      $('#' + desc).addClass('slide--active');
      $('.slide--active').addClass('animation');
    } else {
      $('.slide--active').removeClass('animation')
      $('.swiper-slide').removeClass('slide--active');
      $('.swiper-slide__desc').removeClass('slide--active');
      present = parseInt(present) - 1;
      $('#' + present).addClass('slide--active');
      desc = parseInt(present) + 3;
      $('.slide--active').addClass('animation');
      if (desc == 3) {
        desc = 6;
        $('#' + desc).addClass('slide--active');
        $('.slide--active').addClass('animation');
      } else {
        $('#' + desc).addClass('slide--active');
        $('.slide--active').addClass('animation');
      }
    }
  })
  next1.on('click', function() {
    if (present == 3) {
      present = 1;
      $('.slide--active').removeClass('animation')
      $('.swiper-slide').removeClass('slide--active');
      $('.swiper-slide__desc').removeClass('slide--active');
      $('#' + present).addClass('slide--active');
      desc = parseInt(present) + 3;
      $('#' + desc).addClass('slide--active');
      $('.slide--active').addClass('animation');
    } else {
      $('.slide--active').removeClass('animation')
      $('.swiper-slide').removeClass('slide--active');
      $('.swiper-slide__desc').removeClass('slide--active');
      present = parseInt(present) + 1;
      $('#' + present).addClass('slide--active');
      $('.slide--active').addClass('animation');
      $('#' + present).addClass('animation');
      desc = present + 3;
      if (desc == 7 ) {
        desc = 4;
        $('#' + desc).addClass('slide--active');
        $('.slide--active').addClass('animation');
      } else {
        $('#' + desc).addClass('slide--active');
        $('.slide--active').addClass('animation');
      }
    }
  })



  function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if (isNaN(dateEnd)) {
      return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
        dateStart.getUTCMonth(),
        dateStart.getUTCDate(),
        dateStart.getUTCHours(),
        dateStart.getUTCMinutes(),
        dateStart.getUTCSeconds());
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);

        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }

    function display(days, hours, minutes, seconds) { }
  }
  countdown('03/31/2022 03:14:07 AM');
 

  $('.platforms__swiper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: $('.platforms__prev'),
    nextArrow: $('.platforms__next'),
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
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

  $('.platforms__prev').on('click', function() {
    $('.platforms__swiper').slick('slickPrev');
  })
  $('.platforms__next').on('click', function () {
    $('.platforms__swiper').slick('slickNext');
  })



  $('.hero__catalog__list__item__catalog').mouseenter(function() {
    $('.hero__catalog__list__name__catalog__content__list').addClass('catalog__list--visible');
  })
  $('.hero__catalog__list__item__catalog').mouseleave(function() {
    $('.hero__catalog__list__name__catalog__content__list').removeClass('catalog__list--visible');
  })




  var modal = $('.modal'),
    modalThanks = $('.modal-thanks'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  /* open modal by pressing button */
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });



  /* close modal by pressing button */
  closeBtn.on('click', function () {
    modal.removeClass('modal--visible'),
      modalThanks.css('opacity', '0'),
      modalThanks.css('visibility', 'hidden');
  });


  /* close modal by clicking everywhere else */
  $(document).on('click', function (event) {
    if ($(event.target).is('.modal')) {
      modal.toggleClass('modal--visible');
    }
  });
  $(document).on('click', function (event) {
    if ($(event.target).is('.modal-thanks')) {
      modalThanks.css('opacity', '0'),
        modalThanks.css('visibility', 'hidden');
    }
  });


  /* close modal press 'esc'  */
  $(document).keydown(function (event) {
    if (event.keyCode === 27) {
      if (modal.hasClass('modal--visible')) {
        modal.toggleClass('modal--visible');
      };
      modalThanks.css('opacity', '0');
      modalThanks.css('visibility', 'hidden');
    };
  });
  /*---------------*/

  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // required 
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 11
      },
      // required group
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true
      }
    },
    // error massages
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя должно быть короче 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный номер"
      },
      policyCheckbox: "Требуется согласие",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ответ сервера: ' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.css('opacity', '1');
          modalThanks.css('visibility', 'visible');
          ym('61238857', 'reachGoal', 'call-button');
          return true;
        },
        error: function (responce) {
          console.error('Ошибка запроса ' + responce);
        }
      });
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    },
  });


})
