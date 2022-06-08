<script setup lang="ts">
interface Props {
  name: string
  score: number
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  score: undefined,
})
</script>

<template>
  <div>
    <div class="min-w-[60px] h-[60px] bg-gray-300 rounded-full">
      <span v-if="score">{{ score }}</span>
    </div>
    <span>{{ name }}</span>
  </div>
</template>
