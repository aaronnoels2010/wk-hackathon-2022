<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { onMounted, onUnmounted } from 'vue'
import BaseButton from '~/components/base/BaseButton'
import { getRoom, writeRoom } from '~/composables/firebase'
import PokerTable from '~/components/SprintPoker/PokerTable'
import PokerTableCards from '~/components/SprintPoker/PokerTableCards'
import { useSettingsStore } from '~/stores/settings'
import { useModalStore } from '~/stores/modal'

const { $pinia } = useNuxtApp()
const route = useRoute()
const { setStateProfileModal } = useModalStore($pinia)
const { userName, player, room, setRoom, clearVotes, clearRoom } = useSettingsStore($pinia)

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
  clearVotes()
  writeRoom(room?.value)
}

const toggleCardsVisibility = () => {
  room?.value.toggleHidden()
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
      <BaseButton class="ml-4" @click.stop="toggleCardsVisibility">
        <span v-if="room.isHidden">Zichtbaar maken</span>
        <span v-else>Verstoppen</span>
      </BaseButton>
    </div>
    <div class="pb-8">
      <PokerTableCards />
    </div>
  </div>
</template>
