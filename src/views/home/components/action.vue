<template>
  <nav class="flex flex-col" aria-label="行動">
    <div class="flex justify-center p-3 border-b-2 border-primary">
      <h1 class="font-bold text-xl whitespace-nowrap">行動</h1>
    </div>
    <ul class="item-center flex flex-col justify-center gap-x-12 gap-y-6 py-4 mx-auto w-5/6 md:flex-row" role="list">
      <li v-for="action in actionOptions">
        <button class="btn btn-lg bg-primary text-primary-content px-4 py-2 rounded-md whitespace-nowrap" :aria-label="action.name" @click="todo(action.describe)">
          {{ action.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const emit = defineEmits(['addAction']);
const actionOptions = ref([
  { name: "睡覺", describe: "小海豹開始睡覺。" },
  { name: "小憩", describe: "小海豹小憩了一下。" },
  { name: "冥想", describe: "小海豹睡著了。" },
  { name: "打盹", describe: "小海豹打了個盹。" },
  { name: "休息", describe: "小海豹正在休息。" },
  { name: "安眠", describe: "小海豹睡了個好覺。" },
  { name: "暈厥", describe: "小海豹昏睡了過去。" },
  { name: "午休", describe: "小海豹給自己一個午休。" },
  { name: "放鬆", describe: "小海豹開始躺躺。" },
  { name: "瞌睡", describe: "小海豹感到疲倦。" },
  { name: "補眠", describe: "小海豹開始彌補缺失的休息時間。" },
  { name: "酣睡", describe: "小海豹無法接收指令。" },
]);
function todo(action) {
  // alert(action);
  emit('addAction', action);
}
</script>

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
