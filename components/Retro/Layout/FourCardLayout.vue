<script setup lang="ts">
import RetroZoneModel from '~/models/RetroZoneModel'

const props = withDefaults(defineProps<Props>(), {
  retroZones: () => [new RetroZoneModel([], 'default'),
    new RetroZoneModel([], 'default'),
    new RetroZoneModel([], 'default'),
    new RetroZoneModel([], 'default')],
})

interface Props {
  retroZones: RetroZoneModel[]
}
</script>

<template>
  <div class="grid overflow-hidden sm:grid-cols-1 md:grid-cols-2 sm:grid-rows-4 md:grid-rows-2 w-full px-4">
    <RetroZone v-for="(retroZone, index) in retroZones"
               :key="index"
               :index="index"
               :messages="retroZone.messages"
               :zone-title="retroZone.title"
               :class="`flex-grow bg-[#C1EDFA] bg-no-repeat bg-center rounded-md bg-[url('${retroZone.image}')]`" />
  </div>
</template>

<style scoped>

</style>