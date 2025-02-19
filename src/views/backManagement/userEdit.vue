<template>
  <breadcrumbs :breadcrumbs="['基本資料修改']" />
  <h1 class="title-1">基本資料修改</h1>
  <div class="w-full">
    <form class="md:w-2/3 m-auto space-y-4" @submit.prevent="handleSubmit">
      <div>
        <label class="label" for="userName">
          <span class="label-text">帳號<span class="text-red-500">*</span></span>
        </label>
        <input id="uesrname" type="text" v-model="form.userName" placeholder="輸入帳號" class="input input-bordered w-full" required />
      </div>
      <div>
        <label class="label" for="password">
          <span class="label-text">密碼</span>
        </label>
        <input id="password" type="password" v-model="form.password" placeholder="********" class="input input-bordered w-full" />
        <span class="text-xs text-gray-500 mt-1">請輸入12-30個字元，內容須包含英文大寫、英文小寫、數字及符號4種類型字元。</span>
        <div v-if="!isValidPw && form.password" class="text-red-500 mt-2">
          請輸入有效的密碼
        </div>
      </div>
      <div>
        <label class="label" for="uniformNumber">
          <span class="label-text">身分證字號</span>
        </label>
        <input id="uniformNumber" type="text" v-model="form.uniformNumber" placeholder="輸入身分證字號" class="input input-bordered w-full" disabled />
      </div>
      <div>
        <label class="label" for="birthday">
          <span class="label-text">生日<span class="text-red-500">*</span></span>
        </label>
        <input id="birthday" type="date" v-model="form.birthday" class="input input-bordered w-full" required disabled/>
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
        <label v-if="isEmailChange" class="label" for="emailVerify">
          <span class="label-text">驗證碼<span class="text-red-500">*</span></span>
        </label>
        <div v-if="isEmailChange" class="flex flex-nowrap justify-between">
          <input id="emailVerify" type="text" v-model="form.emailVerify" placeholder="請輸入驗證碼" class="input input-bordered w-full mr-4" required />
          <button @click.prevent="sendEmailVerificationCode" type="button" class="btn btn-primary w-auto" :disabled="isCounting1 || isLoadingSendEmailCode">
            <span v-if="isLoadingSendEmailCode" class="loading loading-spinner"></span>
            <span v-else-if="isCounting1">{{ timeLeft1 }} 秒後可重新傳送</span>
            <span v-else>取得驗證碼</span>
          </button>
        </div>
        <div class="text-green-900" v-else-if="form.email">✔ 驗證成功</div>
      </div>
      <div>
        <label class="label" for="phone">
          <span class="label-text">電話<span class="text-red-500">*</span></span>
        </label>
        <input id="phone" type="phone" v-model="form.phoneNumber" placeholder="輸入手機號碼" class="input input-bordered w-full" required />
        <div v-if="!isValidPhoneNumber" class="text-red-500 mt-2">
          請輸入有效的手機門號
        </div>
        <label v-if="isPhoneChange" class="label" for="phoneNumberVerify">
          <span class="label-text">驗證碼<span class="text-red-500">*</span></span>
        </label>
        <div v-if="isPhoneChange" class="flex flex-nowrap justify-between">
          <input id="phoneNumberVerify" type="text" v-model="form.phoneNumberVerify" placeholder="請輸入驗證碼" class="input input-bordered w-full mr-4" required />
          <button @click.prevent="sendPhoneVerificationCode" type="button" class="btn btn-primary w-auto" :disabled="isCounting2 || isLoadingSendPhoneCode">
            <span v-if="isLoadingSendPhoneCode" class="loading loading-spinner"></span>
            <span v-else-if="isCounting2">{{ timeLeft2 }} 秒後可重新傳送</span>
            <span v-else>取得驗證碼</span>
          </button>
        </div>
        <div class="text-green-900" v-else>✔ 驗證成功</div>
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
      <button type="submit" class="btn btn-primary w-full p-3">送出</button>
    </form>
  </div>
  <AlertModal :isVisible="showModal" :content="alertModal.content" :goToName="goToName" @update:visible="showModal = $event" @goTo="goLogin" />
