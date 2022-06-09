import { acceptHMRUpdate, defineStore } from 'pinia'
import Player from '~/models/Player'
import type Room from '~/models/Room'

export const useSettingsStore = defineStore('settings', () => {
  const _userName = ref<string | undefined>(undefined)
  const _player = ref<Player | undefined>(undefined)
  const _room = ref<Room | undefined>(undefined)

  const userName = computed(() => _userName)
  const room = computed(() => _room)

  function setUserName(name: string) {
    _userName.value = name
    _player.value = new Player(name)
    _room.value?.addPlayer(_player.value)
  }

  function submitScore(score: string) {
    if (!_player.value)
      return
    _player.value.score = score
    _room.value?.updatePlayer(_player.value)
  }

  function setRoom(newRoom: Room) {
    _room.value = newRoom
  }

  function clearVotes() {
    _room.value?.players.forEach((p) => {
      p.clearScore()
      _room.value?.updatePlayer(p)
    })
  }

  return {
    userName,
    room,
    setRoom,
    setUserName,
    submitScore,
    clearVotes,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot))
