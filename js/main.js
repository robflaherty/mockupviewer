var index = 0;

$('.container img').attr('src', mockups[index]);

$(document).keydown(function(event) {

  var keycode = event.which;

  if (keycode > 48 && keycode < 58) {
    index = keycode - 49;
    $('.container img').attr('src', mockups[index]);
  }

  if (keycode == 32 | keycode == 39) {
    index = index + 1;
    $('.container img').attr('src', mockups[index]);
    event.preventDefault();
  }

  if (keycode == 37) {
    index = index - 1;
    $('.container img').attr('src', mockups[index]);
    event.preventDefault();
  }

});
