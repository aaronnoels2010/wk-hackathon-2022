<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { onMounted, onUnmounted } from 'vue'
import BaseButton from '~/components/base/BaseButton'
import Timer from '~/components/Timer.vue'
import { getRoom, writeRoom } from '~/composables/firebase'
import PokerTable from '~/components/SprintPoker/PokerTable'
import PokerTableCards from '~/components/SprintPoker/PokerTableCards'
import { useSettingsStore } from '~/stores/settings'
import { useModalStore } from '~/stores/modal'

const route = useRoute()
const { setStateProfileModal } = useModalStore()
const { userName, player, room, setRoom, clearVotes, clearRoom } = useSettingsStore()

const roomId = route.params.room

let unSubscribeFromRoomUpdates = () => {}
onMounted(() => {
  if (!userName.value)
    setStateProfileModal(true)

  unSubscribeFromRoomUpdates = getRoom(roomId, (room) => {
    setRoom(room)
  })
})

onUnmounted(() => {
  room?.value.removePlayer(player.value)
  writeRoom(room?.value)
  clearRoom()
  unSubscribeFromRoomUpdates()
})

const handleClick = () => {
  if (!room?.value.timerIsStarted) {
    clearVotes()
    writeRoom(room?.value)
  }
}

const toggleCardsVisibility = () => {
  if (!room?.value.timerIsStarted) {
    room?.value.toggleHidden()
    writeRoom(room?.value)
  }
}

const handleNextTick = () => {
  const wasAlreadyStarted = room?.value.timerIsStarted
  room?.value.nextTick()
  if (!wasAlreadyStarted || room?.value.timeInSecondsLeft % 5 === 0)
    writeRoom(room?.value)
}

const handleResetTimer = () => {
  room?.value.resetTimer()
  writeRoom(room?.value)
}

const decrementTimer = () => {
  room?.value.decrementTimer()
  writeRoom(room?.value)
}

const incrementTimer = () => {
  room?.value.incrementTimer()
  writeRoom(room?.value)
}
</script>

<template>
  <div class="flex flex-col" v-if="room">
    <div class="flex flex-col flex-grow justify-center items-center">
      <PokerTable :room="room" />
    </div>
    <div class="flex justify-center items-center">
      <BaseButton @click.stop="handleClick">Stemmen Resetten</BaseButton>
      <Timer class="mx-8" :is-started="room.timerIsStarted" :in-seconds="room.timeInSecondsLeft"
             @next-tick="handleNextTick" @reset-timer="handleResetTimer"
              @increment="incrementTimer" @decrement="decrementTimer"></Timer>
      <BaseButton @click.stop="toggleCardsVisibility">
        <span v-if="room.isHidden">Zichtbaar maken</span>
        <span v-else>Verstoppen</span>
      </BaseButton>
    </div>
    <div class="pb-8">
      <PokerTableCards />
    </div>
  </div>
</template>
