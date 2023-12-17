<template>
  <div>
    <input
      type="checkbox"
      name=""
      id=""
      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ml-4"
      :checked="props.value"
      @input="(e: any) => $emit('update', e.target.checked)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// const emit = defineEmits<{
//   update: [value: boolean] // named tuple syntax
// }>()
const props = defineProps({
  value: {
    type: Boolean,
    required: true
  }
})
const isRequired = ref(false)

const emit = defineEmits(['update'])
</script>

<style scoped></style>
