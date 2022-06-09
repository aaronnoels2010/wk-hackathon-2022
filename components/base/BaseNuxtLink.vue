<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { useColor } from '../../composables/settings';

const props = defineProps<{ to: RouteLocationRaw }>()
const color = useColor()
</script>

<template>
  <NuxtLink
    :to="props.to"
    :class="`
      inline-flex
      items-center
      px-4
      py-2
      border
      border-gray-300
      shadow-sm
      text-sm
      font-medium
      rounded-md
      text-gray-700
      bg-white
      hover:bg-gray-50
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-${color}-500
    `"
  >
    <slot />
  </NuxtLink>
</template>
