<script setup lang="ts">
interface Props {
  name: string
  score: number
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  score: null,
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div :class="{ 'bg-gray-300': score, 'bg-gray-100': !score }" class=" dark:bg-gray-700 w-[60px] h-[60px] rounded-full flex justify-center items-center">
      <h4 v-if="score" class="text-3xl dark:text-white">
        {{ score }}
      </h4>
    </div>
    <span>{{ name }}</span>
  </div>
</template>
