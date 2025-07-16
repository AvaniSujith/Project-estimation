<script setup lang="ts">
interface DateProps {
  modelValue: string;
}

defineProps<DateProps>();

const emit = defineEmits<{
  (e: "update:modelValue", date: string): void;
}>();

const handleDate = (date: string) => {
  emit("update:modelValue", date);
};
</script>

<template>
  <div>
    <v-date-input
      append-inner-icon="mdi-arrow-down"
      display-format="DD/MM/YYYY"
      variant="outlined"
      persistent-placeholder
      :model-value="modelValue"
      @update:model-value="handleDate"
    >
    </v-date-input>
  </div>
</template>
