<script setup>
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
