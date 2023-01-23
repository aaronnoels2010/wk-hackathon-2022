<script setup lang="ts">
import { useColor } from '../../composables/settings'

const color = useColor()
</script>

<template>
  <div
    class="
      p-4 m-2 glass-containerglass-container flex flex-wrap justify-center
      items-center cursor-pointer shadow-lg rounded-md border border-opacity-20 text-gray-600 dark:text-gray-300
    "
  >
    <slot />
  </div>
</template>
