


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



// $(document).ready(function(){
//     $(".list-group li").click(function(){

//         // $(this).addClass("active");
//         // $(this).siblings(".list-group li").removeClass("active");

//         $(this).siblings("ul").addClass("hide-nva");
//         $(this).next("ul").removeClass("hide-nva");


//     })
// });
// 
// 
// 
// 
// 
// 
// 
    // alert($(this).index());
    //alert($(this).html());
    // $("div.panels").addClass('panel-primary');
     //alert($(this).attr('id'));
     //
     //
     //   // if(ids == "panel1"){

     //   //alert("123");
     //    $("div.panel1").addClass('panel-primary');
     // }else{

     //    $("div.panel1").removeClass('panel-primary'');
     // }
$(document).ready(function(){


$(".panel-nav1").addClass('panel-primary');

 var idsList = ["panel1", "panel2", "panel3", "panel4","panel5", "panel6"];
 var idsNav = ["panel-nav1", "panel-nav2", "panel-nav3", "panel-nav4","panel-nav5", "panel-nav6"];


  $("h4.panel-title").click(function(){

     var ids = $(this).attr('id');
    
       for( var i = 0; i < idsList.length+1;  i++ ){
          if(ids == idsList[i] ){
              var idsNavNum= "div."+idsNav[i];
             $(idsNavNum).addClass('panel-primary');
          }else{
            $(idsNavNum).siblings().removeClass('panel-primary');
            $(".panel-collapse").removeClass('in');
          }
      }


  });
});





// $('#myCollapsible').on('show.bs.collapse', function () {
//     $(this).addClass('panel-primary');
// })
// $('#myCollapsible').on('hidden.bs.collapse', function () {
//   $(this).removeClass('panel-primary');
// })