<template>
  <div id="top" class="min-h-screen">
    <nav class="p-8 flex justify-between items-center sticky top-0 backdrop-blur-sm">
      <h1 class="text-4xl uppercase font-semibold">
        <a class="hover:text-sky-500 transition duration-150" href="#top">Oscar Altkvist</a>
      </h1>
      <ul class="nav-list flex space-x-4 font-extralight text-2xl">
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
    </nav>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
