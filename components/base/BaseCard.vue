<script setup>
import { useColor } from '~/composables/settings'

const color = useColor()
</script>

<template>
  <div
    :class="`
      flex
      flex-col
      p-4
      rounded-md
      shadow-lg
      border-2
      border-${color}-500
      text-gray-600
      hover:border-${color}-600
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-${color}-600
      dark:text-white
      min-w-[320px]
      max-w-xl
    `"
  >
    <slot />
  </div>
</template>
