<script setup lang="ts">
import { computed, ref } from "vue";

interface DateProps {
  modelValue: string;
}

defineProps<DateProps>();

const emit = defineEmits<{
  (e: "update:modelValue", date: string): void;
}>();

const isClicked = ref<boolean>(false);

const useIcon = computed(() => {
  return isClicked.value === true ? "mdi-arrow-up" : "mdi-arrow-down";
});

const handleDate = (date: string) => {
  emit("update:modelValue", date);
};
</script>

<template>
  <div>
    <v-date-input
      display-format="DD/MM/YYYY"
      variant="outlined"
      persistent-placeholder
      :append-inner-icon="useIcon"
      :model-value="modelValue"
      @click="isClicked = !isClicked"
      @update:model-value="handleDate"
    >
    </v-date-input>
  </div>
</template>
