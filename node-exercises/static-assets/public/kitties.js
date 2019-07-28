$('button').click(function() {
  var x = Math.round(Math.random() * 500);
  var y = Math.round(Math.random() * 500);
  $('button').text("Press Me Again!");
  $('div').append('<img src="http://placekitten.com/' + x + '/' + y + '">');
});