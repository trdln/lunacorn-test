<template>
  <div class="min-h-svh flex flex-col items-center">
    <main class="h-full w-full flex flex-col items-center grow">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} | Lunacorn TOR` : 'Lunacorn TOR';
  },
});
</script>
