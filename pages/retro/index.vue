<script setup lang="ts">
import BaseCard from '~/components/base/BaseCard.vue'

const { data } = useFetch('/api/retro/layouts')

const goToRetroLayout = (layout: string) => {
  const router = useRouter()
  router.push(`/retro/${layout}`)
}
</script>

<template>
  <div v-if="data" class="flex flex-grow">
    <Head>
      <Title>Retro</Title>
    </Head>
    <div class="flex flex-grow justify-center items-center">
      <BaseCard v-for="(layout, index) in data.layouts" :key="index" class="mr-12 mt-4 h-56 w-40 hover:animate-bounce" @click="() => goToRetroLayout(layout)">
        <img v-if="layout === 'panda'" src="~/assets/img/retro/panda.svg">
        <img v-else-if="layout === 'star-wars'" src="~/assets/img/retro/star-wars.jpg">
        <img v-else-if="layout === 'elvis'" src="~/assets/img/retro/elvis.png">
        <img v-else-if="layout === 'the-island'" src="~/assets/img/retro/eiland.jpeg">
      </BaseCard>
    </div>
  </div>
</template>
