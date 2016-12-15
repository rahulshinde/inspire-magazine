Site = {}

$(document).ready( function(){
  // root size
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
  $(window).resize(changeRootFontSize);

  // open mag
  $('#enter').on('click', Site.openMag);

  //toc and navigation open and close animations
$('.toc_toggle').on('click', Site.toggleToc);
  $('.nav_button').on('click', Site.toggleNav);  
  $(document).on('scroll', Site.percentage);


  // page toggling
  $('#arrow_next').on('click', Site.next);
  $('#arrow_prev').on('click', Site.prev);

  $('.page_title').on('click', Site.tocNav);


  Site.pageArray = [
    'page3',
    'page4',
    'page5',
    'page6',
    'page7',
    'page8',
    'page9',
    'page10',
    'page11',
    'page12',
    'page13',
    'page14',
    'page15',
    'page16',
    'page17',
    'page18',
    'page19',
    'page20',
    'page21',
    'page22',
    'page23',
    'page24',
    'page25'
  ]

  Site.arrayCount = 0;

  Site.pageCurrent = Site.pageArray[Site.arrayCount];

  $('#content_container').load(Site.pageCurrent + '.html');

})

Site.tocNav = function() {

  $('#loading').fadeToggle();
  $('.page_title').removeClass('selected');
  $(this).addClass('selected');
  $('#content_container').empty();
  var page = $(this).data('page');
  Site.arrayCount = Site.pageArray.indexOf(page);

  $('#current_info1').empty();
  $('#current_info1').append($(this).data('name'));
  $('#current_info2').empty();
  $('#current_info2').append($(this).data('issue'));
  $('#current_info3').empty();
  $('#current_info3').append($(this).data('link'));

  $('#content_container').load(page + '.html', function(){
    $('#toc').fadeToggle(500);
    $('#loading').fadeToggle();
  });

}

//Navigation arrow controls

Site.next = function() {
  $('#loading').fadeToggle();

  Site.arrayCount ++;

  if(Site.arrayCount >= Site.pageArray.length){
    Site.arrayCount = 0;
  }

  Site.pageCurrent = Site.pageArray[Site.arrayCount];

  $('.page_title').removeClass('selected');
  $('#toc_' + Site.pageCurrent).addClass('selected');
  $('#current_info1').empty();
  $('#current_info1').append($('#toc_' + Site.pageCurrent).data('name'));
  $('#current_info2').empty();
  $('#current_info2').append($('#toc_' + Site.pageCurrent).data('issue'));
  $('#current_info3').empty();
  $('#current_info3').append($('#toc_' + Site.pageCurrent).data('link'));

  $('#content_container').empty();
  $('#content_container').load(Site.pageCurrent + '.html', function(){
    $('#loading').fadeToggle();
  });
}

Site.prev = function() {
  Site.arrayCount --;

  if(Site.arrayCount <= 0){
    Site.arrayCount = Site.pageArray.length - 1;
  }

  Site.pageCurrent = Site.pageArray[Site.arrayCount];

  $('#loading').fadeToggle();

  $('.page_title').removeClass('selected');
  $('#toc_' + Site.pageCurrent).addClass('selected');

  $('#current_info1').empty();
  $('#current_info1').append($('#toc_' + Site.pageCurrent).data('name'));
  $('#current_info2').empty();
  $('#current_info2').append($('#toc_' + Site.pageCurrent).data('issue'));
  $('#current_info3').empty();
  $('#current_info3').append($('#toc_' + Site.pageCurrent).data('link'));
  
  $('#content_container').empty();
  $('#content_container').load(Site.pageCurrent + '.html', function(){
    $('#loading').fadeToggle();
  });
}


Site.toggleNav = function(){
  if($(this).hasClass('underline')){
    return;
  }
  $('.nav_button').toggleClass('underline');
  $('.nav_element').toggleClass('off');
}

Site.toggleToc = function(){
  $('#toc').fadeToggle(500);
}

Site.percentage = function(){
  Site.percentage_complete = Math.floor(100 * $(window).scrollTop() / ($(document).height() - $(window).height()));
  console.log(isNaN(Site.percentage_complete));

  if(isNaN(Site.percentage_complete)){
    $('#percentage_insert').empty();
    $('#percentage_insert').append('0%');
  }else{
    $('#percentage_insert').empty();
    $('#percentage_insert').append(Site.percentage_complete + '%');
  }
}

Site.openMag = function(){
  $('#cover').remove();
  $('#toc').fadeToggle(500);
  setTimeout(function(){ 
    $('#content_container').toggle();
    $('#nav').toggle();
  }, 600);
  
}

changeRootFontSize = function() {
  root_size = $(window).width() / 76.8;
  $('html').css({ 'font-size': root_size });
}