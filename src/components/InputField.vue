<script setup lang="ts">
interface Props{
    label:string,
    modelValue: string | number,
    required?: boolean,
    disabled?: boolean,
}

withDefaults( defineProps<Props>(),{
  disabled : false,
  required : false,
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void
}>();

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
}

</script>
<template>
  <div>
    <div class="text-subtitle-1 text-medium-emphasis">{{ label }}</div>
    <v-text-field
      density="compact"
      type="text"
      variant="outlined" 
      :disabled="disabled"
      :required="required"
      :value="modelValue"
      @input="handleInput"
    ></v-text-field>
  </div>
</template>

<style scoped>
</style> 