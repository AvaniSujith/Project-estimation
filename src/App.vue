<script setup lang="ts">
import { ref } from 'vue';
import DatePicker from './components/DatePicker.vue';
const date = ref<Date | null>(null)
</script>
<template>
  <div>
    <date-picker v-model="date" label="date" />
    <p>{{  date }}</p>
  </div>
</template>