<script setup>
defineProps(["orientation"]);
</script>

<template>
  <div class="flex gap-2 mt-4" :style="`flex-direction: ${orientation}`">
    <slot />
  </div>
</template>
