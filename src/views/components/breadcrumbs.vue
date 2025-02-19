<template>
  <nav class="breadcrumbs py-4" aria-label="麵包屑導航">
    <ul>
      <li>
        <router-link to="/" aria-label="回首頁">🏚️</router-link>
      </li>
      <li v-for="(item, index) in props.breadcrumbs" :key="index" aria-current="page" >
        <span>{{ item }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>

const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
});
</script>