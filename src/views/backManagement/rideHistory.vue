<template>
  <breadcrumbs :breadcrumbs="['回饋統計']" />
  <h1 class="title-1">回饋統計</h1>
  <div class="w-full space-y-4" v-if="responseCards.length > 0">
    <div class="pt-4 flex flex-col space-y-2">
      <div class="form-row">
        <label for="cardSelect">選擇卡片</label>
        <select id="cardSelect" v-model="activeCard" class="select">
          <option disabled value="">請選擇</option>
          <option v-for="card in responseCards" :value="card">{{ card.name }}</option>
        </select>
      </div>
      <div class="form-row">
        <label>時間區間</label>
        <div>
          <input id="year" type="number" min="2024" max="2030" class="input input-bordered w-14 box-content mr-1" v-model="year" />
          <label for="year">年</label>
        </div>
        <div>
          <input id="month" type="number" min="01" max="12" class="input input-bordered w-8 box-content mr-1" v-model="month" @blur="formatMonth" />
          <label for="month">月</label>
        </div>
      </div>
      <div class="form-row">
        <button class="btn btn-primary" @click="search()">查詢</button>
      </div>
    </div>
    <section v-if="response.length > 0">
      <tab-transportation :datas="response" v-model:activeTab="activeTab">
      </tab-transportation>

      <dl class="grid sm:grid-cols-[200px_1fr] gap-4 mx-auto my-4">
        <div class="flex flex-col rounded-lg bg-amber-400 p-4 text-center">
          <div class="text-4xl font-extrabold text-gray-800">{{filterResponse.length}}</div>
          <h3 class="order-last text-md font-medium text-gray-800">當月累積乘車次數</h3>
        </div>
        <div class="grid grid-cols-[3fr_24px_3fr_24px_4fr] grid-rows-2 justify-center items-center rounded-lg bg-blue-400 p-4 text-center md:max-w-[440px] ">
          <div class="text-3xl font-extrabold text-gray-800">123</div>
          <div class="text-3xl">+</div>
          <div class="text-3xl font-extrabold text-gray-800">100</div>
          <div class="text-3xl">=</div>
          <div class="text-4xl font-extrabold text-gray-800">{{sumMoney}}</div>
          <div class="text-sm font-medium text-gray-800">基本回饋</div>
          <div></div>
          <div class="text-sm font-medium text-gray-800">早鳥加碼回饋</div>
          <div></div>
          <h3 class="text-sm font-medium text-gray-800">回饋金額</h3>
        </div>
      </dl>
      <div class="w-full">
        <table-ride-history-month :datas="filterResponse" />
        <table v-if="false" class="table-auto w-full border-collapse">
          <thead class="bg-primary">
            <tr>
              <th v-for="item in listYHeader" class="px-4 py-2 text-left">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedList" :key="index" class="border-b border-accent">
              <td>{{ index + 1 }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.accumulation }}</td>
              <td>{{ item.rebate }}</td>
              <td>{{ item.carbonReduction }}</td>
              <td>{{ item.cardType }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <p v-else class="text-center">查無資料</p>
  </div>
  <p v-else class="article">無票卡資料，請先到「<router-link to="/backManagement/myCard">我的票卡</router-link>」新增</p>
</template>

<script setup>
import tableRideHistoryMonth from "./components/tableRideHistoryMonth.vue";
import tabTransportation from "./components/tabTransportation.vue";
import { rideHistory, myCard } from "@/requests/requests.js";


const responseCards = ref([]);
const activeCard = ref({});
const activeTab = ref('');
const year = ref('2025');
const month = ref('1');
const response = ref([]);


onMounted(async () => {
  // const previousMonth = helperDatetime.dayjs().subtract(1, 'month');
  // year.value = previousMonth.year();
  // month.value = previousMonth.month() + 1;

  const requests = await myCard.getMyCard();
  responseCards.value = requests.data;
  if (responseCards.value.length > 0) {
    activeCard.value = responseCards.value[0];
  }
});


const formatMonth = () => {
  if (month.value.length === 1) {
    month.value = '0' + month.value;
  }
};


const filterResponse = computed(() => {
  return response.value.filter(item => {
    return item.transportation === activeTab.value;
  });
});

const sumMoney = computed(() => {
  return filterResponse.value.reduce((sum, a) => sum + a.amount, 0);
});

function search() {
  rideHistory.getMonth(activeCard.value.id, year.value, month.value)
    .then((res) => {
      response.value = res.data;
    })
    .catch((err) => {
      response.value = [];
    });
}

</script>
