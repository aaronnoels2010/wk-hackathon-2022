<script setup lang="ts">
import FourCardLayout from '~/components/Retro/Layout/FourCardLayout.vue'
import RetroZoneModel from '~/models/RetroZoneModel'
import retroService from '~/services/retro-service'

retroService.clear()
retroService.addRetroZones(new RetroZoneModel([], 'Wore me out?', '/assets/img/retro/panda-sleepy.png'))
retroService.addRetroZones(new RetroZoneModel([], 'Made me grow?', '/assets/img/retro/panda-grow.png'))
retroService.addRetroZones(new RetroZoneModel([], 'Gave me new ideas?', '/assets/img/retro/panda-ideas.png'))
retroService.addRetroZones(new RetroZoneModel([], 'Did I learn?', '/assets/img/retro/panda-learn.png'))
</script>

<template>
  <FourCardLayout :retro-zones="retroService.retroZones" />
</template>
