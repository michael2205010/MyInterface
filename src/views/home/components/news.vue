<template>
  <section class="flex flex-col shadow-lg mt-8" aria-label="最新消息">
    <div class="tabs tabs-box p-0 border border-primary" role="tablist">
      <div class="tab md:text-lg py-4 " role="tab" :aria-selected="tabName === '最新消息'" :class="{ ' tab-active': tabName === '最新消息' }" @click="activeTab('最新消息')">
        最新消息
      </div>
      <div class="tab md:text-lg py-4" role="tab" :aria-selected="tabName === '公告事項'" :class="{ ' tab-active': tabName === '公告事項' }" @click="activeTab('公告事項')">
        公告事項
      </div>
      <div class="tab md:text-lg py-4" role="tab" :aria-selected="tabName === '優惠回饋'" :class="{ ' tab-active': tabName === '優惠回饋' }" @click="activeTab('優惠回饋')">
        優惠回饋
      </div>
    </div>

    <div class="mt-1 p-4 bg-white rounded-none border border-primary shadow-sm">
      <ul class="table-list mb-4 table-hover-color" role="list">
        <li class="theader">
          <time class="cell date">日期</time>
          <div class="cell title">標題</div>
        </li>
        <li v-for="(item, index) in filteredList" class="trow hover:border-2 hover:border-primary" @click="goToNews(item.id)" :key="index" role="listitem">
          <div class="cell date">{{item.createTime.split("T")[0]}}</div>
          <div class="cell title" @click="goToNews(item.id)">{{ item.title }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>
  
<script setup>
import { news } from "@/requests/requests.js";
const router = useRouter();

const response = ref([]);

const tabName = ref("最新消息");
onMounted(async () => {
  const _response = await news.getList();
  response.value = _response.data;
});

function activeTab(name) {
  tabName.value = name;
};
const filteredList = computed(() => {
  if (response.value) {
    return response.value.filter(item => item.category === tabName.value);
  } else {
    return [];
  }
});


function goToNews(id) {
  router.push({
    path: "/News/" + id
  });
}

</script>

<style scoped>
.date {
  width:180px;
  color:var(--color-green-700);
}
.tabs-box .tab {
  flex: 1;
  height: 3.5rem;
  border-radius: calc(var(--radius-field) + min(0.25rem, calc(var(--radius-field) + var(--radius-field) + var(--radius-field))));
}

@media (max-width: 992px) {
  .theader {
    display: none;
  }
  .date {
    width: 100%;
    display: block;
    padding: 8px 0 0 8px;
    font-size: small;
    border-bottom-style: none;
  }
  .title {
    width: 100%;
    display: block;
    margin-bottom: 24px;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .tab {
    height:100%;
  }
}
</style>