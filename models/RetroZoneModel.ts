import type Message from '~/models/Message'

export default class RetroZoneModel {
  constructor(public messages: Array<Message>, public title: string, public image: string | undefined = undefined) {

  }
}
