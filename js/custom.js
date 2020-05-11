//slider of home
$(document).ready( function() {
     //animation wow liberary
     new WOW().init();
    
    //Dynamic links
     $('.navbar li a').click(function(){
         $('html, body').animate({
             scrollTop: $( '#' + $(this).data('value') ).offset().top
         },1000);
     });
    
    // nav
    $(window).scroll(function(){
        if( $(this).scrollTop() > 100 ){
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
});