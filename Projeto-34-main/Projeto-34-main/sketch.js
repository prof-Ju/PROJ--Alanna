
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine, world;

let ground;

let alien;
let cows = [];
let barn;
let raio;
let bg_img, alien_img, barn_img, raio_img;


function preload(){
  alien_img = loadImage("./assests/Alien.png");
  barn_img = loadImage("./assests/Barn.png");
  bg_img = loadImage("./assests/background.png");
  raio_img = loadImage("./assests/raio colisor.png");
}

function setup() {
  createCanvas(400,400);
  //text("score: " + score + " / total: 100" , x, y )

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,385,400,20)

  //cow = new Cow()
  
}


function draw() 
{
  background(51);


  Engine.update(engine);

  ground.display();
  image(bg_img,0,0,width,height);

  //colocar o et e as vacas

  
}

function controlers(){
  if(keyIsDown(LEFT_ARROW)){

  }
}