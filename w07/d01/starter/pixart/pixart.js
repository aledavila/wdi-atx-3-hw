$(function(){
  var count = 0;
  
  $('#set-color').on('click', function(){
    count += 1;
    var value = $('#color-field').val();

    if (count === 1){
      $('#one').css('background-color', value);
    } else if (count === 2){
      $('#two').css('background-color', value);
    } else if (count === 3){
      $('#three').css('background-color', value);
    }

  })

  $('#color-field').on('keypress', function(e){
    if (e.keyCode === 13){
      var value = $('#color-field').val();
      $('.brush').css('background-color', value);
    }

  })

  var limit = 8000;

  for(var i = 1; i <= limit; i++) {
    $('.art').append("<div class='square'></div>")
  }

  $('.square').on('click', function(){
    $('.square').on('mouseover', function(){
      var value = $('#color-field').val();
      $(this).css('background-color', value);
    })
  })



})