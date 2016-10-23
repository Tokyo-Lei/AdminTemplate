


// $(document).ready(function(){
//     $("li:first-child").click(function(){
//         $(".list-group li").bind().slideToggle();
//     });
//
//
//             $(this).html("<span class='caret'></span>");
//
//
// });


// $(document).ready(function(){
//
//     var lifirst = $("li:first-child");
//
//     lifirst.click(function(){
//         $(this).addClass("active");
//         $(this).siblings(".list-group li").slideDown(300);
//
//
//
//     });
//     $("menu").click(function(){
//         $(this).removeClass("active");
//         $(this).siblings(".list-group li").slideUp(100);
//     })
//
//
//
// });



$(document).ready(function(){
    $(".list-group li").click(function(){

        $(this).addClass("active");
        $(this).siblings(".list-group li").removeClass("active");

        $(this).siblings("ul").addClass("hide-nva");
        $(this).next("ul").removeClass("hide-nva");


    })
});