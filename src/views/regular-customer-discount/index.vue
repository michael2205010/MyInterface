<template>
  <breadcrumbs :breadcrumbs="['會員優惠方案']" />
  <section class="flex flex-col justify-center overflow-x-auto md:p-8">
    <div class="form-control w-full" role="search">
      <div class="input input-bordered flex items-center gap-2 w-full">
        <input type="text" v-model="keywords" class="grow" placeholder="想找些什麼呢?" />
        <i
          class="mdi i-mdi-magnify text-lg"
          @click="search"
          aria-label="search"
        ></i>
      </div>
    </div>

    <div class="join join-vertical w-full my-1">
      <div v-for="(item, index) in filteredDataList" :key="index" class="collapse collapse-arrow join-item border-base-300 border rounded-none">
        <input type="radio" v-model="selected" :value="index" name="my-accordion" @click="handleToggle(index)"
        :aria-expanded="index === selected" :aria-controls="'h2-' + index"  />
        <h2 class="collapse-title text-xl text-green-800  font-extrabold" :id="'h2-' + index"> {{ item.title }}</h2>
        <div class="collapse-content" v-show="selected === index">
          <p class="article px-6">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { regularCustomerDiscount } from "@/requests/requests.js";

const response = ref([]);

onMounted(async () => {
  const _response = await regularCustomerDiscount.getList();
  response.value = _response.data;
});
const keywords = ref("");
const selected = ref(null);

const filteredDataList = computed(() => {
  if (!keywords.value.trim()) return response.value;

  const keywordsArray = keywords.value.split(", ").map((keyword) => keyword.trim());
  return response.value.filter((data) =>
    keywordsArray.some((keyword) =>
      data.title.includes(keyword) || (data.text && data.text.includes(keyword))
    )
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
