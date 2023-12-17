<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  options: {
    type: Array || null,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])
const showDropdown = ref(false)
const dropdownMenu = ref()
const close = (option: any) => {
  showDropdown.value = false
  emit('update:modelValue', option)
}
onMounted(() => {
  window.addEventListener('click', (e) => {
    if (dropdownMenu.value != null) {
      if (!dropdownMenu.value.contains(e.target) && showDropdown.value) {
        showDropdown.value = false
      }
    }
  })
})
</script>

<template>
  <div class="relative">
    <div class="text-black">{{ props.placeholder }}</div>
    <div
      @click.stop="showDropdown = !showDropdown"
      class="bg-[#f6f6f6] rounded-md border border-black w-full h-[50px] flex items-center justify-between sm:px-6 px-4 mt-1 text-sm shadow-sm cursor-pointer"
    >
      <p v-if="modelValue?.value?.length" class="font-bold">
        {{ modelValue.value }}
      </p>
      <p v-else class="font-bold">{{ props.placeholder }}</p>

      <span
        :class="showDropdown ? 'rotate-90' : '-rotate-90'"
        class="transition-all duration-150 -rotate-90"
        ><div class="-rotate-90">🔷</div></span
      >
    </div>
    <div ref="dropdownMenu">
      <div
        v-if="showDropdown"
        class="absolute right-0 bg-white border-t-2 h-auto duration-250 ease-in-out z-10 shadow-lg w-full"
      >
        <ul v-for="(option, index) in options" :key="index">
          <li @click.stop="close(option)" class="py-2 px-7 hover:bg-gray-100 cursor-pointer">
            {{ option.value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
