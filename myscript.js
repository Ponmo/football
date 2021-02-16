$(document).ready(function() {
  $(".card").on({
    mouseenter: function() {
      $(this).css("box-shadow", "0 16px 32px 0 rgba(0,0,0,0.4)");
    },
    mouseleave: function(){
      $(this).css("box-shadow", "0 8px 16px 0 rgba(0,0,0,0.2)");
    },
    click: function(){
      $(this).css("");
    }
  });
});
