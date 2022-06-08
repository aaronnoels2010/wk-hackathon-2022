<script setup lang="ts">
import HeroiconsOutlineHome from '~icons/heroicons-outline/home'
</script>

<template>
  <div class="px-8 py-4 flex justify-between">
    <div>
      <NuxtLink to="/">
        <HeroiconsOutlineHome
          class="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>
    <div class="text-gray-600 dark:text-white">
      <span class="text-2xl">Witty</span>
      <span class="text-yellow-600" />
    </div>
    <div class="flex justify-center">
      <DarkToggle />
      <ProfileAvatar class="ml-2" />
    </div>
  </div>
</template>
