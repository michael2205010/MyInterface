<template>
  <div class="links-top mx-auto md:w-5/6">
    <img src="/image/links-top.png" alt="divider" class="mr-6 md:max-h-12 aspect-[7/1] " />
  </div>
  <nav class="flex flex-col" aria-label="卡片記名">
    <ul class="item-center flex flex-col justify-center gap-x-12 gap-y-6 py-4 mx-auto w-5/6 md:flex-row" role="list">
      <li>
        <a href="https://promohub.easycard.com.tw/promohub/applyfbs.action" title="前往悠遊卡記名" aria-label="前往悠遊卡記名" target="_blank">
          <img src="/image/cardtype/link-easycard.webp" rel="noopener" alt="悠遊卡" class="w-full aspect-[3/.]" /></a>
      </li>
      <li>
        <a href="https://www.i-pass.com.tw/ThbACP" title="前往一卡通記名" aria-label="前往一卡通記名" target="_blank">
          <img src="/image/cardtype/link-ipass.webp" rel="noopener" alt="一卡通" class="w-full aspect-[3/.]" /></a>
      </li>
      <li>
        <a href="https://www.icash.com.tw/Home/NewsDetail/?ID=12226" title="前往iCash記名" aria-label="前往iCash記名" target="_blank">
          <img src="/image/cardtype/link-icash.webp" rel="noopener" alt="iCash" class="w-full aspect-[3/.]" /></a>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
@reference "@/assets/css/main.css";
.links-top {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 0 15px;
  margin-top: 16px;

  &::after {
    content: "";
    @apply box-border block h-[3px] w-[calc(100%-320px)] bg-green-600;
  }
}

@media (max-width: 1200px) {
  .links-top::before,
  .links-top::after {
    content: "";
    @apply box-border block h-[3px] w-[calc(100%-320px)/2] bg-green-600;
  }
}
</style>
