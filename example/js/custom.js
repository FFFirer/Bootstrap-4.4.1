$(document).ready(function(){
  changeSidebarPosition();
  $(window).scroll(function(event){
    this.changeSidebarPosition();
  })
})

// 改变侧边栏的位置和高度
function changeSidebarPosition(){
  var mainOffsetTop = $("#content").offset().top;
  var docScrollTop = $(document).scrollTop();
  if(mainOffsetTop-docScrollTop>=0){
    $('#sidebar').css("top", (mainOffsetTop-docScrollTop).toString()+"px");
  }
  else{
    $('#sidebar').css("top", "0px");
  }

  var clientHeight = $(window).height()
  var elScrollHeight = $("#main-content").offset().top;
  var scrollHeight = $(document.documentElement).scrollTop();
  var elHeight = $("#main-content").height();
  var scrollBottom = clientHeight-elHeight-elScrollHeight+scrollHeight;
  // console.log(scrollBottom);
  if(scrollBottom > 0){
    $('#sidebar').css("height", (clientHeight-scrollBottom).toString()+"px");
  }
  else{
    $('#sidebar').css("height", "100%");
  }
}
