const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var platform1, platform2, hitler;
var BackGround = "white";
var score = 0;

function preload(){
  whatsBackground();
}
function setup() {
  createCanvas(1600,800);
   
  engine = Engine.create();
  world = engine.world;
  
  shinchan = new Hitler(150,400,110,110)

  platform = new Ground(650,670,400,20)

  box1 = new Box(522,620,50,80)
  box2 = new Box(565,620,50,80)
  box3 = new Box(608,620,50,80)
  box4 = new Box(651,620,50,80)
  box5 = new Box(694,620,50,80)
  box6 = new Box(737,620,50,80)
  box7 = new Box(780,620,50,80)

  box8 = new Box(565,550,50,80)
  box9 = new Box(608,550,50,80)
  box10 = new Box(651,550,50,80)
  box11 = new Box(694,550,50,80)
  box12 = new Box(737,550,50,80)
  box13 = new Box(608,480,50,80)
  box14 = new Box(651,480,50,80)
  box15 = new Box(694,480,50,80)

  box16 = new Box(651,400,50,80)
  
  platform2 = new Ground(1250,375,400,20)
  
  box17 = new Box(1122,325,50,80)
  box18 = new Box(1165,325,50,80)
  box19 = new Box(1208,325,50,80)
  box20 = new Box(1251,325,50,80)
  box21 = new Box(1294,325,50,80)
  box22 = new Box(1337,325,50,80)
  box23 = new Box(1380,325,50,80)

  box24 = new Box(1165,255,50,80)
  box25 = new Box(1208,255,50,80)
  box26 = new Box(1251,255,50,80)
  box27 = new Box(1294,255,50,80)
  box28 = new Box(1337,255,50,80)

  box29 = new Box(1208,185,50,80)
  box30 = new Box(1251,185,50,80)
  box31 = new Box(1294,185,50,80)

  box32 = new Box(1251,115,50,80) 

  platform3 = new Ground(800,800,1600,30)

  rope = new Rope(shinchan.body,{x:175,y:500})

  Engine.run(engine)
}

function draw() {

  Engine.update(engine)

  if (background)
  {
  background(BackGround); 
  }
  
  rope.display();
  shinchan.display();
  platform.display();
  platform2.display();
  platform3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();  
  box8.display();  
  box9.display();  
  box10.display();  
  box11.display();  
  box12.display();  
  box13.display();  
  box14.display();  
  box15.display();  
  box16.display();  
  box17.display();  
  box18.display();  
  box19.display();  
  box20.display();  
  box21.display();  
  box22.display();  
  box23.display();  
  box24.display();  
  box25.display();  
  box26.display();  
  box27.display();  
  box28.display();  
  box29.display();  
  box30.display();  
  box31.display();  
  box32.display();  
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();  
  box8.score();  
  box9.score();  
  box10.score();  
  box11.score();  
  box12.score();  
  box13.score();  
  box14.score();  
  box15.score();  
  box16.score();  
  box17.score();  
  box18.score();  
  box19.score();  
  box20.score();  
  box21.score();  
  box22.score();  
  box23.score();  
  box24.score();  
  box25.score();  
  box26.score();  
  box27.score();  
  box28.score();  
  box29.score();  
  box30.score();  
  box31.score();  
  box32.score();  
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shinchan.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.shinchanFly();
}
function keyPressed(){
  if (keyCode === 32)
  {
    rope.shinchanAttach(shinchan.body);
  }
}

async function whatsBackground(){
  var link = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var data = await link.json()
  var dateTime = data.datetime
  var hour = dateTime.slice(11,13)
  console.log(hour)
  if(hour > 6 && hour < 18)
  {
    BackGround = "yellow"
  }else{
    BackGround = "black"
  }
}