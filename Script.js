window.onload = function()
{
  var LEFT = 37, UP= 38, RIGHT =39, DOWN = 40, FIRE = 32;
  var cnv = document.querySelector("canvas"); //refencia ao canvas
  cnv.width = 500;
  cnv.height = 500;
  cnv.style.border = "1px solid #000";
  var ctx = cnv.getContext("2d"); //armazena contexto de renderização
  alert(cnv.width);
  var scene = new ImageLoader();
  var level = new Level();
  var player2 = new playerController();
  player2.posX =400;
  player2.cor = "blue";

  //carrega o background e algumas sprites
  scene.load("background","Sprite/png/BG/BG.png");
  scene.load("megaman" , "Sprite/zerosprite.png") ;
  var map = new Map(10, 10);
  map.setCells([
      [1,1,0,0,0,0,0,0,0,0],
      [2,0,1,0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0,0,1,0],
      [0,0,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],

  ]);

  //variaveis de controle de cena e tempo
  var cameraX = 4;
  var cameraY = 167;
  var fps = 120;
  var atual = new Date();
  var anterior = new Date();
  var dt = 0;
  var contador  = 2;
 ///
 var player = new playerController();
 addEventListener("keydown", function(e){
   switch (e.keyCode) {
     case 32:
     level.fire(player);
      break;
     case 37:
     player.mvRight = false;
     player.mvLeft = true;
     player.mvUp = false;
     player.mvDown = false;
       break;
     case 38:
     player.mvRight = false;
     player.mvLeft = false;
     player.mvUp = true;
     player.mvDown = false;
       break;
     case 39:
     player.mvRight = true;
     player.mvLeft = false;
     player.mvUp = false;
     player.mvDown = false;
       break;
     case 40:
     player.mvRight = false;
     player.mvLeft = false;
     player.mvUp = false;
     player.mvDown = true;
       break;

       case 87://w
       player2.mvRight = false;
       player2.mvLeft = false;
       player2.mvUp = true;
       player2.mvDown = false;
         break;
         case 65://a
         player2.mvRight = false;
         player2.mvLeft = true;
         player2.mvUp = false;
         player2.mvDown = false;
           break;

           case 83://s
           player2.mvRight = false;
           player2.mvLeft = false;
           player2.mvUp = false;
           player2.mvDown = true;
             break;

             case 68://d
             player2.mvRight = true;
             player2.mvLeft = false;
             player2.mvUp = false;
             player2.mvDown = false;
               break;

     default:

   }
 });


 addEventListener("keyup", function(e){
   switch (e.keyCode) {
     case 37:
        player.mvLeft = false;
       break;
     case 38:
        player.mvUp = false;
       break;
     case 39:
          player.mvRight = false;
       break;
     case 40:
      player.mvDown = false;
       break;

       case 87://w
       player2.mvUp = false;
         break;
         case 65://a
        player2.mvLeft = false;
           break;

           case 83://s
           player2.mvDown= false;
             break;

             case 68://d
             player2.mvRight = false;

               break;

     default:

   }
 });
  //var intervalo = 1000/60;
  //window.setInterval(loop,intervalo);
//  window.setTimeout(loop, intervalo)

 init();

  function init(){ // inicia a função loop

    loop();
  }


  function draw(){
    atual = new Date();
    dt = (atual - anterior)/1000;
    ctx.clearRect(0,0,cnv.width,cnv.height);
    map.desenhar(ctx);
    player.draw(ctx);
    player.move(map);
    player2.draw(ctx);
    player2.move(map);
    level.desenhar(ctx);
    level.mover();
  //  ctx.drawImage(scene.images["background"],0,0,scene.images["background"].width, scene.images["background"].height,0,0,cnv.width, cnv.height);
    anterior = atual;
  }


 function loop(){
   window.requestAnimationFrame(loop,cnv);
   draw();
 }


}
