<script setup>
import { useRoute } from 'nuxt/app'
import { onMounted, onUpdated } from 'vue'
import { getRoom } from '~/composables/firebase'
import PokerTable from '~/components/SprintPoker/PokerTable'
import PokerTableCards from '~/components/SprintPoker/PokerTableCards'
import { useSprintPokerRoom } from '~/composables/sprint-poker'
import { useSettingsStore } from '~/stores/settings'
import { useModalStore } from '~/stores/modal'

const { $pinia } = useNuxtApp()
const route = useRoute()
const sprintPokerRoom = useSprintPokerRoom()
const { setStateProfileModal } = useModalStore($pinia)
const { userName } = useSettingsStore($pinia)

const roomId = route.params.room

onMounted(() => {
  if (!userName.value)
    setStateProfileModal(true)

  getRoom(roomId, (room) => {
    sprintPokerRoom.value = room
  })
})
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col flex-grow justify-center items-center">
      <PokerTable />
    </div>
    <div class="pb-8">
      <PokerTableCards />
    </div>
  </div>
</template>
