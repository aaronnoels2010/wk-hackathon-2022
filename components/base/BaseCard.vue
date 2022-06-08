<script setup>
import { useColor } from '~/composables/settings'

const color = useColor()
</script>

<template>
  <div
    :class="`
      p-4
      glass-container mr-4 mt-4 glass-container flex flex-wrap justify-center
      items-center cursor-pointer shadow-lg rounded-md border border-opacity-20 text-gray-600 dark:text-gray-300
    `"
  >
    <slot />
  </div>
</template>
