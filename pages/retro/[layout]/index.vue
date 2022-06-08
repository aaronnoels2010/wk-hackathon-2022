<script setup lang="ts">
import ElvisRetroLayout from '~/components/Retro/Layout/ElvisRetroLayout'
import PandaRetroLayout from '~/components/Retro/Layout/PandaRetroLayout'
import StarWarsRetroLayout from '~/components/Retro/Layout/StarWarsRetroLayout'
import TheIslandRetroLayout from '~/components/Retro/Layout/TheIslandRetroLayout'

const route = useRoute()
const layout = route.params.layout
</script>

<template>
  <div class="flex flex-grow">
    <PandaRetroLayout v-if="layout === 'panda'"></PandaRetroLayout>
    <StarWarsRetroLayout v-if="layout === 'star-wars'"></StarWarsRetroLayout>
    <TheIslandRetroLayout v-if="layout === 'the-island'"></TheIslandRetroLayout>
    <ElvisRetroLayout v-if="layout === 'elvis'"></ElvisRetroLayout>
  </div>
</template>
