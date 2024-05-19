//Player
//Board
//Game

class Player{
    constructor(id, symbol){
        this.id = id
        this.symbol = symbol
    }
}


class Board{
    constructor(size = 3){
        this.size = size
        this.grid = Array.from({ length: size }, () => Array(size).fill(null));
    }

    setMove(x, y, player){
        if(this.checkValidMove(x,y)){
            throw new Error("Cell already occupied!")
        }
        this.grid[x][y] = player.symbol
        return true
    }

    checkValidMove(x, y){
        return this.grid[x][y] != null && x<this.size && y<this.size && x>=0 && y>=0
    }

    checkWinner(player){
        for(let i=0; i<this.size; i++){
            let rowWin = true
            let colWin = true

            for(let j=0; j<this.size; j++){
                if(this.grid[i][j] !== player.symbol) rowWin=false
                if(this.grid[j][i] !== player.symbol) colWin=false
            }

            if(rowWin || colWin) return true
        }

         // Check diagonals
         let diag1Win = true;
         let diag2Win = true;
 
         for (let i = 0; i < this.size; i++) {
             if (this.grid[i][i] !== player.symbol) diag1Win = false;
             if (this.grid[i][this.size - 1 - i] !== player.symbol) diag2Win = false;
         }
 
         return diag1Win || diag2Win;
    }


    isFull(){
       return this.grid.flat().every(cell => cell !== null)
    }

}

class Game{
    constructor(player1, player2){
        this.board = new Board()
        this.players = [player1, player2]
        this.currentPlayerIndex = 0
    }

    play(x, y){
        const player = this.players[this.currentPlayerIndex];
        this.board.setMove(x, y, player)

        if(this.board.isFull()){
            return "Draw"
        }else if(this.board.checkWinner(player)){
            return `${player.symbol} Wins!`
        }else{
            this.currentPlayerIndex = 1 - this.currentPlayerIndex;
            return 'Next turn';
        }
    }
}

let player1 = new Player(0, "X")
let player2 = new Player(1, "O")
let game = new Game(player1, player2)

console.log(game.play(0,0))
console.log(game.play(0,1))
console.log(game.play(1,1))
console.log(game.play(0,2))
console.log(game.play(2,2))
console.log(game.play(2,0))
console.log(game.play(2,1))
console.log(game.play(1,0))