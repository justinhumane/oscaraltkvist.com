<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

defineProps({
  project: {
    type: Object,
  },
});
</script>

<template>
  <article class="">
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        class="uppercase hover:bg-sky-500 transition duration-150 pt-4 pb-3 px-4 w-full text-5xl font-extralight flex justify-between border-b-2 border-sky-500"
      >
        <div class="leading-none">{{ project.title }}</div>
        <div>
          <Icon name="bi:chevron-down" :class="open ? 'rotate-180 transform' : ''" class="transition duration-150" />
        </div>
      </DisclosureButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <DisclosurePanel>
          <ContentRendererMarkdown
            class="py-8 px-4 grid grid-cols-4 gap-16 border-b-2 border-sky-500"
            :value="project"
          />
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </article>
</template>

<style>
h2 {
  @apply text-7xl font-medium;
}
</style>
