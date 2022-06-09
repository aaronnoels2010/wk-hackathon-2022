<script setup lang="ts">
import BaseCard from '../base/BaseCard'
import CoffeeIcon from '~icons/ant-design/coffee-outlined'
import InfinityIcon from '~icons/akar-icons/infinity'
import QuestionIcon from '~icons/akar-icons/question'
import { useSettingsStore } from '~/stores/settings'
import { writeRoom } from '~/composables/firebase'

const { data } = await useFetch('/api/sprint-poker/points')

const { submitScore, room } = useSettingsStore()

const handleCardClick = (point: string) => {
  submitScore(point)
  writeRoom(room?.value)
}

const color = useColor()
</script>

<template>
  <div class="flex flex-wrap p-4">
    <BaseCard v-for="(point, index) of data.points" :key="index" class="mr-4 mt-4 h-24 w-16 hover:animate-bounce" @click.close="() => handleCardClick(point)">
      <CoffeeIcon v-if="point === 'coffee'" :class="`w-6 h-6 text-${color}-500`" />
      <InfinityIcon v-else-if="point === 'infinity'" :class="`w-6 h-6 text-${color}-500`" />
      <QuestionIcon v-else-if="point === 'unknown'" :class="`w-6 h-6 text-${color}-500`" />
      <span v-else class="text-xl" :class="`text-${color}-500`">{{ point }}</span>
    </BaseCard>
  </div>
</template>
