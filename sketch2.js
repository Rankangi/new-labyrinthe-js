var champ = window.opener.game.agent.champ;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}


function draw(){
  printGrid();
}

function printGrid(){
  for (var i = 0 ; i<10 ; i++){
    for (var j = 0 ; j<10 ; j++){
      paint(champ.grid[i][j]);
    }
  }
}

function paint(cube){
  fill(cube.color[0],cube.color[1],cube.color[2])
  square(cube.x,cube.y,cube.len);
  if (cube.reward != 0){
    fill(0);
    textSize(40);
    textAlign(CENTER);
    text(cube.reward + "" , cube.x+cube.len/2 , cube.y+cube.len*3/4.5)
  }
}
