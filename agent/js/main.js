(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  /* Testimonials Carousel 
  ========================================================*/
  var owl = $("#client-testimonial");
    owl.owlCarousel({
      navigation: true,
      pagination: false,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      addClassActive: true,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsTablet: [767,1],
      itemsTabletSmall: [480,1],
      itemsMobile : [479,1],
    });   
    $('#client-testimonial').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
    $('#client-testimonial').find('.owl-next').html('<i class="lni-chevron-right"></i>');


    /* showcase Slider
    =============================*/
     var owl = $(".showcase-slider");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        margin:10,
        stopOnHover: true,
        autoPlay: true,
        items: 5,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });



  /* 
   Sticky Nav
   ========================================================================== */
   $(document).ready(function (){
    $(window).on('scroll resize',function() {
        if ($(window).scrollTop() >= 160)  {
            $('.header-top-area').addClass('menu-bg');
            $('.navbar-brand').addClass('white');
        } else {
            $('.header-top-area').removeClass('menu-bg');
            $('.navbar-brand').removeClass('white');
        }
    });
    
  }, { window: '95%' });

  
  // 重整後往上
 // window.onbeforeunload = function () {
  //  window.scrollTo(0, 0);
 // }


  /* 
 VIDEO POP-UP
 ========================================================================== */
  $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
  });

  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.backto-top').fadeIn(400);
      } else {
        $('.backto-top').fadeOut(400);
      }
    });

    $('.backto-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* 
   One Page Navigation
   ========================================================================== */


    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });




  /* cooper-slidedown
  ========================================================*/   
  $('.method-qa ul li').click(function(){
    $(this).next().slideToggle().siblings('.method-answer').slideUp();
    $(this).find('i').toggleClass('active').parent().siblings().find('i').removeClass('active');

  });

  $('.type-right a').click(function(){
    event.preventDefault();
    $('.forget-password').fadeIn();
  });
  $('.forget-close img').click(function(){
    $('.forget-password').fadeOut();
  });

  $('.submit a').click(function(){
    event.preventDefault();
    $('.submit-apply').fadeIn();
  });
  $('.submit-button a').click(function(){
    event.preventDefault();
    $('.submit-apply').fadeOut();
  });

  $('.home-account').click(function(){
     $('.input-anima p').addClass('active');

  });




  

 // $(window).scroll(function(){
 //   var scrollPos = $(window).scrollTop();
 //   var windowHeight = $(window).height();

    // animated
 //   $('.animated-0s,.animated-05s,.animated-1s,.animated-shark,.animated-fish').each(function(){
 //       var thisPos = $(this).offset().top;
//        if((windowHeight + scrollPos) >= thisPos ){
  //          $(this).addClass('fadeIn');
  //      }
  //  });
    
//  });
  
  

}(jQuery));







