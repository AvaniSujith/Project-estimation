<script setup lang="ts">
interface Props {
  label: string;
  modelValue: string | number;
  required?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const handleInput = (value: string | number) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div>
    <div class="text-subtitle-1 text-medium-emphasis">{{ label }}</div>

    <v-text-field
      density="compact"
      type="text"
      variant="outlined"
      :model-value="modelValue"
      :disabled="disabled"
      :required="required"
      @update:model-value="handleInput"
    />
  </div>
</template>
