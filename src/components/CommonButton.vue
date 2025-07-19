<script setup lang="ts">
import type { IconValue } from "vuetify/lib/composables/icons.mjs";

interface ButtonProps {
  text: string;
  color: string;
  icon?: IconValue | undefined;
  width?: string;
}

withDefaults(defineProps<ButtonProps>(), {
  width: "100%",
  icon: undefined,
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
    rounded-lg
    :prepend-icon="icon"
    :color="color"
    :width="width"
    @click="onClick"
  >
    {{ text }}
  </v-btn>
</template>
