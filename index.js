$(document).ready(function() {
    $('.animated').each(function(i) {
      $(this).delay(500 * i).queue(function(){
        $(this).addClass('fadeIn').dequeue();
      });
    });
  });
  