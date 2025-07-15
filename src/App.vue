<script setup lang="ts">
import DropDown from "./components/DropDown.vue";
const items = [
  { item: 'Item 1', value: 'item1' },
  { item: 'Item 2', value: 'item2' },
  { item: 'Item 3', value: 'item3' },
];
</script>

<template>
  <drop-down :items="items" />
</template>