<script setup lang="ts">
interface ButtonProps {
  text: string;
  color: string;
  borderRadius: number;
  backgroundColor: string;
  icon?: string | null;
  width?: string;
}

withDefaults(defineProps<ButtonProps>(), {
  width: "100%",
  icon: null,
});

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  emit("click");
};
</script>

<template>
  <v-btn
    :color="color"
    :width="width"
    :style="{
      borderRadius: borderRadius + 'px',
      backgroundColor: backgroundColor,
    }"
    @click="onClick"
  >
    <v-icon v-if="icon !== null" left>
      {{ icon }}
    </v-icon>
    {{ text }}
  </v-btn>
</template>