<script setup lang="ts">
import type Room from '../../models/Room'
import TableSeat from './TableSeat'

interface Props {
  room: Room | undefined
}

const props = withDefaults(defineProps<Props>(), {
  room: undefined,
})
</script>

<template>
  <div v-if="room" class="flex">
    <div class="flex flex-col items-center justify-center">
      <TableSeat v-if="room.players && room.players.length > 0" :player="room.players[0]" />
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between mx-12">
        <TableSeat v-if="room.players && room.players.length > 1" :player="room.players[1]" />
        <TableSeat v-if="room.players && room.players.length > 2" :player="room.players[2]" />
        <TableSeat v-if="room.players && room.players.length > 3" :player="room.players[3]" />
      </div>
      <div class="m-4 min-w-[380px] h-[140px] bg-gray-200 dark:bg-gray-700 rounded-full" />
      <div class="flex justify-between mx-12">
        <TableSeat v-if="room.players && room.players.length > 4" :player="room.players[4]" />
        <TableSeat v-if="room.players && room.players.length > 5" :player="room.players[5]" />
        <TableSeat v-if="room.players && room.players.length > 6" :player="room.players[6]" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <TableSeat v-if="room.players && room.players.length > 7" :player="room.players[7]" />
    </div>
  </div>
</template>
