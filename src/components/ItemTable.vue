<script setup lang="ts">
import type { TableItem } from "../types";

defineProps<{
  header: TableItem[];

}>();
</script>
<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="item in header">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> 
          {{  }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
