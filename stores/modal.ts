import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const _openProfileModal = ref(false)
  const _openAddCardModal = ref(false)

  const openProfileModal = computed(() => _openProfileModal)
  const openAddCardModal = computed(() => _openAddCardModal)

  function setStateProfileModal(state: boolean) {
    _openProfileModal.value = state
  }

  function setStateAddCardModal(state: boolean) {
    _openAddCardModal.value = state
  }

  return {
    openProfileModal,
    openAddCardModal,
    setStateProfileModal,
    setStateAddCardModal,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot))
