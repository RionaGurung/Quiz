var database;

var gameState = 0;

var contestantCount;

var quiz, question;

var contestat;

function setup(){

  createCanvas(850, 400);

  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){

  background("pink");

  
}
