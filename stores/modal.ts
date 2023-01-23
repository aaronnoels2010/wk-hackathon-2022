import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const _openRoomModal = ref(false)
  const _openProfileModal = ref(false)
  const _openAddCardModal = ref(false)
  const _callbackProfileModal = reactive({
    callback: () => { },
  })

  const openRoomModal = computed(() => _openRoomModal)
  const openProfileModal = computed(() => _openProfileModal)
  const openAddCardModal = computed(() => _openAddCardModal)
  const callbackProfileModal = computed(() => _callbackProfileModal)

  function setStateRoomModal(state: boolean) {
    _openRoomModal.value = state
  }

  function setStateProfileModal(state: boolean, callbackOnCancel?: () => void) {
    console.log('A')
    console.log(callbackOnCancel)
    if (callbackOnCancel) {
      _callbackProfileModal.callback = callbackOnCancel

      console.log('B')
      console.log(_callbackProfileModal.callback)
    }

    _openProfileModal.value = state
  }

  function setStateAddCardModal(state: boolean) {
    _openAddCardModal.value = state
  }

  return {
    openRoomModal,
    openProfileModal,
    openAddCardModal,
    callbackProfileModal,
    setStateRoomModal,
    setStateProfileModal,
    setStateAddCardModal,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot))
