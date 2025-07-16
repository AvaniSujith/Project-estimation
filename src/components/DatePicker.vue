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
      :model-value="modelValue"
      append-inner-icon="mdi-arrow-down"
      variant="outlined"
      persistent-placeholder
      display-format="DD/MM/YYYY"
      @update:model-value="handleDate"
    >
    </v-date-input>
  </div>
</template>
