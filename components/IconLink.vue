<script setup>
defineProps(["name", "href"]);
</script>

<template>
  <div>
    <NuxtLink class="flex items-center gap-2" :to="href"> <Icon :name="name" size="2rem" />{{ href }}</NuxtLink>
  </div>
</template>
