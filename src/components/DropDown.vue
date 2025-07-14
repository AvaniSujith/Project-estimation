<script setup lang="ts">
interface DropDownProps{
    label: string,
    items: Array[],
}

defineProps<DropDownProps>();

</script>
<template>
    <v-select
    label="label"
    :items="items"
    >
    </v-select>
</template>