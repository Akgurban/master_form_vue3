<template>
  <div>
    <div class="w-full rounded-[10px] bg-[#f6f6f6] cursor-pointer">
      <div class="flex flex-col justify-between w-full p-3">
        {{ props.placeholder }}
        <div class="flex my-3 cursor-pointer" v-for="item in props?.items">
          <input
            :id="item.value"
            type="checkbox"
            :checked="item.checked"
            class="rounded-full"
            @input="(e) => handleInput(e, item)"
          />
          <label :for="item.value" class="ml-3 text-sm text-gray-600">{{ item.value }}</label>
        </div>
      </div>
    </div>
    <div class="flex justify-between w-full">
      <div class="text-red-800">
        {{ props.required ? 'обязательно*' : '' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
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

const placeholder = ref<any>('')
const isRequired = ref(props.required)
placeholder.value = props.placeholder
const handleInput = (e: any, item: any) => {
  console.log(e.target.checked, item)
  item.checked = e.target.checked
}

watch(
  selectorItems,
  () => {
    console.log(selectorItems.value, 'pp')
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
