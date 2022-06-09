<script setup lang="ts">
interface Props {
  retroText?: string
}
const props = withDefaults(defineProps<Props>(), {
  retroText: '',
})
</script>

<template>
  <div class="mt-4 mr-4 p-4 text-gray-800 bg-white bg-opacity-80 max-w-xs rounded-md">
    <p>{{ retroText }}</p>
  </div>
</template>
