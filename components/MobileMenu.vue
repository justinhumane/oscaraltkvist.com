<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>

<template>
  <div class="md:hidden text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="text-sky-500 text-2xl">
          <Icon name="charm:menu-hamburger" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#projects"
                :class="[
                  active ? 'bg-sky-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2',
                ]"
              >
                <span class="text-sky-500 font-bold">/</span>projects
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#contact"
                :class="[
                  active ? 'bg-sky-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2',
                ]"
              >
                <span class="text-sky-500 font-bold">/</span>contact
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
