<script setup lang="ts">
import { onUpdated } from 'vue'
import BaseButton from '../components/base/BaseButton.vue'
import PlusIcon from '~icons/akar-icons/plus'
import MinusIcon from '~icons/akar-icons/minus'
const props = withDefaults(defineProps<Props>(), {
  isStarted: false,
  inSeconds: 30,
})

const emit = defineEmits(['nextTick', 'resetTimer', 'increment', 'decrement'])

interface Props {
  isStarted: boolean
  inSeconds: number
}

const color = useColor()

const startTimer = () => {
  if (props.isStarted)
    return

  const countDownInterval = setInterval(() => {
    emit('nextTick', props.inSeconds)
    if (props.inSeconds === 0) {
      clearInterval(countDownInterval)
      emit('resetTimer')
    }
  }, 1000)
}

let incrementInterval: any
let decrementInterval: any
const incrementMouseDown = () => {
  if (props.isStarted)
    return
  emit('increment')
  incrementInterval = setInterval(() => {
    emit('increment')
  }, 100)
}
const incrementMouseUp = () => {
  if (props.isStarted || !incrementInterval)
    return
  clearInterval(incrementInterval)
}

const decrementMouseDown = () => {
  if (props.isStarted)
    return
  emit('decrement')
  decrementInterval = setInterval(() => {
    emit('decrement')
  }, 100)
}
const decrementMouseUp = () => {
  if (props.isStarted)
    return
  clearInterval(decrementInterval)
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items items-center">
      <MinusIcon :class="`mr-4 text-${color}-600`" @mousedown.stop="decrementMouseDown" @mouseup.stop="decrementMouseUp" />
      <div class="flex items-end" :class="{ 'animate-pulse': inSeconds < 15 && inSeconds !== 0 && isStarted }">
        <span :class="`text-4xl text-${color}-600`">{{ Math.trunc(inSeconds / 60).toLocaleString('nl-BE', { minimumIntegerDigits: 2 }) }}</span>
        <span class="text-2xl text-slate-600 dark:text-slate-300">:{{ (inSeconds % 60).toLocaleString('nl-BE', { minimumIntegerDigits: 2 }) }}</span>
      </div>
      <PlusIcon :class="`ml-4 text-${color}-600`" @mousedown.stop="incrementMouseDown" @mouseup.stop="incrementMouseUp" />
    </div>
    <div class="mt-2">
      <BaseButton @mousedown.stop="startTimer">
        Start
      </BaseButton>
    </div>
  </div>
</template>
