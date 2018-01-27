
/*global $, alert, console*/
$(function() {
    'use strict';
    // trigger nice scroll plugin
    $('html').niceScroll();
    // chang header height
    $('.header').height($(window).height());

    $('.header .arrow i').click(function(){
        $('html ,body').animate({
            scrollTop: $('.Features').offset().top
        },500);
    });

    $('.links').click(function(){
        $('.menu-box').fadeIn(1000);
    });

    $('.fa-times').click(function(){
        $('.menu-box').fadeOut(500);
    });

    $('.hire').click(function(){
        $('html ,body').animate({
            scrollTop: $('.our-team').offset().top
        },1000);
    });

    $('.work').click(function(){
        $('html ,body').animate({
            scrollTop: $('.our-work').offset().top
        },1000);
    });
    // show all our work and hide a button 
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(1000, function(){
            $('.show-more').hide();
        });
    });
    
       

    var leftArrow = $('.test .fa-chevron-left'),
        rightArrow = $('.test .fa-chevron-right');
    function checkClients() {
        if($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();         
        }
        if($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();         
        }
    }
         checkClients();

    $('.test i').click(function(){
        if($(this).hasClass('.fa-chevron-right')) {
            $('.test .active').fadeOut(100, function(){
                $(this).removeClass('.active').next('.client').addClass('active').fadeIn();
                checkclients();
                
            });
        } else {
            $('.test .active').fadeOut(100, function(){
                $(this).removeClass('.active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
    
});
