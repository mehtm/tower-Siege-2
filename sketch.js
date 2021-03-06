const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygonImage
function preload() {
    polygonImage=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(Engine);

    ground = new Ground(450,390,900,20);
    stand1=new Stand(390,300,250,10)
    stand2= new Stand(700,200,200,10)
    //level1 blocks
    block1= new Blocks(300,275,30,40)
    block2= new Blocks(330,275,30,40)
    block3= new Blocks(360,275,30,40)
    block4= new Blocks(390,275,30,40)
    block5= new Blocks(420,275,30,40)
    block6= new Blocks(450,275,30,40)
    block7= new Blocks(480,275,30,40)

    ball=Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot= new SlingShot(this.ball,{x:100,y:200})
}
function draw(){
    background("blue");

    textSize(22)
    fill("yellow");
    text("drag the polygon and release it to launch it towards the blocks",100,30)
    ground.display()
    stand1.display()
    stand2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()

    imageMode(CENTER);
    image(polygonImage,ball.position.x,ball.position.y,40,40);
    slingshot.display();


}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}