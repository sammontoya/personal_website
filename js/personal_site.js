$(document).ready(function() {
  $('html, body').animate({
    scrollTop: $('#profile_pic').offset().top
  },'slow');
    
  $('#scroll').click(function() {
	    $('html, body').animate({
        scrollTop: $('#about').offset().top-42
      }, 1000);
      return false;
  });
  $('#about_scroll_button').click(function() {
      $('html, body').animate({
        scrollTop: $('#about').offset().top-42
      }, 1000);
      return false;
  }); 
  $('#skills_scroll_button').click(function() {
		    $('html, body').animate({
          scrollTop: $('#skillsimage').offset().top
        }, 1000);
        return false;
  });
  $('#work_scroll_button').click(function() {
		    $('html, body').animate({
          scrollTop: $('#workimage').offset().top
        }, 1000);
        return false;
  });
  $('#contact_me_scroll').click(function() {
        $('html, body').animate({
          scrollTop: $('#contact_me').offset().top
        }, 1000);
        return false;
  });
  $('#scroll_top').click(function() {
        $('html, body').animate({
          scrollTop: $('#profile_pic').offset().top
        }, 1000);
        return false;
  });

  var distance_from_top = $(".nav").offset().top-42;

  $(document).scroll(function(){
      if($(this).scrollTop() > distance_from_top)
      {   
         $('.navbar-custom').css({"background":"#696969","height":"45px"});
      } else {
         $('.navbar-custom').css({"background":"transparent"});
      }
  });

});
