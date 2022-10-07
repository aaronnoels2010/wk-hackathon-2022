<script setup lang="ts">
import { useColor } from '../../composables/settings'
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
      justify-center
      items-center
      text-center
      px-4
      py-2
      border
      border-transparent
      text-sm
      font-medium
      rounded-md
      shadow-sm
      text-white
      bg-${color}-500
      hover:bg-${color}-600
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-${color}-600
    `"
  >
    <slot />
  </button>
</template>
