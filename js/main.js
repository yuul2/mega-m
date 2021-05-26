$(function(){
    $('.gnb').mouseover(function(){
        $('.sub-menu,.gnb_bg').stop().slideDown();
    });
    $('.gnb').mouseleave(function(){
        $('.sub-menu,.gnb_bg').stop().slideUp();
    });
    
})