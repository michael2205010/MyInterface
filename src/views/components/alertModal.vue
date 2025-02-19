<template>
  <dialog v-if="isVisible"  class="modal" role="dialog"  aria-labelledby="dialogTitle" ref="dialogRef">
    <div class="w-1/2 h-auto bg-white rounded-lg shadow-lg flex flex-col border-1 border-white max-md:w-11/12">
      <div class="modal-header flex justify-between bg-primary rounded-t-lg p-3">
        <h3 class="text-xl font-bold text-white" id="dialogTitle">系統提示訊息</h3>
        <button @click="closeModal" class="btn btn-sm btn-ghost text-white " aria-label="關閉">X</button>
      </div>
      <div class="flex-grow p-4">
        <p class="whitespace-pre-wrap">{{content}}</p>
      </div>
      <div class="modal-footer mt-auto flex justify-end gap-2 p-2">
        <button @click="closeModal" class="btn btn-gray">關閉</button>
        <button @click="goTo" class="btn btn-primary">{{goToName}}</button>
      </div>
    </div>
  </dialog>
</template>
  
<script setup>
const dialogRef = ref(null);

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
  goToName: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:visible', 'goTo']);

onMounted(() => {
  if (props.isVisible) {
    openModal();
  }
});

const openModal = () => {
  dialogRef.value?.showModal();
};
const closeModal = () => {
  dialogRef.value?.close();
  emit('update:visible', false);
};

function goTo() {
  emit('update:visible', false);
  emit('goTo');
}
</script>
