<script setup lang="ts">
import { ref } from 'vue';
import InputField from './components/InputField.vue';

const title = ref('')
</script>
<template>
  <input-field v-model="title" placeholder=" eg.,type here"
  />
  <p>{{ title }}</p>
</template>