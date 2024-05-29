<template>
  <div class="w-full max-w-[500px] grow flex flex-col items-center">
    <div class="w-full flex items-center my-7">
      <NuxtLink :to="{ name: 'index' }">
        <icon name="ic:round-chevron-left" class="text-4xl cursor-pointer" />
      </NuxtLink>
      <h1 class="grow text-xl text-center">Список</h1>
    </div>
    <div v-if="loading">Загрузка</div>
    <Tree v-else :items="treeList" class="max-h-[90svh] overflow-y-auto" />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Список' });

const loading = ref<boolean>(true);
const treeList = ref<Types.Tree.Response[]>([]);

const onInit = async () => {
  try {
    loading.value = true;
    const data = await api.tree.get();
    if (data && Array.isArray(data)) treeList.value = data;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  onInit();
});
</script>
