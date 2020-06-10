function match_width(class_name) {
  var cw = $(class_name).width();
  $(class_name).css({'height':cw+'px'});
};

$(document).ready(function(){
  match_width(".race_overview_div");
});

$(window).on('resize', function() {
  match_width(".race_overview_div");
});
