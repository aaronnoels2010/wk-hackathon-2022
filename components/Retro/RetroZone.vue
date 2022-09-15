<script setup lang="ts">
import { Ref } from 'vue';
import InputModal from '~/components/Modal/InputModal.vue';
import RetroCard from './RetroCard.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import PlusIcon from '~icons/akar-icons/plus'

const props = withDefaults(defineProps<Props>(), {
  messages: new Array<string>(),
  zoneTitle: '',
  showModal: false,
})

interface Props {
  messages: string[]
  zoneTitle?: string
  showModal?: boolean
}

const openAddRetroMessageModal: Ref<boolean> = ref(false)

const updateOpenAddCardDialog = (state: boolean) => {
  openAddRetroMessageModal.value = state
}

const handleSave = (message: string) => {
  updateOpenAddCardDialog(false)
}
</script>

<template>
  <div class="flex flex-col flex-grow m-4 p-4">
    <h3 v-if="zoneTitle" class="text-xl text-gray-800">
      {{ zoneTitle }}
    </h3>
    <div class="flex flex-wrap flex-shrink items-start">
      <div v-for="(message, index) of messages" :key="index">
        <RetroCard :retro-text="message" />
      </div>
    </div>

    <div class="flex flex-grow justify-end items-end">
      <BaseButton @click="() => updateOpenAddCardDialog(true)">
        <PlusIcon />
      </BaseButton>
    </div>
    <InputModal :is-open="openAddRetroMessageModal" title="Retro" placeholder="Message here ..." @close="() => updateOpenAddCardDialog(false)" @save="handleSave" />
  </div>
</template>
