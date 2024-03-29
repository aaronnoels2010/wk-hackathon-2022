<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import JSConfetti from 'js-confetti'
import { deleteRoom, getRoom, writeRoom } from '~/composables/firebase'
import { useSettingsStore } from '~/stores/settings'
import { useModalStore } from '~/stores/modal'

import BaseButton from '~/components/base/BaseButton'
import Timer from '~/components/SprintPoker/Timer.vue'
import PokerTable from '~/components/SprintPoker/PokerTable'
import PokerTableCards from '~/components/SprintPoker/PokerTableCards'

const route = useRoute()
const router = useRouter()
const { setStateProfileModal } = useModalStore()
const { userName, player, room, setRoom, clearVotes, clearRoom } = useSettingsStore()

const roomId = route.params.room

let unSubscribeFromRoomUpdates = () => {}

const clearPlayerFromRoom = async () => {
  const roomCouldBeDeleted = room?.value.removePlayer(player.value)
  await writeRoom(room?.value)
  clearRoom()
  unSubscribeFromRoomUpdates()
  if (room?.value && roomCouldBeDeleted)
    await deleteRoom(room?.value.id)
}

const callbackOnEmptyUserName = () => {
  if (!userName.value)
    router.push('/')
}

onMounted(() => {
  if (!userName?.value)
    setStateProfileModal(true, callbackOnEmptyUserName)

  unSubscribeFromRoomUpdates = getRoom(roomId, (room) => {
    setRoom(room)
  })

  window.addEventListener('beforeunload', () => {
    clearPlayerFromRoom()
  })
})

onUnmounted(() => {
  clearPlayerFromRoom()
})

const handleClick = () => {
  if (!room?.value.timerIsStarted) {
    clearVotes()
    writeRoom(room?.value)
  }
}

const showConfetti = () => {
  if (room?.value.isConsensus && !room?.value.isHidden) {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      confettiRadius: 6,
      confettiNumber: 300,
    })
  }
}

const toggleCardsVisibility = () => {
  room?.value.toggleIsHidden()
  if (!room?.value.isHidden && room?.value.timerStartTimestamp) {
    room?.value.interruptTheTimer()
    return
  }

  showConfetti()
  writeRoom(room?.value)
}

const handleResetTimer = () => {
  if (room && room.value && room?.value.timerStartTimestamp && player?.value.isOwner) {
    room.value.isHidden = false
    room?.value.resetTimer()
    writeRoom(room?.value)
  }
  showConfetti()
}

const handleStartTimer = () => {
  if (room && room.value) {
    room.value.isHidden = true
    room?.value.startTimer()
  }
  clearVotes()
  writeRoom(room?.value)
}

const incrementTimer = () => {
  if (room && room.value && player?.value.isOwner)
    room.value.durationInSeconds += 1
}

const decrementTimer = () => {
  if (room && room.value && player?.value.isOwner)
    room.value.durationInSeconds -= 1
}
</script>

<template>
  <div v-if="room" class="flex flex-col">
    <div class="flex flex-col flex-grow justify-center items-center">
      <PokerTable :room="room" />
    </div>
    <div v-if="player" class="flex justify-center items-center">
      <BaseButton v-if="player.isOwner && !room.timerStartTimestamp" class="min-w-[160px]" @click.stop="handleClick">
        Stemmen Resetten
      </BaseButton>
      <Timer
        class="mx-8"
        :duration-in-seconds="room.durationInSeconds"
        :timer-start-timestamp="room.timerStartTimestamp"
        :is-owner="player.isOwner"
        :interrupt="room.interruptTimer"
        @increment="incrementTimer"
        @decrement="decrementTimer"
        @reset-timer="handleResetTimer"
        @start-timer="handleStartTimer"
      />
      <BaseButton v-if="player.isOwner && !room.timerStartTimestamp" class="min-w-[160px]" @click.stop="toggleCardsVisibility">
        <span v-if="room.isHidden">Zichtbaar maken</span>
        <span v-else>Verstoppen</span>
      </BaseButton>
    </div>
    <div class="mt-4 mb-8">
      <PokerTableCards />
    </div>
  </div>
</template>
