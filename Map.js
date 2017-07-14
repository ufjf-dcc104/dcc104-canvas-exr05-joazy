function Map(rows, collumns) {
  this.SIZE = 40;
  this.enemies = [];
  this.cells = [];
  for (var r = 0; r < rows; r++) {
    this.cells[r] = [];
    for (var c = 0; c < collumns; c++) {
      this.cells[r][c] = 0;
    }
  }
}

Map.prototype.desenhar = function (ctx) {
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==1){
        ctx.fillStyle = 'red';
        ctx.fillRect(c*50, r*50, 50, 50);
      }
    }
  }
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].desenhar(ctx);
  }
};

Map.prototype.setCells = function (newCells) {
  for (var i = 0; i < newCells.length; i++) {
    for (var j = 0; j < newCells[i].length; j++) {
      switch (newCells[i][j]) {
        case 1:
          this.cells[i][j] = 1;
          break;


        default:
          this.cells[i][j] = 0;
      }
    }
  }
};
Map.prototype.verifica = function (posx, posy){
return this.cells[posy][posx];


}
Map.prototype.mover = function (dt) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].mover(this,dt);
  }
};
Map.prototype.perseguir = function (alvo) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].perseguir(alvo);
  }
};
