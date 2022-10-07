<script setup lang='ts'>
import HeroiconsOutlineCog from '~icons/heroicons-outline/cog'

const router = useRouter()

function navigateToSettings() {
  router.push('/settings')
}
</script>

<template>
  <button
    class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
    @click="navigateToSettings()"
  >
    <HeroiconsOutlineCog class="w-6 h-6" />
  </button>
</template>
