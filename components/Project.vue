<script setup>
defineProps({
  project: {
    type: Object,
  },
});
</script>

<template>
  <article class="pt-8 pb-32">
    <ContentRendererMarkdown class="border-sky-500 border-t-2 pt-8 grid grid-cols-4 gap-16" :value="project" />
  </article>
</template>

<style>
h2 {
  @apply text-7xl font-medium;
}
</style>
