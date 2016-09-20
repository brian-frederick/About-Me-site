$(document).ready(function () {
    var defaultPic = $(".pics > img").eq(0);
    $(".brianContent").eq(0).css({ "display": "block" });
    defaultPic.css({ "display": "block" });
    
    $(".level1").hover(
        function () {
            var i = $(this).attr("menu");
            $(this).css({ "color": "#ff8c00" });
            $(this).next().css({ "display": "block", "color":"#ff8c00" });
            defaultPic.css({ "display": "none" });
            $(".pics > img").eq(i).css({ "display": "block" });
        },

        function () {
            var i = $(this).attr("menu");
            $(this).css({ "color": "black" });
            $(".level2").css({ "display": "none", "color": "#ff8c00" });
            $(".pics > img").eq(i).css({ "display": "none" });
            defaultPic.css({ "display": "block" }); 
        }
    );

    $(".level1").click(
        function () {
            defaultPic.css({ "display": "none" });
            var i = $(this).attr("menu");
            defaultPic = $(".pics > img").eq(i); 
            $(".brianContent").css({ "display": "none" });
            $(".brianContent").eq(i).css({ "display": "block" });
            defaultPic.css({ "display": "block" });
        }
    );
});
