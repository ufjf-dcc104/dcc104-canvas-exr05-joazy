function playerController(){
  this.speed = 0;
  this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
  this.scrY = 64;
  this.scrX = 62; //  Y do sprite
  this.width = 46; //largura
  this.height = 46; // altura
  this.posX = 50;
  this.posY = 50; // pos desenho
  this.Anim = true;
  this.speedbase =1;
  this.cooldown =1;
  this.life = 100;
  this.last =3;
  this.cor = "black";

}
  //desenha
  playerController.prototype.draw = function(ctx){

    ctx.fillStyle = this.cor;
    ctx.fillRect(this.posX, this.posY, 30, 30);
    ctx.fillStyle = 'red';
    if(this.last ==3){
    ctx.fillRect(this.posX+11, this.posY+30, 10, 10);
  }
  if(this.last ==0){
    ctx.fillRect(this.posX+30, this.posY+11, 10, 10);
  }
  if(this.last ==1){
    ctx.fillRect(this.posX-10, this.posY+11, 10, 10);
  }
  if(this.last ==2){
    ctx.fillRect(this.posX+11, this.posY-10, 10, 10);
  }

}
playerController.prototype.move = function(map){
if(this.mvRight){
  if(map.verifica(Math.trunc((this.posX+2+30)/50),Math.trunc((this.posY)/50)) ==0 && map.verifica(Math.trunc((this.posX+2+30)/50),Math.trunc((this.posY+30)/50)) ==0 && this.posX+32 <500){
  this.posX +=2;
  this.last = 0;
}

}
if(this.mvLeft){
    if(map.verifica(Math.trunc((this.posX-2)/50),Math.trunc((this.posY)/50)) ==0 && map.verifica(Math.trunc((this.posX-2)/50),Math.trunc((this.posY+30)/50)) ==0 && this.posX-2>0){
  this.posX -=2;
  this.last = 1;
}
}
if(this.mvUp){
    if(map.verifica(Math.trunc((this.posX)/50),Math.trunc((this.posY-2)/50)) ==0 && map.verifica(Math.trunc((this.posX+30)/50),Math.trunc((this.posY-2)/50)) ==0 && this.posY-2 >0){
  this.posY -=2;
  this.last = 2;
}
}
if(this.mvDown){
    if(map.verifica(Math.trunc((this.posX)/50),Math.trunc((this.posY+2+30)/50)) ==0 && map.verifica(Math.trunc((this.posX+30)/50),Math.trunc((this.posY+2+30)/50)) ==0 && this.posY+32<500){
  this.posY+=2;
  this.last = 3;
}
}
}
