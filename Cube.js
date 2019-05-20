class Cube{
  constructor(x,y,color,len){
    this.x = x;
    this.y = y;
    this.color = color;
    this.len = len;
    this.reward = -2;
  }

  paint(){
    fill(this.color)
    noStroke();
    square(this.x,this.y,this.len);
    // if (this.reward != 0){
    //   fill(0);
    //   textSize(40);
    //   textAlign(CENTER);
    //   text(this.reward + "" , this.x+this.len/2 , this.y+this.len*3/4.5)
    // }
  }
}
