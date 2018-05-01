$(document).ready(function(){

//function moveShadow(e){
$(document).mousemove(function(event){
let mouse_x = event.pageX;
let mouse_y = event.pageY;
let window_w = $("body").width();
let window_h = $("body").height();
$('.food').each(function(){
  let this_x = parseInt($(this).css("left"));
  let this_y = parseInt($(this).css("top"));
  let dx = mouse_x - this_x;
  let dy = mouse_y - this_y;
  
  $(this).css({
      "-webkit-filter" : "drop-shadow(" + dx/window_w*(-3) + "vh " + dy/window_h*(-3) + "vh 2vh rgba(0,0,0,0.7)"
      ,"filter" : "drop-shadow(" + dx/window_w*(-3) + "vh " + dy/window_h*(-3) + "vh 2vh rgba(0,0,0,0.7)"
  });
})
});
//}

});
