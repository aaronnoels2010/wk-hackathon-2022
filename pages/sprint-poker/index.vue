<script setup>
import { useNuxtApp, useRouter } from 'nuxt/app'
import { writeRoom } from '~/composables/firebase'
import { useSettingsStore } from '~/stores/settings.ts'
import Room from '~/models/Room'

const router = useRouter()
const { $pinia } = useNuxtApp()
const { setRoom } = useSettingsStore($pinia)

const enterTeamChannel = (roomName) => {
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
    <BaseCard>
      <InputEntry placeholder="Room name" :handle-submit="enterTeamChannel" />
    </BaseCard>
  </div>
</template>
