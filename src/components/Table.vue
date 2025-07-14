<script setup lang="ts">
 const items = [
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    },
  ]
</script>
<template>
    <v-date-table :items="items" ></v-date-table>
</template>