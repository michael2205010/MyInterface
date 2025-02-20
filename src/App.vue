<template>
  <header class="px-2 border-b-2 border-primary bg-primary">
    <div class="flex justify-between items-center w-full mx-auto">
      <router-link to="/" title="回到首頁" class="flex items-center">
        <span class="bg-logo inline-block"></span>
        <h1 class="font-bold text-xl whitespace-nowrap">小海報資訊系統</h1>
      </router-link>
    </div>
  </header>
  <main class="container mx-auto px-2 md:px-0">
    <router-view />
  </main>
  <footer class="bg-primary text-primary-content p-4 mt-8">
    <div class="container-layout border-bottom border-white px-4 pt-5 pb-3 leading-8 d-block flex justify-content-between align-items-end">
      <div>
        <div>服務電話：(**)****-****</div>
        <div>服務時間：週一到週五 上午 08:30 ~ 17:30</div>
        <div>地址：**** ******************</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { analysisJwt, refreshToken } from "@/helpers/helperJWT";

const isLogin = ref(false);
const user = ref({});
const token = ref('');

onMounted(() => {
  if (localStorage.getItem('token')) {
    login();
  }
});
function login() {
  refreshToken();
  isLogin.value = true;
  token.value = localStorage.getItem('token');
  user.value = analysisJwt(token.value);
  if (user.value.exp < Date.now() / 1000) {
    logout();
  } else {
    localStorage.setItem('token.exp', user.value.exp * 1000);
  }
}
function logout() {
  isLogin.value = false;
  localStorage.removeItem('token');
  localStorage.removeItem('token.expire');
  axios.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('idleStartTIme');
}

provide('login', login);
provide('logout', logout);
</script>

<style scoped>
header {
  height: 80px;
  padding: 8px;
}
main {
  flex: 1;
}
.bg-logo {
  background: url("/image/logo.png") no-repeat;
  background-size: 4rem 4rem; /* 相對單位 */
  width: 4rem;
  height: 4rem;
}
</style>
