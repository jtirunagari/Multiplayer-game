var gameState=0
var playercount=0
var database
var game
var player
var form
var car1Image,car2Image,car3Image,car4Image
var car1,car2,car3,car4
var trackImage
var allplayers
var carsAtTheEnd=0
var cars=[]

function preload(){
car1Image=loadImage("car1.png")
car2Image=loadImage("car2.png")
car3Image=loadImage("car3.png")
car4Image=loadImage("car4.png")
trackImage=loadImage("track.jpeg")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database()
    game = new Game()
    game.readGameState()
    game.playtheGame()
    console.log(gameState)
}

function draw(){
    background("white");
    if(playercount==4){
        gameState==1
        game.writeGameState(1)
    }
    if(gameState==1){
        game.startGame()
    }
}

