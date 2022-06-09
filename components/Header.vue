<script setup lang="ts">
import { useSettingsStore } from '../stores/settings'

const { room } = useSettingsStore()
const color = computed(() => useColorMode())
</script>

<template>
  <div class="px-8 py-4 flex justify-between">
    <NuxtLink to="/" class="flex items-center">
      <img class="w-8 h-8 inline-block" src="/meerkat.png">
      <h3 class="ml-4 font-bold text-2xl">
        <span v-if="room">{{ room.name }}</span>
        <span v-else-if="color.preference === 'dark'">Blacky Board</span>
        <span v-else>Witty Board</span>
      </h3>
    </NuxtLink>
    <div class="flex justify-center">
      <DarkToggle />
      <ProfileAvatar class="ml-2" />
    </div>
  </div>
</template>
