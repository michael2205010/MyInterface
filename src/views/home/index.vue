<template>
  <section class="flex flex-col items-center mx-auto md:flex-row md:justify-center md:w-full">
    <img src="/image/main-slogan.png" class="mx-auto" alt="海豹" aria-label="banner"/>
    <img src="/image/main-slogan.png" class="mx-auto" alt="海豹" aria-label="banner"/>
    <img src="/image/main-slogan.png" class="mx-auto" alt="海豹" aria-label="banner"/>
  </section>
  <action @addAction="addAction"/>
  <News :news="newsList"/>
  <alert-modal :isVisible="showModal" :content="alertModalObj.content" :goToName="'確認'" @update:visible="showModal = $event" @goTo="goto" />
</template>

<script setup>
import News from "./components/news.vue";
import action from "./components/action.vue";

const router = useRouter();
const showModal = ref(false);
const alertModalObj = reactive({
  content: "",
});
const isLogin = ref(false);

onMounted(() => {
  alertModalObj.content = "歡迎光臨";
  if (isLogin.value) {
    showModal.value = true;
  }
});

function goto() {
  router.push("/");
}
const newsList = ref([]);
function addAction(action) {
  newsList.value.push({
    createTime: new Date().toString(),
    content: action,
  });
  newsList.value.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
}
</script>

<style scoped>
section {
  overflow: hidden;
}
</style>