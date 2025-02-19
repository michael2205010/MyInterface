<template>
  <template v-if="data">
    <breadcrumbs :breadcrumbs="['我的票卡']" />
    <h1 class="title-1">票卡管理 - {{ data.name }}</h1>
    <div class="w-full space-y-4">
      <div v-if="isVisible" class="modal modal-open">
        <div class="w-11/12 sm:w-2/3 h-auto bg-white rounded-lg shadow-lg flex flex-col border-2 border-gray-300">
          <div class="modal-header flex justify-between bg-primary rounded-t-lg p-3">
            <h3 class="text-xl font-bold text-white">票卡管理 - {{ data.name }}</h3>
            <button @click="closeModal" class="btn btn-sm btn-ghost text-white ">X</button>
          </div>
          <div class="flex-grow p-4">
            <div class="mt-4">
              <label for="cardType" class="block">卡片類別:</label>
              <input :value="cardType2Chinese(card.type)" id="cardType" type="text" class="input input-bordered w-full" disabled />
            </div>
            <div class="mt-4">
              <label for="cardName" class="block">卡片名稱:</label>
              <input v-model="card.name" id="cardName" type="text" class="input input-bordered w-full" />
            </div>
            <div class="mt-4">
              <label for="returnHomeDate" class="block">歸戶日期:</label>
              <input v-model="card.createTime" id="returnHomeDate" type="text" class="input input-bordered w-full" disabled />
            </div>
            <div class="mt-4">
              <label for="cardNumber" class="block">卡片外碼:</label>
              <input v-model="card.number" id="cardNumber" type="text" class="input input-bordered w-full" disabled />
            </div>
          </div>
          <div class="divider"></div>
          <button @click="closeModal" class="btn btn-error">刪除</button>
          <div class="divider"></div>
          <div class="modal-footer mt-auto flex justify-end gap-2 p-2">
            <button @click="closeModal" class="btn btn-gray">返回</button>
            <button @click="save" class="btn btn-primary">儲存</button>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>


<script setup>

const cardType2Chinese = (cardType) => helperDomain.cardType2Chinese(cardType);

function save() {
  if (!response.cardName) {
    alert('請填寫所有欄位');
    return;
  }
}
</script>