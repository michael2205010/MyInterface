<template>
  <div v-if="props.isLogin" class="absolute top-[60px] right-[8px] w-max">
    登出倒數計時{{ timeLeft }}秒
  </div>
  <AlertModal :isVisible="showModal" :content="alertModal.content" :goToName="goToName" @update:visible="showModal = $event" @goTo="goLogin" />
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  isLogin: Boolean,
})
const idleStartTIme = ref("");
function resetCountdown() {
  localStorage.setItem('idleStartTIme', Date.now());
  idleStartTIme.value = localStorage.getItem('idleStartTIme');
}
onMounted(() => {
  window.addEventListener("mousemove", resetCountdown);
  window.addEventListener("keydown", resetCountdown);

  startCountdown();
});

const goToName = ref('重新登入');
const showModal = ref(false);
const alertModal = reactive({
  content: "您已閒置達15分鐘未有任何動作，系統自動將您登出。",
});

function goLogin() {
  if (goToName.value === "重新登入") {
    router.push("/login");
  } else {
    showModal.value = false;
  }
}
const logout = inject('logout');

// 計時器
const timeLeft = ref(900);
const isCounting = ref(false);
const timer = ref(null);
const remainingTime = ref(900);
// 開始倒數計時
function startCountdown() {
  if (isCounting.value) return;
  isCounting.value = true;
  timer.value = setInterval(() => {
    idleStartTIme.value = localStorage.getItem('idleStartTIme');
    var isLogin = localStorage.getItem('token');
    let timePassed = Math.round((new Date() - idleStartTIme.value) / 1000) < remainingTime.value ? Math.round((new Date() - idleStartTIme.value) / 1000) : remainingTime.value;
    timeLeft.value = remainingTime.value - timePassed;
    if (timeLeft.value <= 0 && isLogin) {
      localStorage.setItem('idleStartTIme', Date.now());
      logout();
      window.removeEventListener("mousemove", resetCountdown);
      window.removeEventListener("keydown", resetCountdown);
      showModal.value = true;
      alertModal.content = "您已閒置達15分鐘未有任何動作，系統自動將您登出。";
      isCounting.value = false;
    }
    if (props.isLogin && !isLogin) {
      logout();
      showModal.value = true;
      alertModal.content = "您已登出。";
    }
  }, 1000);
};
</script>
