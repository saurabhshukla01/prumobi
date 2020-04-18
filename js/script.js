/*$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.navbar').removeClass('navbar-fixed');
  }
}); */

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 90)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  //$('body').scrollspy({
   // target: '#mainNav',
   // offset: 90
  //});

})(jQuery); // End of use strict


      function initMap() { 
        var uluru = {lat: 28.623815, lng: 77.366113}; 
        var map = new google.maps.Map(document.getElementById('map'), { 
          zoom: 15, 
          center: uluru 
        }); 
        var marker = new google.maps.Marker({ 
          position: uluru, 
          map: map 
        }); 
      } 
                                                        



      $(document).ready(function(){
        $('.owl-one').owlCarousel({
            loop:true,
            autoplay:true,
            margin:10,
            nav:false,
            autoplayTimeout:5000,
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
    
        $('.owl-two').owlCarousel({
            loop:true,
            autoplay:true,
            margin:10,
            nav:true,
            autoplayTimeout:5000,
            dot:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        });
        
        $('.owl-three').owlCarousel({
          loop:true,
          autoplay:true,
          margin:10,
          nav:false,
          autoplayTimeout:5000,
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
    });


    /*
    $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top -50
      }, );
      return false;
  });

  */


  

function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}


/* $(".nav-li").click(function(){
  $(".nav-container").hide();
  $("#nav:checked + .nav-open").css("transform", "rotate(0deg)");
  $("#nav:checked + .nav-open i:nth-child(1)").css("transform", "translateY(0px) rotate(0deg)");
  $("#nav:checked + .nav-open i:nth-child(3)").css("transform", "translateY(0px) rotate(0deg)");
  $("#nav:checked + .nav-open i:nth-child(2)").css("opacity", "1");
});

$(".nav-open").click(function(){
  $(".nav-container").show();
});
*/