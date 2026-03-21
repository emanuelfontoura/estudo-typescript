enum Actions {
    Run, // se usado, retorna 0
    Move, // se usado, retorna 1
    Static // se usado, retorna 2
}

const action1: Actions = Actions.Run
console.log(action1)
console.log(Actions[action1])

enum Actions2 {
    Run = 'RUN',
    Move = 'MOVE',
    Static = 'STATIC'
}

const action2: Actions2 = Actions2.Move
console.log(action2)

// COM TYPE

type Action = 'Run' | 'Move' | 'Static'

const action3: Action = 'Run'