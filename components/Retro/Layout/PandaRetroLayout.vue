<script setup lang="ts">
const { data } = useFetch('/api/retro/boards')
</script>

<template>
  <div class="grid overflow-hidden sm:grid-cols-1 md:grid-cols-2 sm:grid-rows-4 md:grid-rows-2 w-full px-4">
    <RetroZone :messages="data.boards[0].cards" zone-title="Wore me out?" class="flex-grow bg-[url('/assets/img/retro/panda-sleepy.png')] bg-[#C1EDFA] bg-no-repeat bg-center rounded-md" />
    <RetroZone :messages="data.boards[1].cards" zone-title="Made me grow?" class="flex-grow bg-[url('/assets/img/retro/panda-grow.png')] bg-[#C1EDFA] bg-no-repeat bg-center rounded-md" />
    <RetroZone :messages="data.boards[2].cards" zone-title="Gave me new ideas?" class="flex-grow bg-[url('/assets/img/retro/panda-ideas.png')] bg-[#C1EDFA] bg-no-repeat bg-center rounded-md" />
    <RetroZone :messages="data.boards[3].cards" zone-title="Did I learn?" class="flex-grow bg-[url('/assets/img/retro/panda-learn.png')] bg-[#C1EDFA] bg-no-repeat bg-center rounded-md" />
  </div>
</template>
