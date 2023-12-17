<template>
  <div class="flex bg-[#f6f6f6] h-full overflow-auto">
    <div class="w-1/3 bg-white">
      <div class="w-[50%] mx-auto pt-20 h-screen overflow-auto flex flex-col justify-between">
        <div>
          <img @click="goHome" src="/logo.png" alt="" />
          <div class="mt-[50px]">
            <p class="cursor-pointer text-base my-2 text-primary">Формы</p>
            <p class="cursor-pointer text-base my-2">Пользователи</p>
          </div>
        </div>
        <div class="gap-2.5 flex flex-col w-[160px] mb-10">
          <div
            class="cursor-pointer font-medium text-base rounded-[10px] p-4 border-primary border text-center text-primary"
          >
            Выход
          </div>
        </div>
      </div>
    </div>

    <div class="w-2/3 pl-[30px] h-screen overflow-auto">
      <div class="mt-[80px] mb-[50px] text-[40px] font-medium">Формы</div>
      <div
        v-for="(item, index) in useInputsStore().forms"
        :key="index"
        class="flex justify-between p-6 bg-white rounded-[10px] my-[30px]"
      >
        <div>
          <div>
            <p class="text-2xl font-medium">Форма регистрации участников</p>
            <p class="opacity-50">Автор: {{ item.id }}</p>
          </div>
          <div class="mt-[58px] opacity-50">Дата создания: 01.01.23</div>
        </div>
        <div class="flex flex-col justify-between">
          <div
            @click="editForm(item)"
            class="text-center cursor-pointer text-primary text-base font-medium border-primary border rounded-[10px] px-8 py-4"
          >
            Редактировать
          </div>
          <div
            @click="deleteForm(item)"
            class="text-center cursor-pointer text-primary text-base font-medium rounded-[10px] px-8 py-4 mt-auto"
          >
            Удалить
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInputsStore } from '@/stores/counter'
import { useRouter } from 'vue-router'
const router = useRouter()
const deleteForm = (e: any) => {
  useInputsStore().deleteForm(e)
}
const editForm = (e: any) => {
  useInputsStore().editForm(e)
  router.push('/')
}
const goHome = () => {
  useInputsStore().setSelectedFormIDNull()
  router.push('/')
}
</script>

<style scoped></style>
