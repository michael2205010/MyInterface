<template>
  <div class="card shadow-xl">
    <img :src="cardTypeImage(props.data.type)" :alt="cardTypeAlt(props.data.type)" class="min-h-32 border-gray-300 border-2 rounded-lg" />
    <div class="card-body p-3">
      <h2 class="card-title">
        {{ props.data.name }}
      </h2>
      <div class="card-footer">
        <div class="flex gap-2 py-2">
          <button class="btn-primary" @click="showEditCardModal">管理</button>
          <button class="btn-primary" @click="">乘車紀錄查詢</button>
        </div>
        <label class="label cursor-pointer justify-start gap-2">
          <span class="label-text text-lg">參與回饋：</span>
          <label for="isActive" class="relative inline-block h-6 w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500" @click="changeActive(props.data.isActive)">
            <input type="checkbox" id="isActive" class="peer sr-only [&:checked_+_span_i[data-checked-icon]]:block [&:checked_+_span_i[data-unchecked-icon]]:hidden" />
            <span class="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-4 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
              <i data-unchecked-icon class="mdi i-mdi-times size-4"></i>
              <i data-checked-icon class="mdi i-mdi-check hidden size-4"></i>
            </span>
          </label>
        </label>
      </div>
    </div>
  </div>
  <editCard :isVisible="showModal" @update:visible="showModal = $event" :data="props.data" @save="save" />
</template>

<script setup>
import editCard from './editCard.vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        cardType: '悠遊卡',
        cardName: '???',
        cardNumber: '',
        isActive: false,
        createTime: '',
      };
    },
    required: true,
  },
});

const showModal = ref(false);
const showEditCardModal = () => {
  showModal.value = true;
};

const emit = defineEmits(['save']);
function save(data) {
  const newData = {
    ...data,
  };
  emit('save', newData);
}

function changeActive(isActive) {
  props.data.isActive = !isActive;
  const newData = { ...props.data };
  emit('save', newData);
}

let cardTypeImage = (type) => {
  let image = import.meta.env.BASE_URL;
  switch (type) {
    case 1:
      image += "image/cardtype/easycard.png";
      break;
    case 2:
      image += "image/cardtype/ipass.png";
      break;
    case 3:
      image += "image/cardtype/icash.png";
      break;
    default:
      return "";
  }
  return image;
};

let cardTypeAlt = (type) => {
  switch (type) {
    case 1:
      return "easycard";
    case 2:
      return "ipass";
    case 3:
      return "icash";
    default:
      return "";
  }
};
</script>