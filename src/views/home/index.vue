<template>
  <section class="flex flex-col items-center mx-auto md:flex-row md:justify-center md:w-5/6">
    <div class="w-full">
      <img src="/image/main-slogan.png" class="min-h-28 aspect-[14/5] p-1" alt="banner" aria-label="banner"/>
    </div>
    <div class="flex flex-col justify-center flex-shrink-0 flex-grow-0 md:w-1/4">
      <img src="/image/tpass.webp" alt="tpass" class="aspect-[3/2] w-2/3 mt-2 mx-auto md:w-full" aria-label="tpass圖片"/>
      <router-link to="/info" class="mx-auto w-2/3 md:w-full">
        <img src="/image/btn-faq.png" alt="回饋說明" aria-label="回饋說明連結" class="aspect-[3/1]"/>
      </router-link>
    </div>
  </section>
  <!-- <carousel :images="['/images/b1.png']">
  </carousel> -->
  <card-company />
  <News />
  <alert-modal :isVisible="showModal" :content="alertModalObj.content" :goToName="'前往常客中心'" @update:visible="showModal = $event" @goTo="goRegularCustomerManagement" />
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
  alertModalObj.content = "會員您好! 歡迎使用本系統累積公路常客優惠回饋，欲歸戶票卡，請前往【常客中心】登載資料。\n如1/14~2/21期間您已在公路局網站成功歸戶，可於註冊次日，前往常客中心查詢歸戶結果。";
  if (isLogin.value) {
    showModal.value = true;
  }
});

function goRegularCustomerManagement() {
  router.push("/backManagement/rideHistory");
}
</script>


<style scoped>
</style>