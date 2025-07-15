<script setup lang="ts">
import DropDown from "./components/DropDown.vue";
const items = ["item1", "item2", "item3"];
</script>

<template>
  <drop-down :items="item in items" />
</template>