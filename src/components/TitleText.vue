<script setup lang="ts">
interface TitleProps {
  title: string;
  titleFontSize?: number;
  titleColor?: string;
}

withDefaults(defineProps<TitleProps>(), {
  titleFontSize: 18,
  titleColor: "#000",
});
</script>

<template>
  <div
    class="title"
    :title="title"
    :style="{ fontSize: titleFontSize + 'px', color: titleColor }"
  >
    {{ title }}
  </div>
</template>
