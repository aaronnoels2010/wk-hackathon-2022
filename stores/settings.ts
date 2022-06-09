import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import Player from '~/models/Player'
import type Room from '~/models/Room'

export const useSettingsStore = defineStore('settings', () => {
  const userName = ref<string | undefined>(undefined)
  const player = ref<Player | undefined>(undefined)
  const room = ref<Room | undefined>(undefined)

  function setUserName(name: string) {
    userName.value = name
    player.value = new Player(name)
    room.value?.addPlayer(player.value)
  }

  function setRoom(newRoom: Room) {
    room.value = newRoom
  }

  return {
    room,
    userName,
    player,
    setRoom,
    setUserName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot))
