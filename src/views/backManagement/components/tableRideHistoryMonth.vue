<template>
  <h3 class="border border-green-900 bg-green-700 text-white font-extrabold p-2 mb-0">搭乘紀錄</h3>
  <div class="row header">
    <span class="no">編號</span>
    <time>搭乘時間</time>
    <span class="station">上/下車站點</span>
    <span class="money">交易金額</span>
  </div>
  <div class="row" v-for="(item, index) in props.datas" :key="index">
    <span class="no">{{ (index + 1) }}</span>
    <time>
      <i class="mdi i-mdi-calendar-month"></i>{{ formatDatetime(item.time) }}
    </time>

    <span class="station">
      <i class="mdi i-mdi-map-marker"></i>
      <span class="city md:mr-2">{{ item.city }}</span>{{ item.boarding }} - {{ item.getOff }}
    </span>
    <!-- {{ cardType2Chinese(item.cardType) }} -->
    <span class="money">
      <i class="mdi i-mdi-credit-card"></i>
      <div>交易金額</div>
      ${{ item.amount }}</span>
  </div>
</template>


<script setup>

const props = defineProps({
  datas: {
    type: Array,
    required: true,
  }
});


const formatDatetime = (datetime) => {
  if (datetime)
    return dayjs(datetime).format("YYYY-MM-DD HH:mm");
  return "";
};


</script>


<style scoped >
@reference "@/assets/css/main.css";
.row {
  display: grid;
  grid-template-areas:
    "side lv1"
    "side lv2"
    "side lv3";
  grid-template-columns: 36px 3fr;
  grid-template-rows: auto auto auto;
  gap: 0px;
  border: 1px solid var(--color-green-900);
  background-color: var(--color-green-50);
  padding-top: 0.5rem; 
  padding-bottom: 0.5rem; 
  padding-right: 0.5rem;

  &.header {
    display: none;
  }


  .no {
    grid-area: side;
    @apply flex items-center justify-center;
  }

  time {
    grid-area: lv1;
  }

  .city {
    @apply badge badge-primary w-20;
    grid-area: lv2;
    padding-inline: 0;
  }

  .station {
    grid-area: lv2;
  }

  .card-type {
    grid-area: lv3;
  }

  .money {
    grid-area: lv3;
  }
  time, .station, .money{
    @apply flex items-center gap-0.5;
  }
}

@media (min-width: 769px) {
  .row {
    grid-template-areas: none;
    @apply grid-rows-none grid-cols-[60px_1fr_2fr_92px] items-center gap-x-2 border-b border-t border-green-600 bg-white py-4;

    &.header {
      @apply grid bg-green-50 font-extrabold;
    }

    .mdi, div, .money div {
      display: none;
    }

    .no,
    .money,
    .card-type,
    .station,
    .city,
    time {
      grid-area: auto;
    }
  }

}
</style>
