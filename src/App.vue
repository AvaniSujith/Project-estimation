<script setup lang="ts">
import { ref } from "vue";
import DropDown from "./components/DropDown.vue";

const items = [
  { item: "Item 1", value: "item1" },
  { item: "item 2", value: "item2" },
  { item: "item 3", value: "item3" },
];

const itemSelected = ref<string>("select");

</script>
<template>
  <DropDown
    :items="items"
    v-model="itemSelected"
  />
  <div>{{ itemSelected }}</div>
</template>
 