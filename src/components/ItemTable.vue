<script setup lang="ts">
 const items = [
    {
      name: '',
      species: '',
      diet: '',
      habitat: '',
    },
  ]
</script>
<template>
    <v-date-table :items="items" >
    </v-date-table> 
</template>