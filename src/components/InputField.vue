<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  minLength: 0,
  maxLength: 0,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const customRule = computed(() => {
  const rule: ((value: string) => true | string)[] = [];
  if (props.required) {
    rule.push((value) => !!value || "The input should not be empty");
  }

  if (props.maxLength !== null) {
    rule.push(
      (value) =>
        String(value).length <= props.maxLength ||
        `Maximum length of input should be ${props.maxLength}`
    );
  }

  if (props.minLength !== null) {
    rule.push(
      (value) =>
        String(value).length >= props.minLength ||
        `Minimum length of input should be ${props.minLength}`
    );
  }
  return rule;
});

const handleInput = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <v-text-field
    density="compact"
    type="text"
    variant="outlined"
    :model-value="modelValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :rules="customRule"
    :min-length="minLength"
    :max-length="maxLength"
    @update:model-value="handleInput"
  ></v-text-field>
</template>
