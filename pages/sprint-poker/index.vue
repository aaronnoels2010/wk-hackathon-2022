<script setup>
const router = useRouter()
const enterTeamChannel = (teamName) => {
  router.push(`/sprint-poker/${teamName}`)
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
