<template>
  <div class="grow flex flex-col items-center">
    <h1 class="text-xl my-8">Тестовое задание</h1>
    <NuxtLink :to="{ name: 'tree' }" class="px-10 py-4 rounded-xl border cursor-pointer"><p>Посмотреть список</p></NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Главная',
});
</script>
