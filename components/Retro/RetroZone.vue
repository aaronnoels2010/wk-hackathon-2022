<script setup lang="ts">
import BaseButton from '~/components/base/BaseButton.vue'
import PlusIcon from '~icons/akar-icons/plus'



const color = useColor()
</script>

<template>
  <div :class="`flex flex-col flex-grow border-dotted border-2 border-${color}-600 m-4`">
    <div class="flex flex-wrap flex-grow">

    </div>
    <div class="flex justify-end">
      <div class="mb-2 mr-2">
        <BaseButton><PlusIcon></PlusIcon></BaseButton>
      </div>
    </div>
  </div>
</template>
