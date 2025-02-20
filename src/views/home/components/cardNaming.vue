<template>
  <hr class="mt-3 bg-primary">
  <nav class="flex flex-col" aria-label="卡片記名">
    <ul class="item-center flex flex-col justify-center gap-x-12 gap-y-6 py-4 mx-auto w-5/6 md:flex-row" role="list">
      <li>
        <button class="btn btn-lg bg-primary text-primary-content px-4 py-2 rounded-md" aria-label="待辦事項">待辦事項</button>
      </li>
      <li>
        <button class="btn btn-lg bg-primary text-primary-content px-4 py-2 rounded-md" aria-label="已完成事項">已完成事項</button>
      </li>
      <li>
        <button class="btn btn-lg bg-primary text-primary-content px-4 py-2 rounded-md" aria-label="處理中">處理中</button>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
@reference "@/assets/css/main.css";
hr {
  border: 0;
  height: 5px;
}

@media (max-width: 1200px) {
  .links-top::before,
  .links-top::after {
    content: "";
    @apply box-border block h-[3px] w-[calc(100%-320px)/2] bg-green-600;
  }
}
</style>
