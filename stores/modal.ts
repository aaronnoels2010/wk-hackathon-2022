import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const _openRoomModal = ref(false)
  const _openProfileModal = ref(false)
  const _openAddCardModal = ref(false)

  const openRoomModal = computed(() => _openRoomModal)
  const openProfileModal = computed(() => _openProfileModal)
  const openAddCardModal = computed(() => _openAddCardModal)

  function setStateRoomModal(state: boolean) {
    _openRoomModal.value = state
  }

  function setStateProfileModal(state: boolean) {
    _openProfileModal.value = state
  }

  function setStateAddCardModal(state: boolean) {
    _openAddCardModal.value = state
  }

  return {
    openRoomModal,
    openProfileModal,
    openAddCardModal,
    setStateRoomModal,
    setStateProfileModal,
    setStateAddCardModal,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot))
