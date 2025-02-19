<template>
  <section class="flex items-center justify-center min-h-screen ">
    <form class="px-2 sm:px-16 w-full space-y-4" @submit.prevent="handleSubmit">
      <h1 class="title-2">註冊</h1>
      <div>
        <label class="label" for="username">
          <span class="label-text">帳號<span class="text-red-500">*</span></span>
        </label>
        <input id="username" type="text" v-model="form.username" placeholder="輸入帳號" class="input input-bordered w-full" required />
      </div>
      <div>
        <label class="label" for="password">
          <span class="label-text">密碼<span class="text-red-500">*</span></span>
        </label>
        <input id="password" type="password" v-model="form.password" placeholder="輸入密碼" class="input input-bordered w-full" required />
        <span class="text-xs text-gray-500 mt-1">請輸入12-30個字元，內容須包含英文大寫、英文小寫、數字及符號4種類型字元。</span>
        <div v-if="!isValidPw" class="text-red-500 mt-2">
          請輸入有效的密碼
        </div>
      </div>
      <div>
        <label class="label" for="uniformNumber">
          <span class="label-text">身分證字號<span class="text-red-500">*</span></span>
        </label>
        <input id="uniformNumber" type="text" v-model="form.uniformNumber" placeholder="輸入身分證字號" class="input input-bordered w-full" required />
        <div v-if="!isValidUniformNumber" class="text-red-500 mt-2">
          請輸入有效的身分證字號
        </div>
      </div>
      <div>
        <label class="label" for="birthday">
          <span class="label-text">生日<span class="text-red-500">*</span></span>
        </label>
        <input id="birthday" type="date" v-model="form.birthday" class="input input-bordered w-full" required />
      </div>
      <div>
        <label class="label" for="name">
          <span class="label-text">姓名<span class="text-red-500">*</span></span>
        </label>
        <input id="name" type="text" v-model="form.name" placeholder="輸入姓名" class="input input-bordered w-full" required />
      </div>
      <div>
        <label class="label" for="email">
          <span class="label-text">信箱<span class="text-red-500">*</span></span>
        </label>
        <input id="email" type="email" v-model="form.email" placeholder="輸入信箱" class="input input-bordered w-full" required />
        <div v-if="!isValidEmail" class="text-red-500 mt-2">
          請輸入有效的信箱地址
        </div>
        <label class="label" for="emailVerify">
          <span class="label-text">驗證碼<span class="text-red-500">*</span></span>
        </label>
        <div class="flex flex-nowrap justify-between">
          <input id="emailVerify" type="text" v-model="form.emailVerify" placeholder="輸入驗證碼" class="input input-bordered w-full mr-4" required />
          <button @click.prevent="sendEmailVerifyCode" type="button" class="btn btn-primary w-auto" :disabled="isCounting || isLoadingSendCode">
            <span v-if="isCounting">{{ timeLeft }} 秒後可重新傳送</span>
            <span v-else-if="isLoadingSendCode" class="loading loading-spinner"></span>
            <span v-else>取得驗證碼</span>
          </button>
        </div>
      </div>
      <div>
        <label class="label" for="phone">
          <span class="label-text">電話<span class="text-red-500">*</span></span>
        </label>
        <input id="phone" type="phone" v-model="form.phoneNumber" placeholder="輸入手機號碼" class="input input-bordered w-full" required />
        <div v-if="!isValidPhoneNumber" class="text-red-500 mt-2">
          請輸入有效的手機門號
        </div>
        <label class="label" for="phoneNumberVerify">
          <span class="label-text">驗證碼<span class="text-red-500">*</span></span>
        </label>
        <div class="flex flex-nowrap justify-between">
          <input id="phoneNumberVerify" type="text" v-model="form.phoneNumberVerify" placeholder="輸入驗證碼" class="input input-bordered w-full mr-4" required />
          <button @click.prevent="sendPhoneVerifyCode" type="button" class="btn btn-primary w-auto" :disabled="isCounting || isLoadingPhoneCode">
            <span v-if="isCounting">{{ timeLeft }} 秒後可重新傳送</span>
            <span v-else-if="isLoadingPhoneCode" class="loading loading-spinner"></span>
            <span v-else>取得驗證碼</span>
          </button>
        </div>
      </div>
      <div>
        <label class="label" for="career">
          <span class="label-text">職業<span class="text-red-500">*</span></span>
        </label>
        <input id="career" type="text" v-model="form.career" placeholder="輸入職業" class="input input-bordered w-full" required />
      </div>
      <div>
        <label class="label" for="residence">
          <span class="label-text">居住縣市<span class="text-red-500">*</span></span>
        </label>
        <input id="residence" type="text" v-model="form.residence" placeholder="居住縣市" class="input input-bordered w-full" required />
      </div>
      <div>
        <label class="cursor-pointer flex items-center" for="agreeTerms1">
          <input id="agreeTerms1" type="checkbox" v-model="form.agreeTerms1" class="checkbox checkbox-primary" required />
          <span class="label-text ml-2">
            我已閱讀並同意
            <a href="#" class="text-primary underline">條款與隱私政策</a>
          </span>
        </label>
      </div>
      <div>
        <label class="cursor-pointer flex items-center" for="agreeTerms2">
          <input id="agreeTerms2" type="checkbox" v-model="form.agreeTerms2" class="checkbox checkbox-primary" required />
          <span class="label-text ml-2">
            XXXXX
            <a href="#" class="text-primary underline">條款</a>
          </span>
        </label>
      </div>
      <button type="submit" class="btn btn-primary w-full">註冊</button>
    </form>
  </section>
  <AlertModal :isVisible="showModal" :content="alertModal.content" :goToName="goToName" @update:visible="showModal = $event" @goTo="goLogin" />
