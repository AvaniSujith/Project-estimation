<script setup lang="ts">
interface Dropdown {
  item: string;
  value: string;
}

interface DropDownProps {
  items: Dropdown[];
}

defineProps<DropDownProps>();
</script>

<template>
  <v-select :items="items" item-title="item" item-value="value"> </v-select>
</template>
