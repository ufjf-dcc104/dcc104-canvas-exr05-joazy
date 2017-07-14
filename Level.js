function Level (){
  this.sprites = [];
  this.shots = [];
  this.inimigos = 3;
  this.cooldown = 1;
}


Level.prototype.fire = function (alvo){
  if(alvo.cooldown<0){
  var tiro = new playerController();
  tiro.posX = alvo.posX+15;
  tiro.posY = alvo.posY+15;

  if(alvo.last ==0){
    tiro.mvRight = true;
  }
  else if ( alvo.last ==1) {
    tiro.mvLeft = true;
  }
  else if ( alvo.last ==2) {
    tiro.mvUp = true;
  }else{
    tiro.mvDown = true;
  }
  this.shots.push(tiro);

}
}

Level.prototype.mover = function () {
    for (var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].move();
      if(
        this.sprites[i].x >  3000 ||
        this.sprites[i].x < -3000 ||
        this.sprites[i].y >  3000 ||
        this.sprites[i].y < -3000
      ){
        this.sprites.splice(i, 1);
      }
    }

};
Level.prototype.desenhar = function (ctx) {
    for (var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].draw(ctx);

    }

};
Level.prototype.colidiuCom = function (alvo, resolveColisao) {
    for (var i = 0; i < this.sprites.length; i++) {
      if(this.sprites[i].colidiuCom(alvo)){
        resolveColisao(this.sprites[i], alvo);
      }
    }
};

Level.prototype.colidiuComTiros = function(player){
  for(var i = this.shots.length-1; i>=0; i--){

    this.colidiuCom(this.shots[i],
      (
        function(that)
        {
           return function(alvo){
            alvo.color = "green";
            that.shots.splice(i,1);
            x = that.sprites.indexOf(alvo);
            that.sprites.splice(x, 1);
            player.Pontos+=10;
          }
        }
      )(this));
  }
}
