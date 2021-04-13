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
    
    $('.home').addClass('active');
   
    var videos = document.getElementsByTagName("video"), fraction = 0.8;

   
    for(var i = 0; i < videos.length; i++) {
  
        var video = videos[i];

        video.volume = 0.25;
       if (video.canplay)
        {
          video.play();
           
        }
    }

     
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
document.addEventListener( 'DOMContentLoaded', function () {
   new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    width: '100%',
    autoplay: true,
    pauseOnHover:true,
    drag:true,
    options : options,
  } ).mount();

  var options = {
    perPage: 3,
    breakpoints: {
      640: {
        perPage: 2,
      },
    }
  };
} );

function myfunction() 
 {
     var header = document.querySelector('.header');

    header.classList.toggle('menu-opened');
 }
  
new kursor({
    type: 2,
    removeDefaultCursor: true,
    color: '#0399e0'


})
 
  var videos = document.getElementsByTagName("video"), fraction = 0.8;

  function checkScroll() {

  for(var i = 0; i < videos.length; i++) {

      var video = videos[i];

      var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
          b = y + h, //bottom
          visibleX, visibleY, visible;

          visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
          visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

          visible = visibleX * visibleY / (w * h);

          if (visible > fraction) {
              video.play(); 
              video.controls = true; 

          } else { 
            video.pause(); 
          }

  }

  }

  window.addEventListener('scroll', checkScroll, false);
  window.addEventListener('resize', checkScroll, false);
  
    