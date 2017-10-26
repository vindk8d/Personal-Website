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
      if ($(this).scrollTop()>$(window).height()*0.35) {
          $('.intro-text').addClass('animated fadeIn');
          $('#intro-text-box').addClass('animated fadeIn');
          $('#intro-pic').addClass('animated fadeIn');
          $('#know-me').addClass('animated fadeInUp');
      };
      
      if ($(this).scrollTop()>$('#intro-page').position().top+$(window).height()*0.35) {
          $('.principle').addClass('animated fadeIn');
      };
        
      if ($(this).scrollTop()+$(window).height()>$('#history-page').position().top+$(window).height()*0.25) {
          $('#education-items').addClass('animated fadeIn');
      };
        
      if ($(this).scrollTop()+$(window).height()>$('#history-page').position().top+$(window).height()*0.65) {
          $('#work-items').addClass('animated fadeIn');
      };
        
      if ($(this).scrollTop()+$(window).height()>$('#history-page').position().top+$(window).height()*0.85) {
          $('#skills-items').addClass('animated fadeIn');
      };
        
      if ($(this).scrollTop()>$(window).height()*0.95){
          $('.navigation').css('visibility','hidden');
      }
      else {
          $('.navigation').css('visibility','visible');
      }
        
    
        
    });
    
    $('.skills-logo').hover(
        function() {
            $(this).addClass('animated pulseBigger');
        },
        function() {
            $(this).removeClass('animated pulseBigger');
        }
    );
    
    $('.contact-logo').hover(
        function() {
            $(this).addClass('animated pulseBigger');
        },
        function() {
            $(this).removeClass('animated pulseBigger');
        }
    );
    
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