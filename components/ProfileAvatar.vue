<script setup lang="ts">
import { writeRoom } from '~/composables/firebase'
import { useModalStore } from '~/stores/modal'
import { useSettingsStore } from '~/stores/settings'

import InputModal from '~/components/Modal/InputModal.vue'
import HeroiconsOutlineUser from '~icons/heroicons-outline/user'

const { userName, room, setUserName } = useSettingsStore()
const { openProfileModal, callbackOnCancel, setStateProfileModal } = useModalStore()

const handleClose = () => {
  setStateProfileModal(false, callbackOnCancel?.callback)
  callbackOnCancel?.callback()
}

const handleSave = (value: string) => {
  if (!value)
    return

  setStateProfileModal(false)
  setUserName(value)
  if (room?.value)
    writeRoom(room?.value)
}
</script>

<template>
  <div class="flex justify-center items-center">
    <button
      v-if="!userName"
      class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
      @click="() => setStateProfileModal(true)"
    >
      <HeroiconsOutlineUser class="w-6 h-6" />
    </button>
    <span v-if="userName" class="text-gray-600 dark:text-gray-300">Hey, {{ userName }}</span>
    <InputModal :is-open="openProfileModal" title="Username" placeholder="Enter username here ..." @close="handleClose" @save="handleSave" />
  </div>
</template>
