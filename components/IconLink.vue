<script setup>
defineProps(["name", "text", "href"]);
</script>

<template>
  <div>
    <NuxtLink class="flex items-center gap-2 hover:text-sky-500 tranistion duration-150" :to="href" target="_blank">
      <Icon :name="name" size="2rem" />{{ text }}</NuxtLink
    >
  </div>
</template>
