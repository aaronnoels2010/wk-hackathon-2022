import type Player from '~/models/Player'

export default class Room {
  id: string
  name: string
  players: Player[]

  constructor(name: string, id: string | undefined = undefined, players: Player[] = []) {
    this.id = id ?? `${Date.now()}${Math.floor(Math.random() * 1000)}`
    this.name = name
    this.players = players ?? []
  }

  addPlayer(player: Player) {
    this.players.push(player)
  }

  static FromJSON(object: any): Room {
    return new Room(object.name, object.id, object.players)
  }
}
