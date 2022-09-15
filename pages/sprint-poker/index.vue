<script setup lang="ts">
import InputModal from '~/components/Modal/InputModal.vue';
import { writeRoom } from '~/composables/firebase'
import { useSettingsStore } from '~/stores/settings'
import Room from '~/models/Room'

const router = useRouter()
const { setRoom } = useSettingsStore()

const enterTeamChannel = (roomName) => {
  if(!roomName)
    return

  const newRoom = new Room(roomName)
  setRoom(newRoom)
  writeRoom(newRoom).then(() => router.push(`/sprint-poker/${newRoom.id}`))
}
</script>

<template>
  <div>
    <Head>
      <Title>Sprint Poker</Title>
    </Head>
    <InputModal :is-open="true" title="Room name" placeholder="Enter room name..." @close="() => undefined" @save="enterTeamChannel" />
  </div>
</template>
