class Champ{
  constructor(Q){
    this.Qfunct = new Qfunct();
    this.Q = Q;
    this.vect = [
      "↑",
      "↓",
      "←",
      "→"
    ];
    this.laby = new Laby();
    this.set_grid();
  }

  set_grid(){
    this.grid = [];
    var cube;
    for (var i = 0 ; i<row ; i++){//
      this.grid.push([]);
      for (var j = 0 ; j<col ; j++){//
        cube = new Cube(windowWidth/3.5+j*75,100+i*75,[255,255,255],70)
        this.grid[i].push(cube);
        if (this.laby.grid[i][j].color == "150,150,150"){
          this.grid[i][j].color = [150,150,150];
        }
      }
    }
  }


  QUpdate(i,j){
    var action = argMax(this.Q[i][j]);
    this.grid[i][j].reward = this.vect[action];
    this.Qfunct.grid[i][j].reward = this.Q[i][j][action];
  }
}
