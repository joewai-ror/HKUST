$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });

    $("#loginButton").click(function (){
        $("#loginModal").modal('show');
    });
    $("#button-cancel-login").click(function (){
        $("#loginModal").modal('hide');
    });
    $(".close").click(function (){
        $("#loginModal").modal('hide');
    });
    $("#reserveButton").click(function (){
        $("#reserveModal").modal('show');
    });
    $("#btn-cancel-reserve").click(function (){
        $("#reserveModal").modal('hide');
    });
    $(".close").click(function (){
        $("#reserveModal").modal('hide');
    });
});
<!--    $(document).ready(function(){-->
<!--       $('[data-target="tooltip"]').tooltip();-->
<!--    });-->