<script setup lang="ts">
import HeroiconsOutlineHome from '~icons/heroicons-outline/home'
</script>

<template>
  <div class="px-8 py-4 flex justify-between">
    <NuxtLink to="/" class="flex items-center">
      <img class="w-10 h-10 inline-block" src="/meerkat.png">
      <h3 class="ml-4 font-bold text-2xl">
        Witty
      </h3>
    </NuxtLink>
    <div class="flex justify-center">
      <DarkToggle />
      <ProfileAvatar class="ml-2" />
    </div>
  </div>
</template>
