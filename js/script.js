jQuery(document).ready(function() {

 $('.about').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
  e.preventDefault();
});
  $('.galleryy').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#galleryy').offset().top }, 1000);
  e.preventDefault();
});
   $('.reply').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#reply').offset().top }, 1000);
  e.preventDefault();
});
    $('.contact').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1000);
  e.preventDefault();
});

  $('.multiple-items').slick({
        dots: true,
  
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
      autoplaySpeed: 8000,
    adaptiveHeight: true,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1
                
              }
            }
          ]
      });
});