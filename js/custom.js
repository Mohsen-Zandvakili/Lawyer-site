/*global $*/
$(function() {
    "use strict";
    $('#main-menu').smartmenus({subMenusSubOffsetX: 1,subMenusSubOffsetY: -8});
});


$(window).load(function() {
    "use strict";
    $(".loader").fadeOut("normal.");
});

$(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop()>0){
            $("#scroller").fadeIn();
        }
        else {
            $("#scroller").fadeOut();
        }
        });
        $("#scroller").click(function () {
            $("body,html").animate({scrollTop:0}, 400);
            return false;
        });
    })


new WOW().init();