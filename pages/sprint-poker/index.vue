<script setup lang="ts">
import { writeRoom } from '~/composables/firebase'
import { useModalStore } from '~/stores/modal'
import { useSettingsStore } from '~/stores/settings'
import Room from '~/models/Room'

import InputModal from '~/components/Modal/InputModal.vue'

const router = useRouter()
const { setRoom } = useSettingsStore()
const { openRoomModal, setStateRoomModal } = useModalStore()

setStateRoomModal(true)

const handleClose = () => {
  setStateRoomModal(false)
  router.push('../')
}

const enterTeamChannel = (roomName) => {
  if (!roomName)
    return

  setStateRoomModal(false)

  const newRoom = new Room(roomName)
  setRoom(newRoom)
  writeRoom(newRoom).then(() => router.push(`/sprint-poker/${newRoom.id}`))
}
</script>

<template>
  <div>
    <Head>
      <Title>Sprint Poker | Majestic Biscuit</Title>
    </Head>
    <InputModal :is-open="openRoomModal" title="Room name" placeholder="Enter room name..." @close="handleClose" @save="enterTeamChannel" />
  </div>
</template>
