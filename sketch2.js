var champ = window.opener.game.agent.champ;
var row = window.opener.row;
var col = window.opener.col;
var res = window.opener.res;

function setup() {
  createCanvas(windowWidth-10,windowHeight-50);
  background(0);
}


function draw(){
  printGrid();
}

function printGrid(){
  for (var i = 0 ; i<row ; i++){
    for (var j = 0 ; j<col ; j++){
      paint(champ.grid[i][j]);
    }
  }
}

function paint(cube){
  fill(cube.color[0],cube.color[1],cube.color[2])
  square(cube.x,cube.y,cube.len);
  if (cube.reward != -2){
    fill(0);
    textSize(15);
    textAlign(CENTER);
    text(cube.reward + "" , cube.x+cube.len/2 , cube.y+cube.len*3/4.5)
  }
}