</template>

<script setup>
import { registration } from "@/requests/requests.js";
const form = reactive({
  name: "",
  email: "",
  emailVerify: "",
  username: "",
  password: "",
  uniformNumber: "",
  birthday: "",
  phoneNumber: "",
  phoneNumberVerify: "",
  career: "",
  residence: "",
  agreeTerms1: false, // 同意條款與隱私政策
  agreeTerms2: false, // 同意條款與隱私政策
});
const router = useRouter();
const showModal = ref(false);
const alertModal = reactive({
  content: "",
});

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = computed(() => emailPattern.test(form.email));

const phonePattern = /^09\d{8}$/;
const isValidPhoneNumber = computed(() => phonePattern.test(form.phoneNumber));

const pwRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{12,30}$/;
const isValidPw = computed(() => pwRegex.test(form.password));

const uniformNumberPattern = /^[A-Za-z][12]\d{8}$/;
const isValidUniformNumber = computed(() => uniformNumberPattern.test(form.uniformNumber));

function isUniformNumberPrecise(id) {
  const regex = /^[A-Z][12]\d{8}$/;
  if (!regex.test(id)) {
    return false; // 不符合格式
  }

  const cityCodes = {
    A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, G: 16, H: 17, I: 34, J: 18,
    K: 19, L: 20, M: 21, N: 22, O: 35, P: 23, Q: 24, R: 25, S: 26, T: 27,
    U: 28, V: 29, W: 32, X: 30, Y: 31, Z: 33
  };

  const idArr = id.split('');
  const cityCode = cityCodes[idArr[0]];

  // 檢查字母所對應的數字
  const numArray = [Math.floor(cityCode / 10), cityCode % 10, ...idArr.slice(1, -1).map(n => parseInt(n))];

  // 加權檢查
  const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1];
  let sum = numArray.reduce((acc, val, index) => {
    let weightedVal = val * weights[index];
    return acc + (weightedVal > 9 ? weightedVal - 9 : weightedVal);
  }, 0);

  // 檢查是否符合規範
  return sum % 10 === 0;
}

function handleSubmit() {
  if (!form.agreeTerms1 || !form.agreeTerms2) {
    alert("請同意條款與隱私政策");
    return;
  }
  if (!isValidUniformNumber) {
    alert("請輸入有效的身分證字號");
    return;
  }
  registration.register(form).then(() => {
    alertModal.content = "註冊成功，請重新登入!";
    showModal.value = true;
    goToName.value = "登入";
  }).catch((a) => {
    alertModal.content = a.response.data;
    showModal.value = true;
    goToName.value = "重新註冊";
  });
}

const isLoadingEmailCode = ref(false);
function sendEmailVerifyCode() {
  if (!form.email) {
    alert("請輸入聯絡信箱");
    return;
  }
  if (!isValidEmail.value) {
    alert("請輸入有效的信箱地址");
    return;
  }
  console.log("發送驗證碼中...");
  isLoadingEmailCode.value = true;
  registration.getEmailVerifyCode(form.email).then(() => {
    isLoadingEmailCode.value = false;
    alertModal.content = a.response.data;
    showModal.value = true;
    goToName.value = "確認";
  }).catch((a) => {
    isLoadingEmailCode.value = false;
    alertModal.content = a.response.data;
    showModal.value = true;
    goToName.value = "返回註冊";
  });
  startCountdown1();
}

const isLoadingPhoneCode = ref(false);
function sendPhoneVerifyCode() {
  if (!form.phoneNumber) {
    alert("請輸入聯絡電話");
    return;
  }
  if (!isValidPhoneNumber.value) {
    alert("請輸入有效的手機門號");
    return;
  }
  console.log("發送驗證碼中...");
  isLoadingPhoneCode.value = true;
  registration.getPhoneVerifyCode(form.phoneNumber).then(() => {
    isLoadingPhoneCode.value = false;
    alertModal.content = a.response.data;
    showModal.value = true;
    goToName.value = "確認";
  }).catch((a) => {
    isLoadingPhoneCode.value = false;
    alertModal.content = a.response.data;
    showModal.value = true;
    goToName.value = "返回註冊";
  });
  startCountdown2();
}

const goToName = ref("登入");
function goLogin() {
  if (goToName.value === "登入") {
    router.push("/login");
  } else {
    router.push("/registration");
  }
}

// Email重新發送計時器
const timeLeft1 = ref(60);
const isCounting1 = ref(false);
let timer1 = null;

// 開始倒數計時
function startCountdown1() {
  if (isCounting1.value) return;

  isCounting1.value = true;
  timer1 = setInterval(() => {
    if (timeLeft1.value > 0) {
      timeLeft1.value--;
    } else {
      clearInterval(timer1);
      isCounting1.value = false;
      timeLeft1.value = 60;
    }
  }, 1000);
};

// 簡訊重新發送計時器
const timeLeft2 = ref(60);
const isCounting2 = ref(false);
let timer2 = null;

// 開始倒數計時
function startCountdown2() {
  if (isCounting2.value) return;

  isCounting2.value = true;
  timer2 = setInterval(() => {
    if (timeLeft2.value > 0) {
      timeLeft2.value--;
    } else {
      clearInterval(timer2);
      isCounting2.value = false;
      timeLeft2.value = 60;
    }
  }, 1000);
};
</script>