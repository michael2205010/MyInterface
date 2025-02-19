<template>
  <div class="flex items-end relative">
    <!-- <div class="w-16 px-1 py-1 cursor-pointer flex items-center m-1 rounded-full btn-primary" v-if="!props.isLogin">
      <i class="mdi i-mdi-user text-xl"></i>
      <router-link to="/login" class="text-sm">登入</router-link>
    </div> -->
    <logout-timer :is-login="props.isLogin"></logout-timer>
    <div class="drawer drawer-end basis-4">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isOpen"  aria-hidden="true"/>
      <label for="my-drawer" class="btn bg-transparent border-0 text-3xl z-50 rounded-full h-9 min-h-4 px-1" :aria-label="isOpen?'關閉sidebar':'開啟sidebar'">
        <template v-if="!isOpen">
          <i class="mdi i-mdi-account-circle text-primary" aria-hidden="true" v-if="isLogin"></i>
          <i class="mdi i-mdi-view-headline text-primary" aria-hidden="true" v-else></i>
        </template>
        <i class="mdi i-mdi-times text-primary" v-else></i>
      </label>
      <div class="drawer-side z-40">
        <label for="my-drawer" aria-hidden="true" class="drawer-overlay"></label>
        <aside class="menu bg-green-50 text-base-content min-h-full w-64 py-8 px-4" :aria-expanded="isOpen">
          <div class="w-28 p-2 flex items-center m-4 rounded-full btn-primary group cursor-pointer" v-if="!props.isLogin" @click="isOpen=false" role="button" aria-label="登入/註冊">
            <i class="mdi i-mdi-user text-xl mr-1 group-hover:text-white"></i>
            <router-link to="/login" class="text-sm">登入/註冊</router-link>
          </div>
          <template v-if="props.isLogin">
            <div class="flex flex-col">
              <div class="flex items-center gap-x-2">
                <i class="mdi i-mdi-account-circle-outline  text-xl cursor-pointer size-10 shrink-0 rounded-full"></i>
              </div>
            </div>
          </template>
          <nav>
            <template v-if="props.isLogin">
              <!-- backManagement -->
              <div class="divider divider-primary mt-2 mb-1">常客中心</div>
              <ul>
                <li>
                  <router-link @click="isOpen=false" to="/backManagement/rideHistory"><i class="mdi i-mdi-google-analytics text-xl"></i>回饋統計</router-link>
                </li>
                <li>
                  <router-link @click="isOpen=false" to="/backManagement/myCard"><i class="mdi i-mdi-credit-card-outline text-xl"></i>我的票卡</router-link>
                </li>
                <li>
                  <router-link @click="isOpen=false" to="/backManagement/userEdit"><i class="mdi i-mdi-pen text-xl"></i>基本資料修改</router-link>
                </li>
              </ul>
              <div class="divider divider-primary mt-2 mb-1"></div>
            </template>
            <ul>
              <li>
                <router-link @click="isOpen=false" to="/regular-customer-discount">
                  <i class="mdi i-mdi-currency-usd text-xl"></i>常客優惠方案</router-link>
              </li>
              <li>
                <router-link @click="isOpen=false" to="/faq">
                  <i class="mdi i-mdi-help-box-outline text-xl"></i>回饋說明</router-link>
              </li>
              <li>
                <router-link @click="isOpen=false" to="/backManagement/rideHistory">
                  <i class="mdi i-mdi-google-analytics text-xl"></i>排碳分析</router-link>
              </li>
              <div v-if="props.isLogin" class="divider divider-primary mt-2 mb-1"></div>
              <li v-if="props.isLogin">
                <a @click="handleLogOut()">
                  <i class="mdi i-mdi-exit-to-app text-xl"></i>登出</a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  </div>
</template>


<script setup>

const props = defineProps({
  isLogin: Boolean,
})

const logOut = inject('logout');
const isOpen = ref(false);

const handleLogOut = () => {
  logOut();
  isOpen.value = false;
};
</script>
