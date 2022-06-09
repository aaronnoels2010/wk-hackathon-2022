import Player from '~/models/Player'

export default class Room {
  isHidden: boolean
  timerIsStarted: boolean
  timeInSecondsLeft: number
  id: string
  name: string
  players: Player[]

  constructor(name: string, id: string | undefined = undefined, players: Player[] = [],
    isHidden = false, timerIsStarted = false, timeInSeconds = 30) {
    this.id = id ?? `${Date.now()}${Math.floor(Math.random() * 1000)}`
    this.name = name
    this.players = players ?? []
    this.isHidden = isHidden
    this.timerIsStarted = timerIsStarted
    this.timeInSecondsLeft = timeInSeconds
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
    if (!player)
      return
    const indexOfPlayer = this.players.findIndex(p => p.id === player.id)
    if (indexOfPlayer >= 0)
      this.players[indexOfPlayer] = player
    else
      this.players.push(player)
  }

  nextTick() {
    if (this.timeInSecondsLeft > 0) {
      this.isHidden = true
      this.timeInSecondsLeft -= 1
    }
  }

  decrementTimer() {
    this.timeInSecondsLeft -= 1
  }

  incrementTimer() {
    this.timeInSecondsLeft += 1
  }

  startTimer() {
    this.timerIsStarted = true
  }

  resetTimer() {
    this.isHidden = false
    this.timerIsStarted = false
    this.timeInSecondsLeft = 30
  }

  get averageScore() {
    const playersWhoVoted = [...this.players].filter(p => p.score && !isNaN(+p.score))
    const average = playersWhoVoted.length > 0
      ? playersWhoVoted.map(p => +p.score).reduce((prev, ele) => prev + ele, 0) / playersWhoVoted.length
      : 0
    return isNaN(average) ? 0 : Math.round(average).toFixed(0)
  }

  static FromJSON(object: any): Room {
    return new Room(object.name,
      object.id,
      object.players ? object.players.map((p: any) => Player.FromJSON(p)) : [],
      object.isHidden ?? false, object.timerIsStarted ?? false,
      object.timeInSecondsLeft ?? 30)
  }
}
