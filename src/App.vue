<script setup lang="ts">
import { ref } from 'vue';
import InputField from './components/InputField.vue';

const title = ref('')
</script>
<template>
  <input-field v-model="title" placeholder=" eg.,type here" :min-length="5" :max-length="26" :required="false"
  />
  <p>{{ title }}</p>
</template>