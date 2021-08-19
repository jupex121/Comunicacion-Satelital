var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var spacebg, spacebgImg;

var upLinkLeft, upLinkLeftImg;
var downLinkLeft, downLinkLeftImg;
var upLinkRight, upLinkRightImg;
var downLinkRight, downLinkRightImg;

function preload(){
  
  upLinkLeftImg = loadAnimation("leftu/upleft1.png","leftu/upleft2.png","leftu/upleft3.png","leftu/upleft4.png","leftu/upleft5.png","leftu/upleft6.png","leftu/upleft7.png","leftu/upleft8.png");
  
  downLinkLeftImg = loadAnimation("leftd/dleft1.png","leftd/dleft2.png","leftd/dleft3.png","leftd/dleft4.png","leftd/dleft5.png","leftd/dleft6.png","leftd/dleft7.png","leftd/dleft8.png","leftd/dleft9.png");
  
  upLinkRightImg = loadAnimation("rightu/upright1.png","rightu/upright2.png","rightu/upright3.png","rightu/upright4.png","rightu/upright5.png","rightu/upright6.png","rightu/upright8.png");
  
  downLinkRightImg = loadAnimation("rightd/dright1.png","rightd/dright2.png","rightd/dright3.png","rightd/dright4.png","rightd/dright5.png","rightd/dright6.png","rightd/dright7.png","rightd/dright8.png");
  
  earthImg = loadAnimation("other/earth1.png","other/earth2.png","other/earth3.png","other/earth4.png","other/earth5.png");
  
  groundStationLeftImg = loadImage("other/gstation1.png");
  groundStationRightImg = loadImage("other/gstation2.png");
  
  satelliteImg = loadImage("other/satellite.png");
  spacebgImg = loadAnimation("other/spacebg1.png","other/spacebg2.png");
}

function setup(){
  
  createCanvas(700,500);
  
  groundStationLeft = createSprite(50,430,50,50);
  groundStationLeft.addImage(groundStationLeftImg);
  groundStationLeft.scale = 0.04;
  
  groundStationRight = createSprite(650,430,50,50);
  groundStationRight.addImage(groundStationRightImg);
  groundStationRight.scale = 0.04;
  
  upLinkLeft = createSprite(190,270,10,100);
  upLinkLeft.addAnimation("uplinkleft",upLinkLeftImg);
  upLinkLeft.scale = 0.08;
  
  upLinkRight = createSprite(510,270,10,100);
  upLinkRight.addAnimation("uplinkright",upLinkRightImg);
  upLinkRight.scale = 0.08;
  
  downLinkLeft = createSprite(190,270,10,100);
  downLinkLeft.addAnimation("downlinkleft",downLinkLeftImg);
  downLinkLeft.scale = 0.08;
  
  downLinkRight = createSprite(510,270,10,100);
  downLinkRight.addAnimation("downlinkright",downLinkRightImg);
  downLinkRight.scale = 0.08;
  
  earth = createSprite(350,820,50,50);
  earth.addAnimation("earth",earthImg);
  earth.scale = 0.6;
  
  satellite = createSprite(350,70,50,50);
  satellite.addImage(satelliteImg);
  satellite.scale = 0.09;
  
  spacebg = createSprite(200,200);
  spacebg.addAnimation("bg",spacebgImg);
  
}

function draw(){
  
  background("black")
  
  //Los links subida y bajada son falsos.
  upLinkLeft.visible = false;
  upLinkRight.visible = false;
  downLinkLeft.visible = false;
  downLinkRight.visible = false;
  
  
  if (keyDown("L")) {
    upLinkLeft.visible = true;
  }
  
  if (keyDown("R")) {
    upLinkRight.visible = true;
  }
  
  if (keyDown("LEFT_ARROW")) {
    downLinkLeft.visible = true;
  }
  
  if (keyDown("RIGHT_ARROW")) {
    downLinkRight.visible = true;
  }
  
  drawSprites();
  
  spacebg.depth = 0.01;
  upLinkLeft.depth = 0.02;
  upLinkRight.depth = 0.03;
  downLinkRight.depth = 0.04;
  downLinkLeft.depth = 0.05;
  earth.depth = 0.06;
  groundStationLeft.depth = 0.07;
  groundStationRight.depth = 0.08;
  
  
  textSize(15);
  fill("white");
  text("Presiona las teclas L & R",7,15);
  text("Presiona las teclas Izquierda/Derecha", 7, 45);
  textSize(13);
  text("- para solicitar datos del satélite.",9,30);
  text("- para recibir datos del satélite.",9,60);
}