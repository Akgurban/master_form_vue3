<template>
  <div>
    <div
      class="w-full justify-between items-center py-[21px] px-[30px] rounded-[10px] border border-dashed border-primary cursor-pointer mt-5"
    >
      <div
        @click="$emit('incomedDeletion', { type: 'select' })"
        class="cursor-pointer p-2 w-fit ml-auto bg-slate-300 rounded-md mb-3"
      >
        delete
      </div>
      <div class="flex items-center gap-4">
        placeholder:
        <input class="mt-3 border border-orange-600" type="text" v-model="placeholder" />
      </div>
      <br />
      type: {{ props.type }}
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
const isRequired = ref(false)
console.log(props.required, isRequired, 'poio')

isRequired.value = props.required

watch(placeholder, () => {
  SaveToStore()
  console.log(isRequired, 'pp[]')
})
watch(isRequired, () => {
  SaveToStore()
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
