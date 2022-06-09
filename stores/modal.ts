import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const _openProfileModal = ref(false)

  const openProfileModal = computed(() => _openProfileModal)

  function setStateProfileModal(state: boolean) {
    _openProfileModal.value = state
  }

  return {
    openProfileModal,
    setStateProfileModal,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot))
