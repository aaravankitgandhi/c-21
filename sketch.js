var canvas;
var music;
var box1,box2,box3,box4,ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1=createSprite(0,580,360,30);
    box2=createSprite(295,580,200,30);
    box3=createSprite(515,580,200,30);
    box4=createSprite(740,580,220,30);
    ball=createSprite(30,100,40,40);

    box1.shapeColor="red";
    box2.shapeColor="yellow";
    box3.shapeColor="orange";
    box4.shapeColor="green";
    ball.shapeColor="blue";

    ball.velocityX=2;
    ball.velocityY=4;





    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

     ball.bounceOff(edges);
     if(ball.bounceOff(box1)){
      music.play();
     
     ball.shapeColor="red";}
     if(ball.bounceOff(box2)){
    music.stop();

     ball.shapeColor="yellow";}
     if(ball.bounceOff(box3))
     ball.shapeColor="orange";
     if(ball.bounceOff(box4))
     ball.shapeColor="green";
    
     drawSprites();


    //add condition to check if box touching surface and make it box
}
