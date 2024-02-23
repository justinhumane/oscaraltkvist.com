<script setup>
defineProps(["name", "href"]);
</script>

<template>
  <NuxtLink :to="href">
    <Icon :name="name" size="2rem" />
  </NuxtLink>
</template>
