import Player from '~/models/Player'

export default class Room {
  id: string
  name: string
  players: Player[]
  durationInSeconds: number
  timerStartTimestamp: number | null
  isHidden: boolean
  interruptTimer: boolean

  constructor(name: string,
              id: string | undefined = undefined,
              players: Player[] = [],
              isHidden = false,
              durationInSeconds = 30,
              timerStartTimestamp = null,
              interruptTimer = false) {
    this.id = id ?? `${Date.now()}${Math.floor(Math.random() * 1000)}`
    this.name = name
    this.players = players ?? []
    this.durationInSeconds = durationInSeconds
    this.timerStartTimestamp = timerStartTimestamp
    this.isHidden = isHidden
    this.interruptTimer = interruptTimer
  }

  addPlayer(newPlayer: Player) {
    if (!this.players || this.players.length === 0)
      newPlayer.makeOwnerOfBoard()

    this.players.push(newPlayer)
  }

  toggleIsHidden(): void {
    this.isHidden = !this.isHidden
  }

  removePlayer(player: Player): boolean {
    if (player.isOwner) {
      const nonOwnerIndex = this.players.findIndex(p => !p.isOwner)
      if (nonOwnerIndex !== -1)
        this.players[nonOwnerIndex].makeOwnerOfBoard()
    }
    this.players = this.players.filter(p => p.id !== player.id)
    return !this.players || this.players.length === 0
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

  startTimer() {
    this.timerStartTimestamp = Date.now()
  }

  interruptTheTimer() {
    this.interruptTimer = true
  }

  resetTimer() {
    this.isHidden = false
    this.durationInSeconds = 30
    this.timerStartTimestamp = null
    this.interruptTimer = false;
  }

  get averageScore(): string {
    const playersWhoVoted = [...this.players].filter(p => p.score && !isNaN(+p.score))
    const average = playersWhoVoted.length > 0
      ? playersWhoVoted.map(p => +p.score).reduce((prev, ele) => prev + ele, 0) / playersWhoVoted.length
      : 0
    return isNaN(average) ? '0' : Math.round(average).toFixed(0)
  }

  get isConsensus(): boolean {
    return [...this.players].every(p => `${p.score}` === this.averageScore)
  }

  static FromJSON(object: any): Room {
    return new Room(object.name,
      object.id,
      object.players ? object.players.map((p: any) => Player.FromJSON(p)) : [],
      object.isHidden ?? false,
      object.durationInSeconds ?? 30,
      object.timerStartTimestamp ?? null,
      object.interruptTimer ?? false)
  }
}
