<template>
  <div role="tablist" class="tabs-bordered grid" :class="gridClass">
    <a role="tab" v-for="item in transportTimes" :class="['tab-1', { 'tab-active': tabName === item.transportation }]" @click="setActiveTab(item.transportation)">
      {{ item.transportation }}
      <small class="hidden sm:inline">({{ item.count }})</small>
    </a>
  </div>
</template>


<script setup>
const tabName = ref('');
const emit = defineEmits(['update:activeTab']);

const props = defineProps({
  datas: {
    type: Array,
    required: true,
  },
});

const transportTimes = computed(() => {
  if (props.datas?.length == 0)
    return [];

  // 計算出現次數
  const countMap = props.datas.reduce((acc, { transportation }) => {
    acc[transportation] = (acc[transportation] || 0) + 1;
    return acc;
  }, {});

  // 排序
  const ans = Object.entries(countMap)
    .sort((a, b) => b[1] - a[1])
    .map(([transportation, count]) => ({ transportation, count }));

  tabName.value = ans[0].transportation;
  return ans;
})

let gridClass=computed(()=>{
  return {
    'grid-cols-1': transportTimes.value.length == 1,
    'grid-cols-2': transportTimes.value.length == 2,
    'grid-cols-3': transportTimes.value.length == 3,
    'grid-cols-4': transportTimes.value.length == 4,
  }
})

watch(
  tabName,
  (newValue, oldValue) => {
    emit('update:activeTab', newValue);
  },
  { immediate: true }
)


function setActiveTab(data) {
  tabName.value = data;
}

</script>