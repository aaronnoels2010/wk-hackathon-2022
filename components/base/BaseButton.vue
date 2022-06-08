<script setup lang="ts">
import { useColor } from '~/composables/settings'
interface Props {
  color?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: '',
})

const color = props.color ? props.color : useColor()
</script>

<template>
  <button
    :class="`
      inline-flex
      items-center
      px-4
      py-2
      border
      border-transparent
      text-sm
      font-medium
      rounded-md
      shadow-sm
      text-white
      bg-${color}-600
      hover:bg-${color}-700
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-${color}-500
    `"
  >
    <slot />
  </button>
</template>
