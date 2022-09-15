<script setup lang="ts">
import InputModal from '~/components/Modal/InputModal.vue'
import { useModalStore } from '../stores/modal'
import { useSettingsStore } from '../stores/settings'
import { writeRoom } from '../composables/firebase'
import AvatarIcon from '~icons/carbon/user-avatar'

const { userName, room, setUserName } = useSettingsStore()
const { openProfileModal, setStateProfileModal } = useModalStore()

const saveClose = () => {
  if (!userName || !userName.value)
    return

  setStateProfileModal(false)
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
    <AvatarIcon v-if="!userName" class="w-6 h-6 text-gray-600 dark:text-gray-300" @click="() => setStateProfileModal(true)" />
    <span v-if="userName" class="text-gray-600 dark:text-gray-300" @click="() => setStateProfileModal(true)">Hey, {{ userName }}</span>
    <InputModal :is-open="openProfileModal" title="Username" placeholder="Enter username here ..." @close="saveClose" @save="handleSave" />
  </div>
</template>
