var main = function () {

    function loop() {
        $('.db').animate({top:'-=6px'});
        $('.db').animate({top:'+=6px'},300, 'linear',
                         function() {loop()});
    }
    loop();
    
    $('.db').click(function() {
        $('html, body').animate({
        scrollTop: $("#intro-page").offset().top
        }, 400);
    });
    
    $(window).scroll(function(){
      if ($(this).scrollTop()>$(window).height()*0.65 && $('.intro-text').css('visibility')==='hidden') {
          $('.intro-text').css('visibility','visible').hide().fadeIn({queue:false},800).animate({top:"+=10px"}, 800);
      }
      if ($(this).scrollTop()>$(window).height()*0.75 && $('#intro-text-box').css('visibility')==='hidden') {
          $('#intro-text-box').css('visibility','visible').hide().fadeIn({queue:false},800).animate({top:"+=10px"}, 800);
      }
        
      if ($(this).scrollTop()>$(window).height()*0.95){
          $('.navigation').fadeOut(200);
      }
      else {
          $('.navigation').fadeIn(200);
      }
        
    });
    
    
    $('#know-me').click(function() {
        $('html, body').animate({
        scrollTop: $("#history-page").offset().top
        }, 400);
    });
    
    $('#profile-btn').click(function() {
        $('html, body').animate({
        scrollTop: $("#history-page").offset().top
        }, 400);
    });
    
    $('#contact-btn').click(function() {
        $('html, body').animate({
        scrollTop: $("#contact-page").offset().top
        }, 600);
    });
};

//$('.banner').parallax({imageSrc:'DSC_1119-GreenB.png'});
//$('.banner2').parallax({imageSrc:'DSC_1055-2.jpg'});
$(document).ready(main)