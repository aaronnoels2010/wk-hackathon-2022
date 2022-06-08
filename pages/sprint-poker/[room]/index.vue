<script setup>
import { useRoute } from 'nuxt/app'
import { onMounted } from 'vue'
import { getRoom } from '~/composables/firebase'
import PokerTable from '~/components/SprintPoker/PokerTable'
import PokerTableCards from '~/components/SprintPoker/PokerTableCards'
import { useSprintPokerRoom } from '~/composables/sprint-poker'

const route = useRoute()
const roomId = route.params.room

const sprintPokerRoom = useSprintPokerRoom()

onMounted(() => {
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
