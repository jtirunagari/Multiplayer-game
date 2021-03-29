class Form{
    constructor(){
        this.heading=createElement('h1')
        this.inputBox=createInput("Enter your name")
        this.button=createButton("Play!")
        this.greeting=createElement('h2')
        this.reset=createButton("Reset")
    }
    displayForm(){
        this.heading.html("Welcome to the Car Racing Game!")
        this.heading.position(displayWidth-1000,displayHeight-900)
        this.inputBox.position(displayWidth-920,displayHeight-800)
        this.button.position(displayWidth-920,displayHeight-750)
        this.reset.position(displayWidth-600,displayHeight-600)
        this.button.mousePressed(()=>{
            player.name=this.inputBox.value()
            playercount=playercount+1
            player.position=playercount
            player.writePlayerCount(playercount)
            this.greeting.html("Hi" + player.name)
            player.registerPlayer()
            this.greeting.position(displayWidth-900,displayHeight-700)

        })
        this.reset.mousePressed(()=>{
            player.writePlayerCount(0)
            game.writeGameState(0)
            var b = database.ref('allplayers')
            b.remove()
        })
    }
    hide(){
        this.inputBox.hide()
        this.button.hide()
        this.greeting.hide()
    }
}