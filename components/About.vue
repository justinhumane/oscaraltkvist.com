<template>
  <section class="about px-8 py-16 grid grid-cols-4">
    <div class="col-span-4 lg:col-span-3">
      <slot />
    </div>
  </section>
</template>

<style>
.about p {
  @apply text-4xl md:text-7xl lg:text-7xl leading-tight font-extralight;
}
</style>
