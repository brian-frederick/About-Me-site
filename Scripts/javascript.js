$(document).ready(function () {
    //pics
    var defaultPic = $(".pics > img").eq(0);
    defaultPic.css({ "display": "block" });

    //content
    $(".brianContent").eq(0).css({ "display": "block" });
    
    
    $(".level1").hover(
        function () {

            //menu text
            $(this).css({ "color": "#ff8c00" });
            $(this).next().css({ "display": "block" });

            //pics
            var i = $(this).attr("menu");
            defaultPic.css({ "display": "none" });
            $(".pics > img").eq(i).css({ "display": "block" });
        },

        function () {

            //menu text
            $(this).css({ "color": "black" });
            $(".level2").css({ "display": "none", "color": "#ff8c00" });

            //pics
            var i = $(this).attr("menu");
            $(".pics > img").eq(i).css({ "display": "none" });
            defaultPic.css({ "display": "block" }); 
        }
    );

    $(".level1").click(
        function () {
            var i = $(this).attr("menu");

            //pics
            defaultPic.css({ "display": "none" });
            defaultPic = $(".pics > img").eq(i); 
            defaultPic.css({ "display": "block" });

            //content
            $(".brianContent").css({ "display": "none" });
            $(".brianContent").eq(i).css({ "display": "block" });

        }
    );
});
