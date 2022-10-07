<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'
import { useSettingsStore } from '~/stores/settings'
import PlusIcon from '~icons/akar-icons/plus'
import MinusIcon from '~icons/akar-icons/minus'

const props = withDefaults(defineProps<Props>(), {
  durationInSeconds: 30,
  isOwner: false,
  interrupt: false,
  timerStartTimestamp: undefined,
})
const emit = defineEmits(['resetTimer', 'startTimer', 'increment', 'decrement'])
interface Props {
  durationInSeconds: number
  timerStartTimestamp: number | undefined
  isOwner: boolean
  interrupt: boolean
}

const color = useColor()
const _localTime = ref(0)
const localTime = computed(() => _localTime.value)
const _timer = ref(0)
const timer = computed(() => _timer.value)
const { player } = useSettingsStore()
let countDownInterval: NodeJS.Timer | undefined

const startTimer = () => {
  if (props.timerStartTimestamp)
    return
  if (player?.value.isOwner)
    emit('startTimer')
}

const stopTimer = () => {
  emit('resetTimer')
}

const setCountdown = () => {
  if (props.timerStartTimestamp && !countDownInterval) {
    countDownInterval = setInterval(() => {
      const newTime = Math.round(((props.timerStartTimestamp + (props.durationInSeconds * 1000)) - Date.now()) / 1000)
      _timer.value = newTime
      if (_timer.value <= 0 || props.interrupt) {
        clearInterval(countDownInterval)
        countDownInterval = undefined
        emit('resetTimer')
      }
    }, 300)
  }
}

const increment = () => {
  if (!props.timerStartTimestamp)
    emit('increment')
}

const decrement = () => {
  if (!props.timerStartTimestamp)
    emit('decrement')
}

onMounted(() => {
  _localTime.value = props.durationInSeconds
  if (!props.timerStartTimestamp)
    _timer.value = props.durationInSeconds
  setCountdown()
})

onUpdated(() => {
  _localTime.value = props.durationInSeconds
  if (!props.timerStartTimestamp)
    _timer.value = props.durationInSeconds
  setCountdown()
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items items-center mb-2">
      <MinusIcon v-if="isOwner && !props.timerStartTimestamp" :class="`mr-4 text-${color}-600`" @click="decrement" />
      <div v-if="isOwner || props.timerStartTimestamp" class="flex items-end" :class="{ 'animate-pulse': timer < 15 && timer !== 0 && timerStartTimestamp }">
        <span :class="`text-4xl text-${color}-600`">{{ Math.trunc((props.timerStartTimestamp ? timer : localTime) / 60).toLocaleString('nl-BE', { minimumIntegerDigits: 2 }) }}</span>
        <span class="text-2xl text-slate-600 dark:text-slate-300">:{{ ((props.timerStartTimestamp ? timer : localTime) % 60).toLocaleString('nl-BE', { minimumIntegerDigits: 2 }) }}</span>
      </div>
      <PlusIcon v-if="isOwner && !props.timerStartTimestamp" :class="`ml-4 text-${color}-600`" @click="increment" />
    </div>
    <div v-if="isOwner">
      <BaseButton v-if="!props.timerStartTimestamp" @mousedown.stop="startTimer">
        Start
      </BaseButton>
      <BaseButton v-else @mousedown.stop="stopTimer">
        Stop
      </BaseButton>
    </div>
  </div>
</template>
