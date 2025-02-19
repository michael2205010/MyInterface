<template>
  <section class="flex items-center justify-center bg-white-100">
    <div class="w-full lg:w-4/5 flex items-center justify-center">
      <img class="w-1/2 hidden lg:block" src="/image/login.jpg" alt="login" />
      <LoginForm v-if="formLogin.status == 'login'" :formLogin="formLogin" @goResetPw="goResetPw" />
      <ResetPasswordForm v-if="formLogin.status == 'resetPw'" :formLogin="formLogin" @goLogin="goLogin" />
    </div>
  </section>
</template>

<script setup>
import ResetPasswordForm from "./components/resetPw.vue";
import LoginForm from "./components/login.vue";

const formLogin = reactive({
  status: "login",
  userName: "",
  password: "",
});

function goResetPw() {
  console.log("忘記密碼");
  formLogin.status = "resetPw";
}

function goLogin() {
  console.log("返回登入");
  formLogin.status = "login";
}
</script>