<script setup lang="ts">
interface DateProps {
  label: string;
  modelValue: Date | null;
}

defineProps<DateProps>();

const emit = defineEmits<{
  (e: "update:modelValue", date: Date | null): void;
}>();

const handleDate = (event: Event) => {
  const date = (event.target as HTMLInputElement).value
  emit("update:modelValue", date);
};
</script>
<template>
  <div>
    <div class="text-subtitle-1 text-medium-emphasis">{{ label }}</div>
    <v-date-input
      :model-value="modelValue"
      @update:model-value="handleDate"
      append-icon="mdi-menu-down"
      variant="plain"
      persistent-placeholder
    >
    </v-date-input>
  </div>
</template>
