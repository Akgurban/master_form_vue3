<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
import SelectType from '@/components/modals/SelectType.vue'
import InputText from '@/components/inputs/InputText.vue'
import InputSelector from '@/components/inputs/InputSelector.vue'
import { useInputsStore } from '@/stores/counter'

import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import ViewResult from '@/components/ViewResult.vue'
import ViewSidebar from '@/components/ViewSidebar.vue'

const selectModal = ref<any>('')
const isSelectType = ref(false)
const openModalSelect = () => {
  isSelectType.value = true
}
const closeSelectModal = (e: any) => {
  isSelectType.value = false
  useInputsStore().addToForm({ ...e, id: Math.random() })
}

const deleteSomeInputs = (e: any) => {
  useInputsStore().deleteFromForm(e)
}

onClickOutside(selectModal, (event) => (isSelectType.value = false))
</script>

<template>
  <main class="flex w-full h-fit min-h-screen">
    <div class="bg-white w-1/3">
      <ViewSidebar></ViewSidebar>
    </div>
    <div class="w-1/3 h-screen overflow-auto bg-[#F9F9F9] rounded-r-[10px] px-7 pt-20">
      <div class="font-medium text-[40px] leading-none">Поля</div>
      <div class="font-medium text-[24px] leading-none mt-[30px]">Скрытые поля</div>
      <div
        @click="openModalSelect"
        class="flex w-full justify-between items-center mt-[30px] py-[21px] px-[30px] rounded-[10px] border border-dashed border-primary cursor-pointer"
      >
        <div class="text-[16px] text-primary leading-normal">Добавить поле</div>
        <IconPlus></IconPlus>
      </div>
      <div class="font-medium text-[24px] leading-none mt-[30px]">Поля</div>
      <div v-for="items in useInputsStore().inputs">
        <InputText
          :id="items.id"
          @incomedDeletion="(e) => deleteSomeInputs({ id: items.id })"
          :type="items.type"
          :required="items.required"
          :placeholder="items.placeholder"
          v-if="items.type == 'text' || items.type == 'number'"
        ></InputText>
        <InputSelector
          :id="items.id"
          :type="items.type"
          :placeholder="items.placeholder"
          :required="items.required"
          :items="items.items"
          @incomedDeletion="(e) => deleteSomeInputs({ id: items.id })"
          v-if="items.type == 'select' || items.type == 'radio'"
        ></InputSelector>
      </div>
      <SelectType
        @incomedData="closeSelectModal"
        v-if="isSelectType"
        ref="selectModal"
      ></SelectType>
    </div>
    <div class="w-1/3 relative h-screen overflow-auto"><ViewResult></ViewResult></div>
  </main>
</template>
