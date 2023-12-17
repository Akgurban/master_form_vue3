<template>
  <div>
    <div
      class="w-full mt-5 py-[21px] px-[30px] rounded-[10px] border border-dashed border-primary cursor-pointer"
    >
      <div
        @click="$emit('incomedDeletion', { type: 'select' })"
        class="cursor-pointer p-2 w-fit ml-auto bg-slate-300 rounded-md mb-3"
      >
        delete
      </div>
      type: {{ props.type }}

      <div class="flex items-center gap-4">
        placeholder:
        <input class="mt-3 border border-orange-600" type="text" v-model="placeholder" />
      </div>
      <div v-for="(item, index) in selectorItems" class="flex w-full justify-between">
        <input type="text" name="" v-model="item.value" id="" class="mt-3 border border-primary" />
        <button @click="removeItem(index)">X</button>
      </div>
      <IconPlus @click="addInput"></IconPlus>
      <br />
      <div class="flex justify-between w-full">
        <div>
          required:
          <BaseCheckbox
            :value="isRequired"
            @update="(e) => (isRequired = e)"
            class="inline"
          ></BaseCheckbox>
        </div>

        <BaseButton @click="SaveToStore">Save</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import IconPlus from '../icons/IconPlus.vue'
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
