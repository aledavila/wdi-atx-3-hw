$(function(){

  $('#search').on('submit', function(e){

    var input = $('#search-name').val();

    $.ajax({
        url: 'http://www.strudel.org.uk/lookUP/json/',
        method: 'GET',
        dataType: "jsonp",
        data: {
          name: input
        },

    })
    .done(function(data){
      if (TypeError) {
        $('#preview').html("<p>Could not find " + input + "</p>");
      }
      if (data["image"]["src"].includes('upload')) {
        $('#preview').html("<a class='result' target='_blank' href='" + data["image"]["href"] + "'>No picture available</a>");
      } else {
        $('#preview').html("<img class='result' src='" + data["image"]["src"] + "'/>");
      }
    })
    e.preventDefault();
  });
});
