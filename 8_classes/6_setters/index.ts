class Coords{
    x: number
    y: number

    constructor(x: number, y: number){
        this.x = x
        this.y = y
    }

    set coordX(x: number){
        if(x === 0){
            return
        }
        this.x = x
    }

    set coordY(y: number){
        if(y === 0){
            return
        }
        this.y = y
    }
}

const coords1 = new Coords(2, 2)
coords1.coordX = 6
console.log(coords1.x)