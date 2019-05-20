class Champ{
  constructor(Q,Laby){
    this.Qfunct = new Qfunct();
    this.Q = Q;
    this.vect = [
      "↑",
      "↓",
      "←",
      "→"
    ];
    this.laby = Laby;
    this.set_grid();
  }

  set_grid(){
    this.grid = [];
    var cube;
    for (var i = 0 ; i<row ; i++){//
      this.grid.push([]);
      for (var j = 0 ; j<col ; j++){//
        cube = new Cube(j*res+20,i*res+10,[255,255,255],res);
        this.grid[i].push(cube);
        if (this.laby.grid[i][j].color != "255,255,255"){
          this.grid[i][j].color = this.laby.grid[i][j].color;
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
