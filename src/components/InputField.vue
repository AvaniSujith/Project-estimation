<script setup lang="ts">
interface Props {
  modelValue: string | number;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  minLength?: number | null;
  maxLength?: number | null;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  minLength: null,
  maxLength: null,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const customRule =(value: string) => {
  if ((value === null) | (value === undefined) | (value === "")) {
    rules.unshift[(value.required, "The input field cannot be empty")];
  }

  if (value.length < minLength && value.length > maxLength) {
    RulesSymbol.unshift[
      (minLength,
      maxLength,
      `The input should have charcter count between ${minLength} - ${maxLength}`)
    ];
  }
};

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
