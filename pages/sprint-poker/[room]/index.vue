<script setup>
import { useRoute } from 'nuxt/app'
import { onMounted } from 'vue'
import BaseButton from '../../../components/base/BaseButton'
import { getRoom, writeRoom } from '~/composables/firebase'
import PokerTable from '~/components/SprintPoker/PokerTable'
import PokerTableCards from '~/components/SprintPoker/PokerTableCards'
import { useSettingsStore } from '~/stores/settings.ts'
import { useModalStore } from '~/stores/modal'

const { $pinia } = useNuxtApp()
const route = useRoute()
const { setStateProfileModal } = useModalStore($pinia)
const { userName, room, setRoom, clearVotes } = useSettingsStore($pinia)

const roomId = route.params.room

onMounted(() => {
  if (!userName.value)
    setStateProfileModal(true)

  getRoom(roomId, (room) => {
    setRoom(room)
  })
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
