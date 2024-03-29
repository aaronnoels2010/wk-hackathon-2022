import { acceptHMRUpdate, defineStore } from 'pinia'
import Player from '~/models/Player'
import type Room from '~/models/Room'

export const useSettingsStore = defineStore('settings', () => {
  const _userName = ref<string | undefined>(undefined)
  const _player = ref<Player | undefined>(undefined)
  const _room = ref<Room | undefined>(undefined)

  const player = computed(() => _player)
  const userName = computed(() => _userName)
  const room = computed(() => _room)

  function setUserName(name: string) {
    if (_userName.value && _player?.value)
      _room.value?.removePlayer(_player?.value)

    _userName.value = name
    _player.value = new Player(name)

    if (room.value)
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

    const player = newRoom.players.find(p => p.id === _player.value?.id)
    if (player)
      _player.value = player
    else if (_player.value)
      _room.value.updatePlayer(_player.value)
  }

  function clearRoom() {
    if (_player?.value)
      _player?.value.clearScore()
    _room.value = undefined
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
    player,
    clearRoom,
    setRoom,
    setUserName,
    submitScore,
    clearVotes,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot))
