<script setup lang="ts">
import { useColor } from '~/composables/settings'
interface Props {
  color?: string
  modelValue: string
}
const props = withDefaults(defineProps<Props>(), {
  color: '',
  modelValue: '',
})

const emit = defineEmits(['update:modelValue'])
const input = ref<HTMLElement>()

function updateModalValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const color = props.color ? props.color : useColor()
</script>

<template>
  <input
    ref="input"
    :class="`
    block w-full max-w-xs mx-auto shadow-sm border-gray-300 focus:ring-${color}-500 focus:border-${color}-500 sm:text-sm rounded-md text-gray-700`"
    :value="props.modelValue"
    @input="updateModalValue"
  >
</template>
