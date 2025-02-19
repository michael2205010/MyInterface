<template>
  <breadcrumbs :breadcrumbs="['回饋說明']" />
  <section class="flex flex-col justify-center overflow-x-auto md:p-8">
    <div class="form-control mb-8 w-full" role="search">
      <label class="input flex w-full items-center gap-2">
        <input type="text" v-model="keywords" class="grow" placeholder="想找些什麼呢?" />
        <i class="mdi i-mdi-magnify text-lg" @click="search" aria-label="search"></i>
      </label>
    </div>

    <ul class="join join-vertical w-full">
      <li v-for="(item, index) in filteredDataList" :key="index" class="collapse-arrow join-item border-base-300 collapse rounded-none border">
        <input type="radio" v-model="selected" :value="index" name="my-accordion" @click="handleToggle(index)" :aria-expanded="index === selected" :aria-controls="'h2-' + index" />
        <h2 class="collapse-title text-xl font-extrabold text-green-800" :id="'h2-' + index">
          Q. {{ item.title }}
        </h2>
        <p class="collapse-content" v-show="selected === index">
          <vue-markdown class="md-article" :source="item.text" />
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { faq } from "@/requests/requests.js";
import VueMarkdown from "vue-markdown-render";

const response = ref([]);
onMounted(async () => {
  const _response = await faq.getList();
  response.value = _response.data;
});

const keywords = ref("");
const selected = ref(0);

const filteredDataList = computed(() => {
  if (!keywords.value.trim()) return response.value;

  const keywordsArray = keywords.value
    .split(",")
    .map((keyword) => keyword.trim());
    console.log(keywordsArray);
    
  return response.value.filter((data) =>
    keywordsArray.some(
      (keyword) =>
        data.title.includes(keyword) ||
        (data.text && data.text.includes(keyword)),
    ),
  );
});

function handleToggle(index) {
  if (selected.value === index) {
    selected.value = null; // 如果已經選中，則設置為 null 隱藏
  } else {
    selected.value = index; // 否則顯示該項目
  }
}
</script>


<style scoped>
p {
  border-top: var(--tw-border-style) 2px var(--color-green-600);
  background-color: var(--color-green-100);
}
</style>
