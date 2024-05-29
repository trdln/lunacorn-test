<template>
  <div v-if="items && items.length" class="flex flex-col w-full">
    <TreeItem v-for="(item, index) of buildTree(items)" :key="index" :item="item" :index="index" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array as PropType<Types.Tree.Response[]>,
    default: [],
  },
});

const buildTree = (items: Types.Tree.Response[]) => {
  const roots: Types.Tree.Item[] = [];
  const map: Record<string, Types.Tree.Item> = {};

  items.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  items.forEach((item) => {
    if (item.parent_id === null) {
      roots.push(map[item.id]);
    } else {
      map[item.parent_id].children.push(map[item.id]);
    }
  });

  return roots;
};
</script>
