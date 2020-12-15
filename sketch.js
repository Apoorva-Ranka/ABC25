/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1,box2,box3,box4,box5;
var ground
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var bgimg;

function preload (){
    bgimg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    myengine = Engine.create();
    myworld = myengine.world;

    box1 = new Box(575,350,50,75)
    box2 = new Box(725,350,50,75)
    box3 = new Box(575,225,50,75)
    box4 = new Box(725,225,50,75)
    box5 = new Box(650,80,50,75)

    ground = new Ground(width/2,390,width,20)

    pig1 = new Pig(650,350)
    pig2 = new Pig(650,275)

    //Before Images
    /*log1 = new Log(650,300,200,PI/2)
    log2 = new Log(650,100,200,PI/2)

    log3 = new Log(600,50,105,PI/6)
    log4 = new Log(700,50,105,-PI/6)

    log1 = new Log(650,375,200,PI)
    log2 = new Log(650,100,200,PI)

    log3 = new Log(600,50,105,-PI/6)
    log4 = new Log(700,50,105,PI/6)
    

    bird = new Bird(100,100);
}

function draw(){
    background(bgimg);
    Engine.update(myengine);

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()

    ground.display()

    pig1.display()
    pig2.display()

    log1.display()
    log2.display()
    log3.display()
    log4.display()

    bird.display()   
}*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    myworld = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(500, 350);
    log1 = new Log(810,350,300, PI);

    /*box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, -PI/7);
    log5 = new Log(870,120,150, PI/7);*/

    bird = new Bird(100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    /*box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();*/

    bird.display();

    text(mouseX+","+mouseY,mouseX,mouseY)
}