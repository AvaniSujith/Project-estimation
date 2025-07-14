<script setup lang="ts">
import { ref } from "vue";
import InputField from "./components/InputField.vue";
const title = ref("");
</script>
<template>
  <input-field
    label="Estimation title"
    v-model="title"
    :required="true"
  />
  <p>{{ title }}</p>
</template>
