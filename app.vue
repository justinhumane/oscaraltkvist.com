<script setup>
useSeoMeta({
  title: "Oscar Altkvist – Web developer",
  ogTitle: "Oscar Altkvist – Web developer",
  description:
    "I am a web developer based in Linköping, Sweden. I enjoy long walks in the terminal and candlelit sessions in VS Code.",
  ogDescription:
    "I am a web developer based in Linköping, Sweden. I enjoy long walks in the terminal and candlelit sessions in VS Code.",
});
</script>

<template>
  <div id="top" class="min-h-screen">
    <nav class="p-8 flex justify-between items-center sticky top-0 backdrop-blur-sm bg-neutral-100 bg-opacity-60">
      <h1 class="text-2xl md:text-4xl uppercase font-semibold">
        <a class="hover:text-sky-500 transition duration-150" href="#top">Oscar Altkvist</a>
      </h1>
      <ul class="nav-list hidden md:flex space-x-4 font-extralight text-2xl">
        <li>
          <a href="#projects" class="hover:text-sky-500 transition duration-150">
            <span class="text-sky-500 font-bold">/</span>projects
          </a>
        </li>
        <li>
          <a href="#contact" class="hover:text-sky-500 transition duration-150">
            <span class="text-sky-500 font-bold">/</span>contact
          </a>
        </li>
      </ul>
      <MobileMenu />
    </nav>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