</template>
  
<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { user } from "@/requests/requests.js";

const originalForm = reactive({
  id: "",
  name: "",
  email: "",
  emailVerify: "",
  userName: "",
  password: "",
  uniformNumber: "",
  issueDate: "",
  issueStatus: "",
  birthday: "",
  phoneNumber: "",
  phoneNumberVerify: "",
  career: "",
  residence: "",
  agreeTerms1: true, // 同意條款與隱私政策
  agreeTerms2: true, // 同意條款與隱私政策
});
const form = reactive({
  id: "",
  name: "",
  email: "",
  emailVerify: "",
  userName: "",
  password: "",
  uniformNumber: "",
  birthday: "",
  phoneNumber: "",
  phoneNumberVerify: "",
  agreeTerms1: true, // 同意條款與隱私政策
  agreeTerms2: true, // 同意條款與隱私政策
});
onMounted(() => {
  user.getUser().then((res) => {
    originalForm.id = res.data.id;
    originalForm.name = res.data.name;
    originalForm.email = res.data.email;
    originalForm.userName = res.data.userName;
    originalForm.uniformNumber = res.data.uniformNumber;
    originalForm.birthday = res.data.birthday.split('T')[0];
    originalForm.phoneNumber = res.data.phoneNumber;
    form.id = res.data.id;
    form.name = res.data.name;
    form.email = res.data.email;
    form.userName = res.data.userName;
    form.uniformNumber = res.data.uniformNumber;
    form.birthday = res.data.birthday.split('T')[0];
    form.phoneNumber = res.data.phoneNumber;
  });
});
const isEmailChange = ref(false);
const isPhoneChange = ref(false);
watch(
  () => form.email,
  (newEmail) => {
    if (newEmail !== originalForm.email) {
      isEmailChange.value = true;
    } else {
      isEmailChange.value = false;
    }
  },
);
watch(
  () => form.phoneNumber,
  (newPhone) => {
    if (newPhone !== originalForm.phoneNumber) {
      isPhoneChange.value = true;
    } else {
      isPhoneChange.value = false;
    }
  }
);

const showModal = ref(false);
const goToName = ref("確認");
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
  user.updateUser(form).then((res) => {
    if (res.status === 200) {
      alertModal.content = "修改成功!";
      showModal.value = true;
    }
  }).catch((err) => {
    alertModal.content = err.response.data;
    showModal.value = true;
  });
}

const isLoadingSendEmailCode = ref(false);
function sendEmailVerificationCode() {
  if (!form.email) {
    alert("請輸入聯絡信箱");
    return;
  }
  if (!isValidEmail.value) {
    alert("請輸入有效的信箱地址");
    return;
  }
  console.log("發送驗證碼中...");
  isLoadingSendEmailCode.value = true;
  user.getEmailVerifyCode(form.email).then((res) => {
    isLoadingSendEmailCode.value = false;
    console.log("驗證碼發送成功。");
  }).catch((err) => {
    isLoadingSendEmailCode.value = false;
    console.log("驗證碼發送失敗。");
  });
  startCountdown1();
}
const isLoadingSendPhoneCode = ref(false);
function sendPhoneVerificationCode() {
  if (!form.phoneNumber) {
    alert("請輸入聯絡電話");
    return;
  }
  if (!isValidPhoneNumber.value) {
    alert("請輸入有效的聯絡電話");
    return;
  }
  console.log("發送驗證碼中...");
  isLoadingSendPhoneCode.value = true;
  user.getPhoneVerifyCode(form.phoneNumber).then((res) => {
    isLoadingSendPhoneCode.value = false;
    console.log("驗證碼發送成功。");
  }).catch((err) => {
    isLoadingSendPhoneCode.value = false;
    console.log("驗證碼發送失敗。");
  });
  startCountdown2();
}

function goLogin() {

}

// 計時器
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

// 計時器
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