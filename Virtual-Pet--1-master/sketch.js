//Create variables here
var dog, happyDog;
var imgdog, imghdog
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  imgdog = loadImage("images/dogImg.png");
  imghdog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,10,10)
  dog.addImage(imgdog)
  dog.scale = 0.25
  database = firebase.database();
foodStock=database.ref('food');
foodStock.on("value",readstock);
}


function draw() {  
background(rgb(46,139,87))
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(imghdog);
}
var x = 20;
  if(x<=0){
x = 0;
  }else{
    x = x-1
  }
  drawSprites();
  //add styles here
  textSize = 10
fill("red")
stroke("black")
text("food remaning :" + x,200,150);
text("note: press up arror to feed the dog",200,50)
}
function readstock(data){
foodS = data.val();
}


function writeStock(x){

  database.ref('/').update({


  })
}

