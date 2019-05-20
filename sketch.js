var game;
var champ;
var qfunct;
var row;
var col;
var res;

function setup(){
  createCanvas(windowWidth-10,windowHeight-20);
  res = 15
  row = floor(height / res)-5;
  col = floor(width / res)-2;
  champ = window.open('champ.html','pop1','menubar=yes, scrollbars=yes, top=100, left=100, width=300, height=200');
  // qfunct = window.open('qfunct.html','pop2','menubar=yes, scrollbars=yes, top=100, left=100, width=300, height=200');
  background(0);
  game = new Game();
}


function draw() {
  // for (var i = 0 ; i<100 ; i++){
  //   game.update();
  // }
  game.update();
  game.agent.env.printGrid();
}
