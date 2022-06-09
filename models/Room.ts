import Player from '~/models/Player'

export default class Room {
  isHidden: boolean
  id: string
  name: string
  players: Player[]

  constructor(name: string, id: string | undefined = undefined, players: Player[] = [], isHidden: boolean = false) {
    this.id = id ?? `${Date.now()}${Math.floor(Math.random() * 1000)}`
    this.name = name
    this.players = players ?? []
    this.isHidden = isHidden
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer)
  }

  toggleHidden() {
    this.isHidden = !this.isHidden
  }

  removePlayer(player: Player) {
    this.players = this.players.filter(p => p.id !== player.id)
  }

  updatePlayer(player: Player) {
    const indexOfPlayer = this.players.findIndex(p => p.id === player.id)
    if (indexOfPlayer >= 0)
      this.players[indexOfPlayer] = player
  }

  static FromJSON(object: any): Room {
    return new Room(object.name,
      object.id,
      object.players ? object.players.map((p: any) => Player.FromJSON(p)) : [],
      object.isHidden ?? false)
  }
}
