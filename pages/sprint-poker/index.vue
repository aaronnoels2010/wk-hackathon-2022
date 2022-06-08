<script setup>
import { useRouter } from 'nuxt/app'
import { writeRoom } from '~/composables/firebase'
import Room from '~/models/Room'

const router = useRouter()

const enterTeamChannel = (roomName) => {
  writeRoom(new Room(roomName)).then(response => router.push(`/sprint-poker/${roomName}`))
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
