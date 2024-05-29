<template>
  <div v-if="item" class="w-full" :class="[bgClass]">
    <div class="h-8 flex items-center" :style="{ 'padding-left': `${(depth + 1) * 15}px` }" @click="expanded = !expanded">
      <icon :name="iconName" class="mr-2" />
      <span>{{ item.title }}</span>
    </div>
    <div v-if="expanded">
      <TreeItem v-for="(child, i) of item.children" :key="index" :item="child" :index="index + i" :depth="depth + 1"> </TreeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object as PropType<Types.Tree.Item>,
  },
  index: {
    type: Number,
    default: 0,
  },
  depth: {
    type: Number,
    default: 0,
  },
});

const expanded = ref<boolean>(false);

const bgClass = computed(() => (props.depth % 2 === 0 ? (props.index % 2 === 0 ? 'bg-white' : 'bg-[#f6f6f7]') : props.index % 2 === 1 ? 'bg-white' : 'bg-[#f6f6f7]'));
const iconName = computed(() => (hasChildren.value ? (expanded.value ? 'mdi:chevron-down' : 'mdi:chevron-right') : 'mdi:minus'));
const hasChildren = computed(() => props.item && !!props.item.children && !!props.item.children.length);
</script>
