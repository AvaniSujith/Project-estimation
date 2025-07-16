<script setup lang="ts">
interface Dropdown {
  item: string;
  value: string;
}

interface DropDownProps {
  items: Dropdown[];
  modelValue: string;
}

defineProps<DropDownProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleChange = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <v-select
    :items="items"
    :model-value="modelValue"
    item-title="item"
    item-value="value"
    @update:model-value="handleChange"
  >
  </v-select>
</template>
