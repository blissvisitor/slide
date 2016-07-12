$(document).ready(function(){
  if($(".b").height()>$(".a").height()){
    $(".c").css({"display":"none"});
    $(".d").css({"display":"block"});
  }else{
    $(".c").css({"display":"none"});
    $(".d").css({"display":"none"});
  }
  $(".c").on("click",function(){
      move(20);
  });
  $(".d").on("click",function(){
      move(-20);
  });
});
function move(num){
  var height=parseFloat($(".b").css("marginTop"))+num;
    $(".b").animate({marginTop:height},function(){
      var diff=$(".a").height()-$(".b").height();
      if(height>=0){
        $(".c").css({"display":"none"});
        $(".d").css({"display":"block"});
        $(".b").css({"marginTop":0});
      }else if(height<0&&Math.abs(height)>=Math.abs(diff)){
        $(".c").css({"display":"block"});
        $(".d").css({"display":"none"});
        $(".b").css({"marginTop":diff});
      }else if(height<0&&Math.abs(height)<Math.abs(diff)){
        $(".c").css({"display":"block"});
        $(".d").css({"display":"block"});
      }
    });
}
$(window).resize(function() {
  var ht=$(window).height();
  ht=0.8*ht+"px";
    $(".a").css({"height":ht});
    $(".b").css({"marginTop":0});
  if($(".b").height()>$(".a").height()){
    $(".c").css({"display":"none"});
    $(".d").css({"display":"block"});
  }else{
    $(".c").css({"display":"none"});
    $(".d").css({"display":"none"});
  }
});
