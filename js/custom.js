$(document).ready(function(){
  
    
$(".zeeTv").click(function() { 
   $(".modal-body").find("iframe").remove();
   $(".modal-title").text("Zee News");    
   $(".modal-body").append("<iframe id='frmYT' width='100%' height='500' src='http://zeenews.dittotv.com/?header=no' frameborder='0' allowfullscreen='' scrolling='no'></iframe>")
   
 }); 
    
    
$(".aajTak").click(function() { 
   $(".modal-body").find("iframe").remove();
    $(".modal-title").text("Aaj Tak");
   $(".modal-body").append("<iframe name='test' src='http://feeds.intoday.in/video_stream/ltv/view_stream.php?siteId=2&amp;rand=0.7448911818496815' width='100%' height='500' id='PreviewVideo' scrolling='no' allowfullscreen=''></iframe>")
   
 });  
    

$(".abp").click(function() { 
   $(".modal-body").find("iframe").remove();
    $(".modal-title").text("ABP NEWS");
   $(".modal-body").append("<iframe width=' 100%'  height=' 250'  src=' http://cdn.abplive.in/homepage_playlist.html'  frameborder=' 0'  allowfullscreen=' '></iframe>")
   
 });        
    
    
  $(".demo").click(function() { 
   $(".modal-body").find("iframe").remove();
    $(".modal-title").text("Demo");
   $(".modal-body").append("<iframe title='demo'></iframe>")
   
 });      
    
    
    
    $(".close").click(function() { 
      $(this).parent(".modal-header").next("div").find("iframe").remove();
    });
    
});