<template>
  <ul role="tablist" class="tabs tabs-border ">
    <li role="tab" :class="[' tab-1 ', { 'tab-active': props.activeTab === 1 }]" @click="setActiveTab(1)">
      悠遊卡
    </li>
    <li role="tab" :class="[' tab-1', { 'tab-active': props.activeTab === 2 }]" @click="setActiveTab(2)">
      一卡通
    </li>
    <li role="tab" :class="[' tab-1', { 'tab-active': props.activeTab === 3 }]" @click="setActiveTab(3)">
      iCash
    </li>
  </ul>
</template>


<script setup>
const props = defineProps({
  activeTab: {
    type: Number,
    default: 1
  },
});


const emit = defineEmits(['update:activeTab']);
function setActiveTab(data) {
  emit('update:activeTab', data)
}


</script>