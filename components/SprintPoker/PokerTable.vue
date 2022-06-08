<script setup lang="ts">
import TableSeat from '~/components/SprintPoker/TableSeat'
</script>

<template>
  <div class="flex">
    <div class="flex flex-col items-center justify-center">
      <TableSeat></TableSeat>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between mx-12">
        <TableSeat></TableSeat>
        <TableSeat></TableSeat>
        <TableSeat></TableSeat>
      </div>
      <div class="m-4 min-w-[380px] h-[140px] bg-gray-300 rounded-full"></div>
      <div class="flex justify-between mx-12">
        <TableSeat></TableSeat>
        <TableSeat></TableSeat>
        <TableSeat></TableSeat>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <TableSeat></TableSeat>
    </div>
  </div>
</template>
