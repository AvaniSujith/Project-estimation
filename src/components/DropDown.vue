<script setup lang="ts">
interface Dropdown {
  item: string;
  value: string;
  index: number;
}

interface DropDownProps {
  label: string;
  items: Array<Dropdown>;
}

defineProps<DropDownProps>();
</script>

<template>
  <v-select label="label" :item="item in items" :key="index">
    {{ item }}
  </v-select>
</template>