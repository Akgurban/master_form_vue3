<template>
  <div class="w-[50%] mx-auto pt-20 h-screen overflow-auto flex flex-col justify-between">
    <div>
      <img src="/logo.png" alt="" />
      <div @click="router.push('/results')" class="flex items-center gap-2 mt-8 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M7.91659 5H2.08325"
            stroke="black"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.99992 7.91732L2.08325 5.00065L4.99992 2.08398"
            stroke="black"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Назад</p>
      </div>
      <div class="mt-[50px]">
        <p class="cursor-pointer text-base my-2">Тип формы</p>
        <p class="cursor-pointer text-base my-2">Сущности</p>
        <p class="cursor-pointer text-base my-2 text-primary">Поля</p>
        <p class="cursor-pointer text-base my-2">Правила показа полей</p>
        <p class="cursor-pointer text-base my-2">Другие настройки</p>
      </div>
    </div>
    <div class="gap-2.5 flex flex-col w-[160px] mb-10">
      <div
        class="cursor-pointer font-medium text-base rounded-[10px] p-4 border-primary border text-center text-primary"
      >
        Скрипт
      </div>
      <div
        @click="saveToForms"
        class="cursor-pointer font-medium text-base rounded-[10px] p-4 border-primary border text-center bg-primary text-white"
      >
        Сохранить
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInputsStore } from '@/stores/counter'
import { useRouter } from 'vue-router'
const router = useRouter()
const saveToForms = () => {
  useInputsStore().saveToForms()

  router.push({ name: 'results', path: '/results' })
}
</script>

<style scoped></style>
