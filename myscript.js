$(document).ready(function() {
  $(".card").on({
    mouseenter: function() {
      $(this).css("box-shadow", "0 16px 16px 0 rgba(0,0,0,0.5)");
    },
    mouseleave: function(){
      $(this).css("box-shadow", "0 8px 8px 0 rgba(0,0,0,0.3)");
    },
    click: function(){
      $(this).css("");
    }
  });
});
