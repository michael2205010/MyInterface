<template>
  <form class="p-6 w-full lg:w-1/2 space-y-4" @submit.prevent="handleLogin">
    <h1 class="title-2">登入系統</h1>
    <label for="email" class="sr-only">Email</label>
    <input type="text" v-model="formLogin.userName" placeholder="請輸入帳號" class="input input-bordered w-full" required />
    <label for="password" class="sr-only">Password</label>
    <input type="password" v-model="formLogin.password" placeholder="請輸入密碼" class="input input-bordered w-full" required />
    <button type="submit" class="btn btn-primary w-full text-lg font-bold">登入</button>
    <div class="flex justify-between items-center text-sm text-gray-500">
      <a href="#" @click.prevent="goResetPw" class="hover:underline text-lg">忘記密碼</a>
      <router-link to="/registration" class="hover:underline text-lg">註冊</router-link>
    </div>
  </form>
  <AlertModal :isVisible="showModal" :content="alertModal.content" :goToName="alertModal.goToName" @update:visible="showModal = $event" @goTo="goLogin" />
</template>
  
<script setup>
import { authentication } from "@/requests/requests.js";
import { analysisJwt } from "@/helpers/helperJWT";

const router = useRouter();
const props = defineProps({
  formLogin: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["goResetPw"]);
const login = inject('login');
onMounted(() => {
  // if (localStorage.getItem('token')) {
  //   login();
  //   router.push("/");
  // }
});
function handleLogin() {
  authentication.signIn({ userName: props.formLogin.userName, password: props.formLogin.password }).then((res) => {
    let exp = analysisJwt(res.data).exp * 1000;
    localStorage.setItem("token", res.data);
    localStorage.setItem("token.expire", exp);
    login();
    router.push("/");
  }).catch((a) => {
    if (a.response.status === 400) {
      alertModal.content = "帳號密碼錯誤，請重新輸入!\n提醒您，密碼錯誤達3次將鎖定帳號。\n您可使用「忘記密碼」重新設定密碼。";
      alertModal.goToName = "確認";
      showModal.value = true;
    } else if (a.response.status === 428) {
      alertModal.content = "您的密碼已超過90天未更改，為確保帳號安全，請立即更改您的密碼，謝謝。";
      alertModal.goToName = "修改密碼";
      showModal.value = true;
    } else {
      alertModal.goToName = "確認";
      alertModal.content = a.response.data;
      showModal.value = true;
    }
  });
}
function goResetPw() {
  emit("goResetPw");
}

const showModal = ref(false);
const alertModal = reactive({
  content: "",
  goToName: "",
});
function goLogin() {
  if (alertModal.goToName === "變更密碼") {
    goResetPw();
  } else {
    router.push("/login");
  }
}
</script>