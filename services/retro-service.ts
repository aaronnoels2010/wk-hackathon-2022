import type Message from '~/models/Message'
import type RetroZoneModel from '~/models/RetroZoneModel'

class RetroService {
  constructor(public retroZones: RetroZoneModel[]) {
  }

  addRetroZones(retroZone: RetroZoneModel) {
    this.retroZones.push(retroZone)
  }

  addMessage(index: number, message: Message) {
    this.retroZones[index].messages.push(message)
  }

  clear() {
    this.retroZones = []
  }
}

const newRetroService = new RetroService([])

export default newRetroService
