<script setup>
import { onMounted } from 'vue'
import PokerTable from '~/components/SprintPoker/PokerTable'
import PokerTableCards from '~/components/SprintPoker/PokerTableCards'

const route = useRoute()
const ctx = useNuxtApp()
const teamName = route.params.team
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col flex-grow justify-center items-center">
      <PokerTable />
    </div>
    <div class="pb-8">
      <PokerTableCards />
    </div>
  </div>
</template>
