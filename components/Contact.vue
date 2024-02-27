<template>
  <div class="px-8 py-16 contact">
    <h2 id="contact" class="scroll-mt-28"><span class="text-sky-500 font-bold">/</span>contact</h2>
    <article class="pt-8 pb-32">
      <div class="border-sky-500 border-t-2 pt-4 gap-16">
        <slot />
      </div>
    </article>
  </div>
</template>

<style>
.contact {
  min-height: calc(100vh - 3rem);
}
</style>
