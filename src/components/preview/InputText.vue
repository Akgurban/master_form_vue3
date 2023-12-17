<template>
  <div>
    <div class="w-full justify-between items-center rounded-[10px] cursor-pointer">
      <div class="flex items-center gap-4">
        <input
          class="border text-base border-[#F6F6F6] bg-[#F6F6F6] p-[28px] w-full rounded-[10px] placeholder:opacity-50 placeholder:text-[#000]"
          :type="props.type"
          :placeholder="props?.placeholder"
          v-model="placeholderValue"
        />
      </div>

      <div class="flex justify-between w-full">
        <div class="text-red-800">
          {{ props.required ? 'обязательно*' : '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseCheckbox from '../base/BaseCheckbox.vue'
import BaseButton from '../base/BaseButton.vue'
import { useInputsStore } from '@/stores/counter'

const props = defineProps({
  type: {
    type: String,
    default: 'string'
  },
  id: {
    type: Number,
    required: true
  },
  placeholder: {
    type: String || undefined,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  }
})

const placeholder = ref('')
placeholder.value = props.placeholder
const placeholderValue = ref('')
const isRequired = ref(false)
console.log(props.required, isRequired, 'poio')

isRequired.value = props.required

watch(placeholder, () => {
  console.log(placeholder, 'placeh')
})
watch(isRequired, () => {
  console.log(isRequired, 'pp[]')
})
const SaveToStore = () => {
  useInputsStore().updateOneInput({
    id: props.id,
    type: props.type,
    placeholder: placeholder,
    required: isRequired
  })
}

const BaseType = ref('')
</script>

<style lang="scss" scoped></style>
