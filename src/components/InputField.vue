<script setup lang="ts">
interface Props {
  modelValue: string;
  placeholder: string;
  rules: ((value: string) => true | string)[];
  type?: "text" | "number";
  required?: boolean;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  minLength: 0,
  maxLength: 0,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleInput = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <v-text-field
    density="compact"
    variant="outlined"
    :model-value="modelValue"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :rules="rules"
    :min-length="minLength"
    :max-length="maxLength"
    @update:model-value="handleInput"
  ></v-text-field>
</template>
