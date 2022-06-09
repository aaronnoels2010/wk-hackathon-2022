export default class Player {
  id: string
  name: string
  score: string

  constructor(name: string, id: string | undefined = undefined, score = '') {
    this.id = id ?? `${Date.now()}${Math.floor(Math.random() * 1000)}`
    this.name = name
    this.score = score
  }

  changeName(name: string) {
    this.name = name
  }

  clearScore() {
    this.score = ''
  }

  static FromJSON(object: any): Player {
    return new Player(object.name, object.id, object.score)
  }
}
