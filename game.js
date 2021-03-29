class Game{
    constructor(){

    }
    readGameState(){
        console.log("oreo")
    var ref=database.ref("gameState")
    ref.on("value",function(data){
        gameState=data.val()
    })
    }
    writeGameState(r){
        database.ref("/").update({
            gameState: r
        })
    }
    playtheGame(){
        if(gameState==0){
            player=new Player()
            player.readPlayerCount()
            form = new Form()
            form.displayForm()
            console.log("hi")
        }
    car1= createSprite(700,200,50,50)
    car1.addImage(car1Image)
    car2= createSprite(800,200,50,50)
    car2.addImage(car2Image)
    car3= createSprite(900,200,50,50)
    car3.addImage(car3Image)
    car4= createSprite(1000,200,50,50)
    car4.addImage(car4Image)
    cars.push(car1)
    cars.push(car2)
    cars.push(car3)
    cars.push(car4)
    }
    startGame(){
        form.hide()
        player.readAllPlayers()
        var i=0
        var x=400
        var y=0
        image(trackImage,0,-displayHeight*5,displayWidth,displayHeight*6)
        for(var p in allplayers){
        i=i+1
        cars[i-1].x=x
        cars[i-1].y=displayHeight-allplayers[p].distance
        x=x+300
        if(i==player.position){
            camera.position.x=displayWidth/2
            camera.position.y=cars[i-1].y
        }
        }
        drawSprites()
        if(player.distance>6250){
            gameState=2
            player.readCarsAtTheEnd()
            player.rank=carsAtTheEnd+1
            player.updateCarsAtTheEnd(player.rank)
        }
        if(gameState==2){
            endGame()
        }
        if(keyIsDown(UP_ARROW)){
            player.distance=player.distance+10
            player.registerPlayer()
        }
    }
    endGame(){
    console.log(player.rank);
    }
}