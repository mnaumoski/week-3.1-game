// CONSIDER MORE DRY SOLUTION
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// CLICK EVENT
function clickALetter(letter){
  $("#"+letter).click(function(event) {
    event.preventDefault();
    Game.UpdateLetter(letter);
  });
}

// ITERATE THROUGH ALPHABET
function iterateThroughAlphabet(){
  $.each(alphabet, function(index, value){
    // FIRE CLICK EVENT ON EACH LETTER
    createLetterLinks(value);
    clickALetter(value);
  });
}

function createLetterLinks(value){
  var newLink = $('<a>');
  newLink.attr('id', value);
  newLink.addClass('col-xs-1');
  newLink.text(value);
  $('#letters').append(newLink);
}

$(function(){
  iterateThroughAlphabet();
});
