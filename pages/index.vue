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
      <link rel="apple-touch-icon" sizes="180x180" href="./public/favicon/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="./public/favicon/favicon-16x16.png">
      <link rel="manifest" href="./public/favicon/site.webmanifest">
      <link rel="mask-icon" href="./public/favicon/safari-pinned-tab.svg" color="#f59e0b">
      <link rel="shortcut icon" href="./public/favicon/favicon.ico">
      <meta name="msapplication-TileColor" content="#b91d47">
      <meta name="msapplication-config" content="/public/favicon/browserconfig.xml">
      <meta name="theme-color" content="#ffffff">

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
