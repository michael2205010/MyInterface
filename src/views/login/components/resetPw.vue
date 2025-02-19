<template>
  <form class="bg-white p-6 w-full lg:w-1/2 " @submit.prevent="handleResetPw">
    <h1 class="title-2">重新設定密碼</h1>

    <div v-if="!verification.status" class="form-control mb-4">
      <label class="label" for="email">
        <span class="label-text">信箱</span>
      </label>
      <input id="email" type="text" v-model="formResetPw.email" placeholder="請輸入信箱" class="input input-bordered flex-grow" required />
      <div v-if="!isValidEmail" class="text-red-500 mt-2">
        請輸入有效的信箱地址
      </div>
      <label class="label" for="emailVerify">
        <span class="label-text">驗證碼<span class="text-red-500">*</span></span>
      </label>
      <div class="flex flex-nowrap justify-between">
        <input id="emailVerify" type="text" v-model="formResetPw.verificationCode" placeholder="輸入6位驗證碼" class="input input-bordered w-full mr-3" required />
        <button v-if="formResetPw.isSendVerificationCode" @click.prevent="handleVerification" type="button" class="btn btn-primary w-1/4 mr-3">
          驗證
        </button>
        <button @click.prevent="sendVerificationCode" type="button" class="btn btn-primary w-auto" :disabled="isCounting || isLoadingSendCode">
          <span v-if="isCounting">{{ timeLeft }} 秒後可重新傳送</span>
          <span v-else-if="isLoadingSendCode" class="loading loading-spinner"></span>
          <span v-else>取得驗證碼</span>
        </button>
      </div>
    </div>

    <div v-if="verification.status" class="form-control mb-4">
      <label class="label" for="newpassword">
        <span class="label-text">設定新密碼<span class="text-red-500">*</span></span>
      </label>
      <input id="newpassword" type="password" v-model="formResetPw.newPw" placeholder="***********" class="input input-bordered w-full" required />
      <span class="text-xs text-gray-500">請輸入12-30個字元，內容須包含英文大寫、英文小寫、數字及符號4種類型字元。</span>
      <div class="form-control mb-4">
        <label class="label" for="newpasswordCheck">
          <span class="label-text">密碼確認<span class="text-red-500">*</span></span>
        </label>
        <input id="newpasswordCheck" type="password" v-model="formResetPw.newPwCheck" placeholder="再次輸入密碼" class="input input-bordered w-full" required />
      </div>
      <div class="text-red-500" v-if="formResetPw.newPw != formResetPw.newPwCheck">密碼不一致</div>
      <button type="submit" class="btn btn-primary w-full mb-3">送出</button>
    </div>

    <div class="flex justify-between items-center text-sm text-gray-500 mb-4">
      <a href="#" @click.prevent="goLogin" class="hover:underline">返回登入</a>
      <router-link to="/registration" class="hover:underline">註冊</router-link>
    </div>
  </form>
  <alert-modal :isVisible="showModal" :content="alertModal.content" :goToName="goToName" @update:visible="showModal = $event" @goTo="goLogin" />
</template>
  
<script setup>
import { authentication } from "@/requests/requests.js";

const props = defineProps({
  formLogin: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["goLogin", "resetPw"]);
const goToName = ref('登入');
const showModal = ref(false);
const alertModal = reactive({
  content: "",
});

const formResetPw = reactive({
  email: "",
  verificationCode: "",
  isSendVerificationCode: false,
  newPw: "",
  newPwCheck: "",
});

const verification = reactive({
  status: false,
});

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = computed(() => emailPattern.test(formResetPw.email));

function handleVerification() {
  authentication.forgetPwCodeCheck(formResetPw.email, formResetPw.verificationCode).then((res) => {
    console.log(res.data);
    verification.status = true;
  }).catch((a) => {
    verification.status = false;
    alertModal.content = a.response.data;
    showModal.value = true;
    goToName.value = "確認";
  });
}

const isLoadingSendCode = ref(false);
function sendVerificationCode() {
  if (!formResetPw.email) {
    alert("請輸入聯絡信箱");
    return;
  }
  if (!isValidEmail.value) {
    alert("請輸入有效的信箱地址");
    return;
  }
  console.log("發送驗證碼中...");
  isLoadingSendCode.value = true;
  authentication.forgetPwVerifyCode(formResetPw.email).then((a) => {
    console.log(a.data);
    isLoadingSendCode.value = false;
    startCountdown();
  });
  formResetPw.isSendVerificationCode = true;
}


function goLogin() {
  if (goToName.value === "登入") {
    emit("goLogin");
  } else {
    showModal.value = false;
  }
}

function handleResetPw() {
  if (formResetPw.newPw !== formResetPw.newPwCheck) {
    alert("密碼不一致");
    return;
  }
  authentication.forgetPw({ email: formResetPw.email, verifyCode: formResetPw.verificationCode, newPw: formResetPw.newPw }).then((res) => {
    alertModal.content = "重設密碼成功！";
    showModal.value = true;
    goToName.value = "登入";
  }).catch((a) => {
    alertModal.content = a.response.data;
    showModal.value = true;
  });

}

// 計時器
const timeLeft = ref(60);
const isCounting = ref(false);
let timer = null;

// 開始倒數計時
function startCountdown() {
  if (isCounting.value) return;

  isCounting.value = true;
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer);
      isCounting.value = false;
      timeLeft.value = 60;
    }
  }, 1000);
};
</script>