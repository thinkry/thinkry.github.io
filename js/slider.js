$(function(){
 $('#number li').mouseover(function(){
  $("#"+this.id).addClass("selected").siblings().removeClass("selected");
  $('.slider1 li img').fadeIn(4000).attr("src","images/"+(this.id)+".jpg");
  });
 });
/*��ҳ���Ч��*/
$(function(){
     var len  = $(".num > li").length;
  var index = 0;
  var adTimer;
  $(".num li").mouseover(function(){
  index  =   $(".num li").index(this);
  showImg(index);
  }).eq(0).mouseover(); 
  //���� ֹͣ������������ʼ����.
  $('.ad').hover(function(){
    clearInterval(adTimer);
   },function(){
    adTimer = setInterval(function(){
       showImg(index)
    index++;
    if(index==len){index=0;}
     } , 5000);
  }).trigger("mouseleave");
})
// ͨ������top ������ʾ��ͬ�Ļõ�Ƭ
function showImg(index){
        var adHeight = $(".content_right .ad").height();
  $(".slider").stop(true,false).animate({bottom : -adHeight*index},1000);
  
      $(".num li").removeClass("on")
   .eq(index).addClass("on");
}