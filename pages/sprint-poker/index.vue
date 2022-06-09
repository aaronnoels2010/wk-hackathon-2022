<script setup lang="ts">
// import { writeRoom } from '~/composables/firebase'
// import { useSettingsStore } from '~/stores/settings'
import Room from '~/models/Room'

const router = useRouter()
// const { setRoom } = useSettingsStore()

const enterTeamChannel = (roomName) => {
  // const newRoom = new Room(roomName)
  // setRoom(newRoom)
  // writeRoom(newRoom).then(() => router.push(`/sprint-poker/${newRoom.id}`))
}
</script>

<template>
  <div>
    <Head>
      <Title>Sprint Poker</Title>
    </Head>
    <!-- <BaseCard>
      <InputEntry placeholder="Room name" :handle-submit="enterTeamChannel" />
    </BaseCard> -->
  </div>
</template>
