<template>
  <section class="flex flex-col items-center mx-auto md:flex-row md:justify-center md:w-5/6">
    <div class="w-full">
      <img src="/image/main-slogan.png" class="p-1 mx-auto" alt="海豹" aria-label="banner"/>
    </div>
  </section>
  <card-company />
  <News />
  <alert-modal :isVisible="showModal" :content="alertModalObj.content" :goToName="'確認'" @update:visible="showModal = $event" @goTo="goto" />
</template>

<script setup>
import News from "./components/news.vue";
import cardCompany from "./components/cardNaming.vue";

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
</script>


<style scoped>
</style>