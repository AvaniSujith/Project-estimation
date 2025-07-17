<script setup lang="ts">
interface TitleProps {
  label: string;
  fontSize?: number;
  color?: string;
}

withDefaults(defineProps<TitleProps>(), {
  fontSize: 18,
  color: "#000",
});
</script>

<template>
  <div :label="label" :style="{ fontSize: fontSize + 'px', color: color }">
    {{ label }}
  </div>
</template>
