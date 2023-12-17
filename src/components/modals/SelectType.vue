<template>
  <div
    id="selectModal"
    class="w-[80vh] rounded-lg bg-[#e0cacae3] h-fit absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
  >
    <div class="p-10">
      <div class="p-3 font-medium text-2xl">Выберите тип инпут-а</div>
      <div
        @click="$emit('incomedData', { type: 'text' })"
        class="group text-xl p-5 cursor-pointer bg-slate-400 my-2 rounded-lg w-full flex justify-between"
      >
        <p>text</p>
        <p class="group-hover:translate-x-4 transition-all duration-200 mr-5">👉</p>
      </div>
      <div
        @click="$emit('incomedData', { type: 'number' })"
        class="group text-xl p-5 cursor-pointer bg-slate-400 my-2 rounded-lg w-full flex justify-between"
      >
        <p>number</p>
        <p class="group-hover:translate-x-4 transition-all duration-200 mr-5">👉</p>
      </div>
      <div
        @click="$emit('incomedData', { type: 'radio' })"
        class="group text-xl p-5 cursor-pointer bg-slate-400 my-2 rounded-lg w-full flex justify-between"
      >
        <p>one select</p>
        <p class="group-hover:translate-x-4 transition-all duration-200 mr-5">👉</p>
      </div>
      <div
        @click="$emit('incomedData', { type: 'select' })"
        class="group text-xl p-5 cursor-pointer bg-slate-400 my-2 rounded-lg w-full flex justify-between"
      >
        <p>multi select</p>
        <p class="group-hover:translate-x-4 transition-all duration-200 mr-5">👉</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
