<script setup lang="ts">
import RetroCard from './RetroCard.vue'
import { useModalStore } from '~/stores/modal'
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
const { openAddCardModal, setStateAddCardModal } = useModalStore()

const updateOpenAddCardDialog = (state: boolean) => {
  setStateAddCardModal(state)
}

const handleSave = () => {
  updateOpenAddCardDialog(false)
}
</script>

<template>
  <div class="flex flex-col flex-grow m-4 p-4">
    <h3 v-if="zoneTitle" class="text-xl text-gray-800">
      {{ zoneTitle }}
    </h3>
    <div class="flex flex-wrap flex-grow items-start">
      <div v-for="(message, index) of messages" :key="index">
        <RetroCard :retro-text="message" />
      </div>
    </div>

    <div class="flex justify-end">
      <BaseButton @click="() => updateOpenAddCardDialog(true)">
        <PlusIcon />
      </BaseButton>
    </div>

    <div v-if="openAddCardModal" class="relative z-50">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <div class="p-4 w-full max-w-sm rounded-2xl bg-white dark:bg-gray-800">
          <h3 class="text-3xl mb-4 text-center text-slate-600 dark:text-slate-300">
            Message
          </h3>

          <textarea
            id="message"
            rows="4"
            class="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Your message..."
          />

          <div class="flex justify-end mt-4">
            <BaseOutlineButton color="red" class="disabled:cursor-not-allowed mr-4" @click="updateOpenAddCardDialog(false)">
              Cancel
            </BaseOutlineButton>
            <BaseButton color="green" class="disabled:cursor-not-allowed">
              Add
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
