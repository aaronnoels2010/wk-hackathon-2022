<script setup lang="ts">
interface Props {
  name?: string
  score?: number
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  score: undefined,
})
</script>

<template>
  <div class="flex flex-col items-center">
    <span v-if="reverse">{{ name }}</span>
    <div class="w-[60px] h-[60px] bg-gray-200 dark:bg-gray-700 rounded-full flex justify-center items-center">
      <h4 v-if="score" class="text-3xl dark:text-white">
        {{ score }}
      </h4>
    </div>
    <span v-if="!reverse">{{ name }}</span>
  </div>
</template>
