$(window).scroll(function() {
    $('video').each(function() {
        if ($(this).visible()) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    })
    $('#sysvid').visible()


    if (document.getElementById('progressbar')){
      var wintop = $(window).scrollTop(), docheight = $('body').height(), winheight = $(window).height();
      var totalScroll = (wintop/(docheight-winheight))*100;
      $(".KW_progressBar").css("width",totalScroll+"%");
    }
});

var id = setInterval(function(){
  var elementExists = document.getElementById("slideshow");
  console.log(elementExists);
  if (elementExists !== null){
    $("#slideshow > div:gt(0)").hide();
    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  3000);
  }
  clearInterval(id);
},1000)
document.addEventListener('mousemove', function(event){
  let card_x = getTransformValue(event.clientX,window.innerWidth,56);
  let card_y = getTransformValue(event.clientY,window.innerHeight,56);
  let shadow_x = getTransformValue(event.clientX,window.innerWidth,20);
  let shadow_y = getTransformValue(event.clientY,window.innerHeight,20);
  let text_shadow_x = getTransformValue(event.clientX,window.innerWidth,28);
  let text_shadow_y = getTransformValue(event.clientY,window.innerHeight,28);
  $(".floating").css("transform","rotateX("+card_y/1+"deg) rotateY("+card_x+"deg)");
  $(".floating").css("box-shadow",-card_x+"px "+card_y/1+"px 55px rgba(0, 0, 0, .55)");
  $(".svg").css("filter","drop-shadow("+-shadow_x+"px "+shadow_y/1+"px 4px rgba(0, 0, 0, .6))");
  $(".text").css("text-shadow",-text_shadow_x+"px "+text_shadow_y/1+"px 6px rgba(0, 0, 0, .8)");
});
function getTransformValue(v1,v2,value){
  return ((v1/v2*value-value/2)*1).toFixed(1);
}
