$(document).ready(function(){
    $("#man").mouseenter(function(){
        $("#men").slideDown(1000);
    });
    
    $("#men").mouseleave(function(){
        $("#men").hide(1000);
    });

     $("#woman").mouseenter(function(){
        $("#women").slideDown(1000);
    });
    
    $("#women").mouseleave(function(){
       $("#women").hide(1000); 
    });
    
    
    $("#kid").mouseenter(function(){
        $("#kids").slideDown(1000);
    });
    
    $("#kids").mouseleave(function(){
       $("#kids").hide(1000); 
    });
     $("#cloth").mouseenter(function(){
        $("#clothes").slideDown(1000);
    });
    
    $("#clothes").mouseleave(function(){
       $("#clothes").hide(1000); 
    });
    
  $(".autoplay").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
      dots:true,
      prevArrow:".slider-img .slider-btn .prev",
      nextArrow:".slider-img .slider-btn .next"
});
    $(".products").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
      dots:true,
      prevArrow:".slider-img .slider-btn .prev",
      nextArrow:".slider-img .slider-btn .next"
});
    
    
});