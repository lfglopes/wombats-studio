$(document).ready(function(){

  var $menu = $('#navbar-collapse-1');

  // Big pictures
  $('.picture-modal').click(function($event){
    $event.preventDefault();

    var imgUrl = $(this).attr('href');
    var $modal = $('#pictureModal');

    $modal.find('img').attr('src', imgUrl);
    $modal.modal('show');
  });

  // Scroll click animation
  var clickableScroll = function($event) {
    if ($(this).attr('href')[0] !== '#') {
        return true;
    }
    
    $event.preventDefault();
    
    if (window.innerWidth <= 768) {
      $menu.collapse('toggle');  
    }
    
    var destination = $($(this).attr('href')).offset().top;
    $('html, body').animate({
        scrollTop: destination-170
    }, 2000);
  };

  $('.scroll').click(clickableScroll);
  $('.navbar-collapse .navbar-nav a').click(clickableScroll);

  var scrollCheck = function(){
      if ($(window).scrollTop() >= 350 && window.innerWidth > 768) {
          $menu.addClass('navbar-fixed-top').removeClass('navbar-static');
      } else {
          $menu.removeClass('navbar-fixed-top').addClass('navbar-static');
      }
  };

  $(document).scroll(scrollCheck);
  scrollCheck();
      
});