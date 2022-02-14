const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pedra
var Pedrag
var ground1

function preload(){
Pedrag = loadImage("Pedraf.png");
ground1 = loadImage("ground.png"); 
}

function setup() {
createCanvas(800, 750);

ground = createSprite(800,100);
ground.addImage(ground1);
pedra = Bodies.circle(200,100,10);

}


function draw() {
  background();
  ellipse(200,100,10);
  

  drawSprites();

}

function keyPressed() {

	
}