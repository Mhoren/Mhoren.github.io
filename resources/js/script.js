$(document).ready(function(){

    /*Animation on scrolls*/

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

});