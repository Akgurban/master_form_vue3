<template>
  <div>
    <div class="w-full rounded-[10px] bg-[#f6f6f6] cursor-pointer">
      <BaseSelector
        v-model="selectedItem"
        :placeholder="props.placeholder"
        :options="props?.items"
        >{{ selectedItem }}</BaseSelector
      >
      <br />
      <div class="flex justify-between w-full">
        <div class="flex justify-between w-full">
          <div class="text-red-800">
            {{ props.required ? 'обязательно*' : '' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import IconPlus from '../icons/IconPlus.vue'
import BaseCheckbox from '../base/BaseCheckbox.vue'
import BaseSelector from '../base/BaseSelect.vue'
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
    type: String,
    required: false
  },
  items: {
    type: Array,
    required: false
  },
  required: {
    type: Boolean,
    required: true
  }
})
const selectorItems = ref<any[]>([{ value: '' }])
if (props?.items) {
  selectorItems.value = props.items
}
const selectedItem = ref({})

const placeholder = ref<any>('')
const isRequired = ref(props.required)
placeholder.value = props.placeholder
const addInput = () => {
  selectorItems.value.push({ value: '' })
}

const removeItem = (e: number) => {
  selectorItems.value.splice(e, 1)
}
watch(
  placeholder || selectorItems || isRequired,
  () => {
    SaveToStore()
  },
  { deep: true }
)
watch(isRequired, () => {
  SaveToStore()
})
const SaveToStore = () => {
  useInputsStore().updateOneInput({
    items: selectorItems.value,
    id: props.id,
    type: props.type,
    placeholder: placeholder,
    required: isRequired
  })
}

const BaseType = ref('')
</script>

<style lang="scss" scoped></style>
