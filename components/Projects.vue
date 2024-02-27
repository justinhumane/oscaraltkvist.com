<script setup>
const { data } = await useAsyncData(() => {
  return queryContent("projects").find();
});
</script>

<template>
  <div class="px-8 py-16">
    <h2 id="projects" class="scroll-mt-28"><span class="text-sky-500 font-bold">/</span>projects</h2>

    <div class="py-8">
      <div class="border-sky-500 border-t-2">
        <Project v-for="project in data" :key="project._id" :project="project" />
      </div>
    </div>
  </div>
</template>
