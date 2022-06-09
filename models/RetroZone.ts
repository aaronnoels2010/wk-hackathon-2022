export default class RetroZone {
  index: number
  cards: string[]

  constructor(index: number, cards: string[]) {
    this.index = index ?? 0
    this.cards = cards
  }

  clearCards() {
    this.cards = []
  }
}
