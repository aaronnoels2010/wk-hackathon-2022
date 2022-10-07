<script setup lang="ts">
interface Props {
  isOpen: boolean
  title: string
  placeholder: string
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  placeholder: 'placeholder',
  title: 'title',
})

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'save', value: string): void
}>()

const message = ref('')

const saveInput = () => {
  emit('save', message.value)
  message.value = ''
}
</script>

<template>
  <div v-if="isOpen">
    <div class="absolute flex flex-col top-0 left-0 w-full h-full z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md" aria-hidden="true">
      <div class="flex flex-1 items-center justify-center p-4">
        <div class="flex flex-1 flex-col">
          <h3 class="text-4xl mb-4 text-center text-slate-600 dark:text-slate-300">
            {{ title }}
          </h3>

          <textarea
            id="message"
            v-model="message"
            rows="4"
            class="m-4 text-center text-2xl border-0 bg-transparent focus:ring-0"
            style="resize: none"
            :placeholder="placeholder"
            @keyup.enter="saveInput"
          />
        </div>
      </div>
      <div class="flex justify-end m-4">
        <BaseOutlineButton color="red" class="disabled:cursor-not-allowed mr-4" @click="emit('close')">
          Cancel
        </BaseOutlineButton>
        <BaseButton color="green" class="disabled:cursor-not-allowed" @click="saveInput">
          Save
        </BaseButton>
      </div>
    </div>
  </div>
</template>
