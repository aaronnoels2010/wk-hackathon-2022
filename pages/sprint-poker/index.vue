<script setup>
import { useRouter } from 'nuxt/app'
import { writeRoom } from '~/composables/firebase'
import Room from '~/models/Room'

const router = useRouter()

const enterTeamChannel = (roomName) => {
  const newRoom = new Room(roomName)
  writeRoom(newRoom).then(response => router.push(`/sprint-poker/${newRoom.id}`))
}
</script>

<template>
  <div>
    <Head>
      <Title>Sprint Poker</Title>
    </Head>
    <BaseCard>
      <InputEntry placeholder="Room name" :handle-submit="enterTeamChannel" />
    </BaseCard>
  </div>
</template>
