class Player{
    constructor(id, name, position = 0){
        this.id = id
        this.name = name
        this.position = position
    }

    move(position){
        this.position += position
    }

    setPosition(position){
        this.position = position
        // return position
    }
}

class Board{
    constructor(size = 100, snake = {}, ladder = {}){
        this.size = size
        this.snake = snake
        this.ladder = ladder
    }

    getNewPosition(oldPositon){
        if(this.snake[oldPositon]){
            return this.snake[oldPositon]
        }else if(this.ladder[oldPositon]){
            return this.ladder[oldPositon]
        }

        return oldPositon
    }
}

class Dice{
    roll(){
        return Math.floor(Math.random()*6)+1
    }
}

class SnakeLadderGame{
    constructor(players, snake, ladder){
        this.players = players
        this.board = new Board(100, snake, ladder)
        this.dice = new Dice()
        this.currentPlayerIndex = 0
    }

    play(){
        let player = this.players[this.currentPlayerIndex]
        let roll = this.dice.roll()
        console.log(`${player.name} rolled ${roll}`)

        let newPosition = player.position + roll
        if(newPosition > this.board.size){
            newPosition = player.position
        }else{
            newPosition = this.board.getNewPosition(newPosition)
        }

        player.setPosition(newPosition)
        console.log(`${player.name} moved to position ${newPosition}`);

        if(newPosition === this.board.size){
            console.log(`${player.name} wins!`)
        }

        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length
        return false

    }

    start(){
        let win = false
        while(!win){
            win =  this.play()
        }
    }
}


const players = [new Player(1, 'Alice'), new Player(2, 'Bob')];
console.log(players);
const snakes = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78
};
const ladders = {
    1: 38,
    4: 14,
    9: 31,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    80: 100
};

const game = new SnakeLadderGame(players, snakes, ladders);

game.start();