var scroll_counter = 0;
  $(window).on('scroll', function(){
    scroll_counter = scroll_counter + 1;
    if ( scroll_counter > 20){
      $('.obama_left').toggleClass('show');
      $('.obama_right').toggleClass('show');
      scroll_counter = 0;
    }
  });