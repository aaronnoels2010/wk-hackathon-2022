<script setup lang="ts">
const router = useRouter()

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
      <link rel="shortcut icon" href="../public/favicon/favicon.ico">
      <Title>Home</Title>
    </Head>
    <div class="flex">
      <div class="m-4">
        <BaseCard class="min-w-[240px] min-h-[360px] hover:animate-pulse text-2xl" @click="goToRetro">
          <h3>Retro</h3>
        </BaseCard>
      </div>
      <div class="m-4">
        <BaseCard class="min-w-[240px] min-h-[360px] hover:animate-pulse text-2xl" @click="goToSprintPoker">
          <h3>Sprint Poker</h3>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
