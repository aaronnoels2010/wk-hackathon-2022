<script setup lang="ts">
import { useModalStore } from '../stores/modal'
import { useSettingsStore } from '../stores/settings'
import RetroCard from './RetroCard.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import PlusIcon from '~icons/akar-icons/plus'

interface Props {
  zoneTitle?: string
  showModal: boolean
}
const props = withDefaults(defineProps<Props>(), {
  zoneTitle: '',
  showModal: false,
})

function showAddCardModal(value: boolean) {
  showModal = value
}
</script>

<template>
  <div class="flex flex-col flex-grow m-4 p-4">
    <h3 v-if="zoneTitle" class="text-xl text-gray-800">
      {{ zoneTitle }}
    </h3>
    <div class="flex flex-wrap flex-grow items-start">
      <RetroCard retro-text="Ik vond het heel fijn" />
      <RetroCard retro-text="Ik vond het helemaal niet leuk" />
      <RetroCard retro-text="blablablablablabla" />
      <RetroCard retro-text="blablablab lab la blabla blablab lablablablabl blablablablabla" />
      <RetroCard retro-text="blablablab lab la blabla blablab lablablablabl blablablablabla" />
      <RetroCard retro-text="blablablablablabla" />
      <RetroCard retro-text="blablablablablabla" />
    </div>

    <div class="flex justify-end">
      <BaseButton @click="() => showAddCardModal(true)">
        <PlusIcon />
      </BaseButton>
    </div>

    <div v-if="showModal" class="relative z-50" @click="() => showAddCardModal(false)">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <div class="p-4 w-full max-w-sm rounded-2xl bg-white dark:bg-gray-800">
          <h3 class="text-3xl mb-4 text-center text-slate-600 dark:text-slate-300">
            User
          </h3>

          <BaseInput
            id="input"
            color="gray"
            class="text-center"
            placeholder="Username"
            type="text"
            autocomplete="false"
          />

          <div class="flex justify-end mt-4">
            <BaseOutlineButton color="red" class="disabled:cursor-not-allowed mr-4" @click="showAddCardModal(false)">
              Cancel
            </BaseOutlineButton>
            <BaseButton color="green" class="disabled:cursor-not-allowed">
              Save
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

