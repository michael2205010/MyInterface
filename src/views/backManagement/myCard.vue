<template>
  <breadcrumbs :breadcrumbs="['我的票卡']" />
  <h1 class="title-1">我的票卡</h1>
  <div class="w-full space-y-4">
    <div>
      <p>活動說明:</p>
      <p>1. 可選擇歸戶悠遊卡、一卡通、iCash票卡參與常客優惠活動。</p>
      <p>2. 本活動限普通卡參加，愛心卡、學生卡...不屬於本次優惠範圍。</p>
      <p>3. 參與本活動的票卡須完成記名，才能累積優惠，票卡記名需至各票卡網站辦理。</p>
    </div>
    <tabCardType  v-model:activeTab="activeTab" />
    <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
      <card v-for="(item, index) in filterCardList" :key="index" :data="item" @save="editSave" />
    </div>
  </div>
</template>
  
<script setup>
import card from './components/card.vue';
import tabCardType from './components/tabCardType.vue';
import { myCard } from "@/requests/requests.js";


const activeTab = ref(1);
const cardList = ref([]);

onMounted(async () => {
  try {
    const response = await myCard.getMyCard();
    cardList.value = response.data || [];
  } catch (error) {
    console.error("Error fetching ticket return home list:", error);
  }
});


const editSave = async (data) => {
  var res = await myCard.updateMyCard(data);
  const response = await myCard.getMyCardList();
  if (res.data) {
    alert("編輯成功。");
    cardList.value = response.data;
  } else {
    alert("編輯失敗。");
  }
  // const index = cardList.value.findIndex((item) => item.cardNumber === data.cardNumber);
  // cardList.value[index] = data;
};

const filterCardList = computed(() => {
  if (cardList.value) {
    return cardList.value
      .filter((item) => item.type === activeTab.value)
      .sort((a, b) => {
        return new Date(a.createTime) - new Date(b.createTime);
      });
  } else {
    return [];
  }
});
</script>