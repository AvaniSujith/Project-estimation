<script setup lang="ts">
interface DateProps {
  label: string;
  modelValue : Date | null;
}

defineProps<DateProps>();
</script>
<template>
  <div>
    <div class="text-subtitle-1 text-medium-emphasis">{{ label }}</div>
    <v-date-input
      append-icon="mdi-menu-down"
      variant="plain"
      persistent-placeholder
    >
    </v-date-input>
  </div>
</template>