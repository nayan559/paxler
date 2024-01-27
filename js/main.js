
$(document).ready(function() {

    $('.counter').counterUp({
        delay: 1000,
        time: 3000
    });

     $("body").niceScroll({
      cursorcolor: "#ff9b1a",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff0",
      scrollspeed: 160,
      mousescrollstep: 20,
      zindex: "auto"| [2000],
    });

     $(function(){
        $(window).on("scroll", function(){
          if($(window).scrollTop() > 200){
            $(".navbar").addClass("scroll-nav");
          } else {
            $(".navbar").removeClass("scroll-nav");
          }
      });
    });

     var btn = $('#button');
      $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });
      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '3000');
      });

      $.fakeLoader({
        timeToHide:2000,
        bgColor:"#fff",
        spinner:"spinner1"
    });

      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        smartSpeed:750,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    new WOW().init();


});
 


 





      