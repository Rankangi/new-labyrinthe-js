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
    return (this.grid[1][1].color == "0,0,0");
  }

  graphique(){
    //Création d'un graphique
  }

  init(){
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
