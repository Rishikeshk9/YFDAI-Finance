$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });

    $('.products').addClass('active');
   
    barba.init({
        transitions: [{
          name: 'opacity-transition',
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0
            });
          }
        }]
      });
});



var $navbar = $('.navbar'),
    fixmeTop = $navbar.offset().top+50;
    var $navbarcont = $('.blob-container');

$(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    $navbar.toggleClass('fixeds', currentScroll >= fixmeTop);
    $navbarcont.toggleClass('pad', currentScroll >= fixmeTop);

    console.log("DEMO");
});

function myfunction() 
 {
     var header = document.querySelector('.header');

    header.classList.toggle('menu-opened');
 }
   