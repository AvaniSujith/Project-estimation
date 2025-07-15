<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="text-subtitle-1 text-medium-emphasis" :title="title">
    {{ title }}
  </div>
</template>
