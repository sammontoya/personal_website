$(document).ready(function() {
  // $('html, body').animate({
  //   scrollTop: $('#profile_pic').offset().top
  // },'slow');
  $('#fullpage').fullpage({
    anchors: ['mainSection', 'aboutSection', 'skillsSection', 'workSection', 'contactSection'],
    menu: '#myMenu',
    css3: true,
    scrollingSpeed: 1000
  });

  // jQuery to collapse the navbar on scroll
  function collapseNavbar() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  }

  $(window).scroll(collapseNavbar);
  $(document).ready(collapseNavbar);

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
      $('.navbar-toggle:visible').click();
    }
  });
// old jquery for scroll
  // $('#scroll').click(function() {
	//     $('html, body').animate({
  //       scrollTop: $('#about').offset().top-42
  //     }, 1000);
  //     return false;
  // });
  // $('#about_scroll_button').click(function() {
  //     $('html, body').animate({
  //       scrollTop: $('#about').offset().top-42
  //     }, 1000);
  //     return false;
  // }); 
  // $('#skills_scroll_button').click(function() {
	// 	    $('html, body').animate({
  //         scrollTop: $('#skillsimage').offset().top
  //       }, 1000);
  //       return false;
  // });
  // $('#work_scroll_button').click(function() {
	// 	    $('html, body').animate({
  //         scrollTop: $('#workimage').offset().top
  //       }, 1000);
  //       return false;
  // });
  // $('#contact_me_scroll').click(function() {
  //       $('html, body').animate({
  //         scrollTop: $('#contact_me').offset().top
  //       }, 1000);
  //       return false;
  // });
  // $('#scroll_top').click(function() {
  //       $('html, body').animate({
  //         scrollTop: $('#profile_pic').offset().top
  //       }, 1000);
  //       return false;
  // });  
  // var distance_from_top = $(".nav").offset().top-5;
  // 
  // $(document).scroll(function(){
  //     if($(this).scrollTop() > distance_from_top)
  //     {   
  //        $('.navbar-custom').css({"background":"#696969","height":"45px"});
  //     } else {
  //        $('.navbar-custom').css({"background":"transparent"});
  //     }
  // });

});
