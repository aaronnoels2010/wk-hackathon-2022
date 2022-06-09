<script setup lang="ts">
import { useNuxtApp } from 'nuxt/app'
import { useSettingsStore } from '~/stores/settings'

const { $pinia } = useNuxtApp()
const { room } = useSettingsStore($pinia)
const color = computed(() => useColorMode())
</script>

<template>
  <div class="px-8 py-4 flex justify-between">
    <NuxtLink to="/" class="flex items-center">
      <img class="w-10 h-10 inline-block" src="/meerkat.png">
      <h3 class="ml-4 font-bold text-2xl">
        <span v-if="room">{{ room.name }}</span>
        <span v-else-if="color.preference === 'dark'">Darky</span>
        <span v-else>Witty</span>
      </h3>
    </NuxtLink>
    <div class="flex justify-center">
      <DarkToggle />
      <ProfileAvatar class="ml-2" />
    </div>
  </div>
</template>
