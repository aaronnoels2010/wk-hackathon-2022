<script setup lang="ts">
import TableSeat from '~/components/SprintPoker/TableSeat'

const users = [
  { name: 'Tibeau', score: 5 },
  { name: 'Aaron', score: 5 },
  { name: 'Niels', score: 8 },
  { name: 'Bart', score: 21 },
  { name: 'Jordy', score: 8 },
]
</script>

<template>
  <div class="flex">
    <div class="flex flex-col items-center justify-center">
      <TableSeat :name="users[0].name" :score="users[0].score" />
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between mx-12">
        <TableSeat :name="users[1].name" :score="users[1].score" />
        <TableSeat :name="users[2].name" :score="users[2].score" />
        <TableSeat :name="users[3].name" :score="users[3].score" />
      </div>
      <div class="m-4 min-w-[380px] h-[140px] bg-gray-300 dark:bg-gray-700 rounded-full" />
      <div class="flex justify-between mx-12">
        <TableSeat :name="users[4].name" :score="users[4].score" />
        <TableSeat />
        <TableSeat />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <TableSeat />
    </div>
  </div>
</template>
