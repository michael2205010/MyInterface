<template>
  <div class="flex justify-center items-center">
    <section class="flex flex-col justify-center shadow-lg mt-5 w-5/6" aria-label="正在發生的事">
      <div class="tabs tabs-box p-0 border border-primary" role="tablist">
        <div class="tab md:text-lg py-4 " role="tab">
          正在發生的事
        </div>
      </div>
      <div class="mt-1 p-4 bg-white rounded-none border border-primary shadow-sm">
        <ul class="table-list mb-4 table-hover-color" role="list">
          <li class="theader">
            <time class="cell date">日期</time>
            <div class="cell title">描述</div>
          </li>
          <li v-for="(item, index) in props.news" class="trow hover:border-2 hover:border-primary" @click="goToNews(item.id)" :key="index" role="listitem">
            <div class="cell date">{{item.createTime.split("T")[0] + " " + item.createTime.split("T")[1]}}</div>
            <div class="cell title">{{ item.content }}</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
  
<script setup>
const props = defineProps({
  news: {
    type: Array,
    required: true,
  },
});
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