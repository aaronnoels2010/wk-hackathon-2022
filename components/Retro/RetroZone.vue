<script setup lang="ts">
import BaseButton from '~/components/base/BaseButton.vue'
import PlusIcon from '~icons/akar-icons/plus'

interface Props {
  zoneTitle?: string
}
const props = withDefaults(defineProps<Props>(), {
  zoneTitle: '',
})

const color = useColor()
</script>

<template>
  <div class="flex flex-col flex-grow m-4 p-4">
    <h3 v-if="zoneTitle" class="text-xl text-gray-800">
      {{ zoneTitle }}
    </h3>
    <div class="flex flex-wrap flex-grow" />
    <div class="flex justify-end">
      <div class="mb-2 mr-2">
        <BaseButton><PlusIcon /></BaseButton>
      </div>
    </div>
  </div>
</template>
