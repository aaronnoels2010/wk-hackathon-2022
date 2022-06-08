<script setup lang="ts">
const { data } = useFetch('/api/retro/layouts')
</script>

<template>
  <div class="flex flex-grow">
    <Head>
      <Title>Retro</Title>
    </Head>
    <div class="flex flex-grow justify-center items-center">
      <div class="mr-8 mt-4 glass-container h-48 w-32 flex flex-wrap justify-center items-center hover:animate-bounce cursor-pointer" v-for="(layout, index) in data.layouts" :key="index">
        <img v-if="layout === 'panda'" src="~/assets/img/retro/panda.svg">
        <img v-else-if="layout === 'star-wars'" src="~/assets/img/retro/star-wars.jpg">
        <img v-else-if="layout === 'elvis'" src="~/assets/img/retro/elvis.png">
        <img v-else-if="layout === 'the-island'" src="~/assets/img/retro/eiland.jpeg">
      </div>
    </div>
  </div>
</template>

<style>
.glass-container {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
