// CONSIDER REFACTORING THIS OBJECT
var Game = {
  WordArray: [],
  WordUArray: [],
  Lives: 8,
  NumInWordBank: Words.list.length,
  Word: "test",
  WordU: " ",
  PullWord: function () {
  	Game.Word = Words.list[(Math.floor(Math.random()*Game.NumInWordBank))];
  },
  SetUnderline: function () {
  	Game.PullWord();
  	for (i=0; i < Game.Word.length; i++){
  		Game.WordArray[i] = Game.Word.charAt(i);
  		Game.WordUArray[i] = "_";
  	}
  	Game.WordU = Game.WordUArray.join("");
  	document.getElementById("word").innerHTML = Game.WordU;
  	document.getElementById("numLetters").innerHTML = Game.Word.length;
  },
  UpdateLetter: function(letter) {
  	Game.Changes = 0;
  	for(i=0; i < Game.Word.length; i++){
      Game.WordArray[i] = Game.Word.charAt(i);
    	if(Game.Word.charAt(i) == letter) {
      	Game.WordUArray[i] = letter;
      	Game.Changes += 1;
    	}
  	}
    if(Game.Changes < 1) {
    	Game.Lives -= 1;
    	document.getElementById("lives").innerHTML = Game.Lives;
    }
    Game.WordU = Game.WordUArray.join("");
    document.getElementById("word").innerHTML = Game.WordU;
    Game.Word1 = Game.WordArray.join("");
    Game.Word2 = Game.WordUArray.join("");
    if (Game.Word1 == Game.Word2) {
    	alert("Victory!");
    	window.location.reload();
    }
    if(Game.Lives < 1) {
    	document.getElementById("word").innerHTML == Game.Word1;
    	alert("No more turns! Please try again!");
    	window.location.reload();
    }
  },
};


Game.PullWord();
Game.SetUnderline();
