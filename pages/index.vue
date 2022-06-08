<script setup>
import { ref as fbRef, onValue } from 'firebase/database'
const { $fbDatabase } = useNuxtApp()

const router = useRouter()

onMounted(() => {
  const team = fbRef($fbDatabase, 'teams/lol')
  onValue(team, (snapshot) => {
    if (snapshot.exists())
      console.log(snapshot)
  })
})

function goToSprintPoker() {
  router.push('/sprint-poker')
}

function goToRetro() {
  router.push('/retro')
}
</script>

<template>
  <div class="py-20 px-10 text-center">
    <Head>
      <Title>Home</Title>
    </Head>
    <div class="flex">
      <div class="m-4">
        <BaseCard @click="goToRetro">
          <h3>Retro</h3>
        </BaseCard>
      </div>
      <div class="m-4">
        <BaseCard @click="goToSprintPoker">
          <h3>Sprint Poker</h3>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
