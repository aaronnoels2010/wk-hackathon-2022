<script setup lang="ts">
import BaseButton from '~/components/base/BaseButton.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseOutlineButton from '~/components/base/BaseOutlineButton.vue'
import { useUser } from '~/composables/settings'
import { useOpenProfileAvatarDialog } from '~/composables/modals'
import { useModalStore } from '~/stores/modal'
import { useSettingsStore } from '~/stores/settings'
import AvatarIcon from '~icons/carbon/user-avatar'

const { $pinia } = useNuxtApp()
const { userName } = useSettingsStore($pinia)
const { openProfileModalComputed, setStateProfileModal } = useModalStore($pinia)

console.log(userName)

const localUserName = ref('')

const updateOpenProfileAvatarDialog = (state: boolean) => {
  if (!userName.value && !state)
    return

  setStateProfileModal(state)
}

const handleSave = () => {
  updateOpenProfileAvatarDialog(false)
  setUserName(localUserName.value)
}
</script>

<template>
  <div class="flex justify-center items-center">
    <AvatarIcon v-if="!userName" class="w-6 h-6 text-gray-600 dark:text-gray-300" @click="() => updateOpenProfileAvatarDialog(true)" />
    <span v-if="userName" class="text-gray-600 dark:text-gray-300" @click="() => updateOpenProfileAvatarDialog(true)">Hey, {{ userName }}</span>
    <div v-if="openProfileModalComputed" class="relative z-50" @click="() => updateOpenProfileAvatarDialog(false)">
      <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <div class="p-4 w-full max-w-sm rounded-2xl bg-white dark:bg-gray-800">
          <h3 class="text-3xl mb-4 text-center text-slate-600 dark:text-slate-300">
            User
          </h3>

          <BaseInput
            id="input"
            v-model="localUserName"
            color="gray"
            class="text-center"
            placeholder="Username"
            type="text"
            autocomplete="false" @click.stop="() => {}"
          />

          <div class="flex justify-end mt-4">
            <BaseOutlineButton color="red" class="disabled:cursor-not-allowed mr-4" @click="updateOpenProfileAvatarDialog(false)">
              Cancel
            </BaseOutlineButton>
            <BaseButton color="green" class="disabled:cursor-not-allowed" @click="handleSave">
              Save
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
