<template>
  <div>
    <breadcrumbs :breadcrumbs="['最新消息']" />
    <section class="flex flex-col items-center gap-2 mb-6">
      <div class="px-4 pb-8" v-if="response.text">
        <h1 class="title-3">{{ response.title }}
        </h1>
        <p class="text-gray-600 py-2">
          📅
          <time>{{ new Date(response.createTime).toLocaleString('sv') }}</time>
        </p>
        <vue-markdown class="px-6 pt-2 md-article" :source="response.text" />
      </div>
      <router-link to="/" class="btn btn-primary btn-wide">
        返回
      </router-link>
    </section>
  </div>
</template>

<script setup>
import { news } from "@/requests/requests.js";
import VueMarkdown from 'vue-markdown-render';

const props = defineProps({
  id: String
})

const response = ref("");
onMounted(async () => {
  const _response = await news.getDetail(props.id);
  response.value = _response.data;
});

</script>


<style scoped>
.title-3{
  font-weight: 700; 
  font-size: 1.5rem; 
  line-height: 2rem; 
  border-style: solid; 
  border-bottom-width: 2px; 
  padding-top: 1rem; 
  padding-bottom: 1rem; 
}
</style>