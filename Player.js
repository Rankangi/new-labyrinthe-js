class Player {
  constructor(train){
    this.train = train;
    this.Q = createQ();
    this.env = new Laby();
    this.champ = new Champ(this.Q);
    this.reset();
  }

  reset(){
    this.i = 9;
    this.j = 8;
    this.pas = 0;
  }

  take_action(eps){
    var action;
    if (Math.random() < eps){
      action = randint(4);
    } else {
      action = argMax(this.Q[this.i][this.j]);
    }

    return action;
  }

  step(action){
    var newi = max(0,min(this.i+this.env.actions[action][1],row)); //
    var newj = max(0,min(this.j+this.env.actions[action][0],col)); //

    if (this.env.grid[newi][newj].color == "150,150,150"){
      return [this.i,this.j,-5];
    } else {
      this.i = max(0,min(this.i+this.env.actions[action][1],row)); //
      this.j = max(0,min(this.j+this.env.actions[action][0],col)); //
      var reward = this.env.grid[this.i][this.j].reward;
      return [this.i,this.j,reward];
    }
  }
}

function createQ() {
  var Q = [];
  var L;

  for (var j = 0 ; j<row ; j++){ //
    L = [];

    for (var i = 0 ; i<col ; i++){ //
      L.push([0,0,0,0]);
    }
    Q.push(L);
  }

  return Q;
}

function randint(max) {
  return Math.floor(Math.random()*Math.floor(max));
}

function argMax(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}
