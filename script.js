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
      if ($(this).scrollTop()>$(window).height()*0.45) {
          $('.intro-text').css('visibility','visible').addClass('animated fadeInUp');
          $('#intro-text-box').css('visibility','visible').addClass('animated fadeInUp');
      }
        
      if ($(this).scrollTop()>$(window).height()*0.95){
          $('.navigation').css('visibility','hidden');
      }
      else {
          $('.navigation').css('visibility','visible');
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