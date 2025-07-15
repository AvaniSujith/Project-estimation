<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';
import DatePicker from './components/DatePicker.vue';
const date = ref<string>('2025-08-10');
const parsed = computed(() => new Date(date.value));

</script>
<template>
  <div>
    <date-picker v-model="date" />
    <p>{{ parsed.toLocaleDateString('en-GB') }}</p>

  </div>
</template>