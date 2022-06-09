<script setup lang="ts">
import { useNuxtApp } from 'nuxt/app'
import CoffeeIcon from '~icons/ant-design/coffee-outlined'
import InfinityIcon from '~icons/akar-icons/infinity'
import QuestionIcon from '~icons/akar-icons/question'
import type Player from '~/models/Player'
import { useSettingsStore } from '~/stores/settings'
import { writeRoom } from '~/composables/firebase'
const props = withDefaults(defineProps<Props>(), {
  player: undefined,
})
const { room } = useSettingsStore()

interface Props {
  player: Player | undefined
}

const deletePlayer = () => {
  if (!room || !room.value)
    return

  room.value?.removePlayer(props.player)
  writeRoom(room.value)
}
</script>

<template>
  <div v-if="player" class="flex flex-col items-center" @dblclick.stop="deletePlayer">
    <span>{{ player.name }}</span>
    <div class="w-[60px] h-[60px] bg-gray-200 dark:bg-gray-700 rounded-full flex justify-center items-center">
      <div :class="{ 'blur-lg': room.isHidden }">
        <CoffeeIcon v-if="player.score === 'coffee'" class="text-3xl dark:text-white"></CoffeeIcon>
        <InfinityIcon v-else-if="player.score === 'infinity'" class="text-3xl dark:text-white"></InfinityIcon>
        <QuestionIcon v-else-if="player.score === 'unknown'" class="text-3xl dark:text-white"></QuestionIcon>
        <h4 v-else class="text-3xl dark:text-white">
          {{ player.score }}
        </h4>
      </div>
    </div>
  </div>
</template>
