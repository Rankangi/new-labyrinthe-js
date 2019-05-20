class Game{
  constructor(){
    this.agent = new Player(true);
    this.cc = 1;
    this.eps = 1;
    this.liste_reward = [];
    this.liste_pas = [];
    this.x = [];
  }

  update(){
    if (this.agent.env.is_end()){
      this.eps = max(0.2,0.999*this.eps);
      this.liste_pas.push(this.agent.pas);
      this.agent.env.grid[this.agent.i][this.agent.j].color = [255,255,255];
      // this.liste_reward
      this.x.push(this.cc);
      this.agent.reset();
      this.cc++
    }
    var state = [this.agent.i , this.agent.j];
    var action = this.agent.take_action(this.eps);
    var ref = this.agent.step(action);
    var statep = [ref[0],ref[1]];
    var reward = ref[2];

    var actionp = this.agent.take_action(0);

    this.agent.Q[state[0]][state[1]][action]+=0.1*(reward+0.9*this.agent.Q[statep[0]][statep[1]][actionp]-this.agent.Q[state[0]][state[1]][action]);
    this.agent.env.grid[state[0]][state[1]].color = [255,255,255];
    this.agent.env.grid[statep[0]][statep[1]].color = [0,0,0];
    this.agent.pas ++;
    this.agent.champ.QUpdate(this.agent.i,this.agent.j);
  }
}
