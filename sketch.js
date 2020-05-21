var ball, database, position;
var canvas , background,form, player , game; 
var gamestate = 0;
var playercount;
function setup(){
    database = firebase.database();
  
    createCanvas(500,500);
    game = new Game()
    game.getstate();
    game.start();

}

function draw(){
    

}
