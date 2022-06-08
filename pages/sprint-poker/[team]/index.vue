<script setup>
import { onMounted } from 'vue'
import PokerTable from '~/components/SprintPoker/PokerTable'
import PokerTableCards from '~/components/SprintPoker/PokerTableCards'

let socket = null
const route = useRoute()
const ctx = useNuxtApp()
const teamName = route.params.team

const newMember = () => {
  socket.emit('newUserJoined', {
    hello: 'world',
  }, (resp) => {
    // TODO add logic
  })
}

onMounted(() => {
  socket = ctx.$nuxtSocket({
    name: 'main',
    channel: '/index',
    withCredentials: false,
  })
  /* Listen for events: */
  socket
    .on('newUserJoined', (msg, cb) => {
      // TODO add logic
    })
  newMember()
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
