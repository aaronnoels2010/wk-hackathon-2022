<script setup>
import CoffeeIcon from '~icons/ant-design/coffee-outlined'
import InfinityIcon from '~icons/akar-icons/infinity'
import QuestionIcon from '~icons/akar-icons/question'
const { data } = await useFetch('/api/sprint-poker/points')

const color = useColor()
</script>

<template>
  <div class="flex flex-wrap p-4">
    <div v-for="(point, index) of data.points" :key="index" class="mr-4 mt-4 glass-container h-24 w-16 flex flex-wrap justify-center items-center hover:animate-bounce cursor-pointer">
      <CoffeeIcon v-if="point === 'coffee'" :class="`w-6 h-6 text-${color}-500`" />
      <InfinityIcon v-else-if="point === 'infinity'" :class="`w-6 h-6 text-${color}-500`" />
      <QuestionIcon v-else-if="point === 'unknown'" :class="`w-6 h-6 text-${color}-500`" />
      <span v-else class="text-xl" :class="`text-${color}-500`">{{ point }}</span>
    </div>
  </div>
</template>

<style>
.glass-container {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.40);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
