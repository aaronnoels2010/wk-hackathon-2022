import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const openProfileModal = ref(false)

  const openProfileModalComputed = computed(() => openProfileModal)

  function setStateProfileModal(state: boolean) {
    openProfileModal.value = state
  }

  return {
    openProfileModal,
    openProfileModalComputed,
    setStateProfileModal,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot))
