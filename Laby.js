class Laby{
  constructor(){
    this.grid = this.createGrid();
    this.actions = [
      [0,-1], //Up alt 24
      [0,1],  //Down alt 25
      [-1,0], //Left alt 27
      [1,0]   //Right alt 26
    ];
    this.init();
  }

  createGrid(){
    var grid = [];
    var cube
    for (var i = 0 ; i<row ; i++){ //
      grid.push([]);
      for (var j = 0 ; j<col ; j++){ //
        cube = new Cube(j*res+20,i*res+10,[255,255,255],res);
        grid[i].push(cube);
      }
    }
    return grid;
  }

  printGrid(){
    for (var i = 0 ; i<row ; i++){ //
      for (var j = 0 ; j<col ; j++){ //
        this.grid[i][j].paint();
      }
    }
  }

  is_end(){
    return (this.grid[7][0].color == "0,0,0") || (this.grid[0][2].color == "0,0,0");
  }

  graphique(){
    //Création d'un graphique
  }

  init(){
    // this.grid[0][0].color = [150,150,150];
    // this.grid[0][1].color = [150,150,150];
    // this.grid[0][3].color = [150,150,150];
    // this.grid[0][4].color = [150,150,150];
    // this.grid[0][5].color = [150,150,150];
    // this.grid[0][6].color = [150,150,150];
    // this.grid[0][7].color = [150,150,150];
    // this.grid[0][8].color = [150,150,150];
    // this.grid[0][9].color = [150,150,150];
    // this.grid[1][9].color = [150,150,150];
    // this.grid[2][9].color = [150,150,150];
    // this.grid[3][9].color = [150,150,150];
    // this.grid[4][9].color = [150,150,150];
    // this.grid[5][9].color = [150,150,150];
    // this.grid[6][9].color = [150,150,150];
    // this.grid[7][9].color = [150,150,150];
    // this.grid[8][9].color = [150,150,150];
    // this.grid[9][9].color = [150,150,150];
    // this.grid[9][7].color = [150,150,150];
    // this.grid[9][6].color = [150,150,150];
    // this.grid[9][5].color = [150,150,150];
    // this.grid[9][4].color = [150,150,150];
    // this.grid[9][3].color = [150,150,150];
    // this.grid[9][2].color = [150,150,150];
    // this.grid[9][1].color = [150,150,150];
    // this.grid[9][0].color = [150,150,150];
    // this.grid[8][0].color = [150,150,150];
    // this.grid[6][0].color = [150,150,150];
    // this.grid[5][0].color = [150,150,150];
    // this.grid[4][0].color = [150,150,150];
    // this.grid[3][0].color = [150,150,150];
    // this.grid[2][0].color = [150,150,150];
    // this.grid[1][0].color = [150,150,150];
    // this.grid[1][1].color = [150,150,150];
    // this.grid[1][4].color = [150,150,150];
    // this.grid[2][3].color = [150,150,150];
    // this.grid[2][6].color = [150,150,150];
    // this.grid[2][7].color = [150,150,150];
    // this.grid[3][2].color = [150,150,150];
    // this.grid[3][3].color = [150,150,150];
    // this.grid[3][4].color = [150,150,150];
    // this.grid[3][6].color = [150,150,150];
    // this.grid[4][4].color = [150,150,150];
    // this.grid[4][6].color = [150,150,150];
    // this.grid[4][8].color = [150,150,150];
    // this.grid[5][2].color = [150,150,150];
    // this.grid[5][6].color = [150,150,150];
    // this.grid[6][1].color = [150,150,150];
    // this.grid[6][4].color = [150,150,150];
    // this.grid[6][5].color = [150,150,150];
    // this.grid[6][6].color = [150,150,150];
    // this.grid[7][2].color = [150,150,150];
    // this.grid[7][3].color = [150,150,150];
    // this.grid[7][6].color = [150,150,150];
    // this.grid[7][8].color = [150,150,150];
    // this.grid[7][0].reward = 1;
    // this.grid[0][2].reward = 100;
    for (let k = 0 ; k<row ; k++){
      this.grid[k][0].color = [150,150,150];
      this.grid[k][col-1].color = [150,150,150];
    }
    for (let k = 0 ; k<col ; k++){
      this.grid[0][k].color = [150,150,150];
      this.grid[row-1][k].color = [150,150,150];
    }
    var i;
    var j;
    for (let k = 0 ; k<floor(row*col/3) ; k++){
      i = randint(row);
      j = randint(col);
      this.grid[i][j].color = [150,150,150];
    }
    this.grid[1][1].color = [255,0,0];
    this.grid[1][1].reward = 10000;
    this.grid[row-2][col-2].color = [255,255,255];
  }
}
