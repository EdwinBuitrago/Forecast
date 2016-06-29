var main = function() {
  $('.day').click(function(){
    $('.day').next().toggle();
    $('.day').find('.weekday span').toggleClass('glyphicon-minus');
  });
  
};

$(document).ready(main);
