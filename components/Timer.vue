<script setup lang="ts">
import BaseButton from '~/components/base/BaseButton.vue'
import PlusIcon from '~icons/akar-icons/plus'
import MinusIcon from '~icons/akar-icons/minus'

const inSeconds = ref(0)
const isStarted = ref(false)
const color = useColor()

const startTimer = () => {
  if (isStarted.value)
    return
  isStarted.value = true
  const countDownInterval = setInterval(() => {
    inSeconds.value--
    if (inSeconds.value === 0) {
      clearInterval(countDownInterval)
      isStarted.value = false
    }
  }, 1000)
}

let incrementInterval: any
let decrementInterval: any
const incrementMouseDown = () => {
  if (isStarted.value)
    return
  inSeconds.value += 1
  incrementInterval = setInterval(() => {
    inSeconds.value += 1
  }, 100)
}
const incrementMouseUp = () => {
  if (isStarted.value || !incrementInterval)
    return
  clearInterval(incrementInterval)
}

const decrementMouseDown = () => {
  if (isStarted.value)
    return
  inSeconds.value -= 1
  decrementInterval = setInterval(() => {
    inSeconds.value -= 1
  }, 100)
}

const decrementMouseUp = () => {
  if (isStarted.value)
    return
  clearInterval(decrementInterval)
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items items-center">
      <MinusIcon :class="`mr-4 text-${color}-600`" @mousedown.stop="decrementMouseDown" @mouseup.stop="decrementMouseUp" />
      <div class="flex items-end" :class="{ 'animate-pulse': inSeconds < 15 && inSeconds !== 0 && isStarted}">
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
