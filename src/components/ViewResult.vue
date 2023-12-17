<template>
  <div class="greetings xl:p-[70px] p-[30px] w-full h-fit mt-10 sticky -top-10 overflow-auto">
    <div class="w-full h-full bg-white p-10 rounded-[20px]">
      <p class="font-medium text-2xl">Форма регистрации участников</p>
      <div class="mt-[10px]" v-for="items in useInputsStore().getInputs">
        <InputText
          :id="items.id"
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
          v-if="items.type == 'radio'"
        ></InputSelector>
        <InputMultiSelector
          :id="items.id"
          :type="items.type"
          :placeholder="items.placeholder"
          :required="items.required"
          :items="items.items"
          v-if="items.type == 'select'"
        ></InputMultiSelector>
      </div>
      <div class="w-full flex justify-between gap-2.5 mt-[30px]">
        <div>
          <div
            @click="isAccept = !isAccept"
            class="border border-primary rounded-[4px] h-6 w-6 flex items-center justify-center cursor-pointer"
          >
            <p v-if="isAccept">✔</p>
          </div>
        </div>
        <p class="text-[#212121] text-[14px] opacity-50">
          Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности
        </p>
      </div>
      <button
        class="text-base text-white bg-primary font-medium p-4 w-full rounded-lg flex justify-center mt-[50px] cursor-pointer active:shadow-hero"
      >
        Отправить
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useInputsStore } from '@/stores/counter'
import InputText from './preview/InputText.vue'
import InputSelector from './preview/InputSelector.vue'
import InputMultiSelector from './preview/InputMultiSelector.vue'
import { ref } from 'vue'

const isAccept = ref(false)
</script>

<style scoped></style>
