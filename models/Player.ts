export default class Player {
  id: string
  name: string
  score: string
  isOwner: boolean

  constructor(name: string, id: string | undefined = undefined, score = '', isOwner = false) {
    this.id = id ?? `${Date.now()}${Math.floor(Math.random() * 1000)}`
    this.name = name
    this.score = score
    this.isOwner = isOwner
  }

  makeOwnerOfBoard() {
    this.isOwner = true
  }

  changeName(name: string) {
    this.name = name
  }

  clearScore() {
    this.score = ''
  }

  static FromJSON(object: any): Player {
    return new Player(object.name, object.id, object.score, object.isOwner)
  }
}
