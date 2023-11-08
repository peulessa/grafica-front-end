<template>
  <div class="q-pa-md">
    <q-table :rows="rows" :columns="columns" row-key="name" />
  </div>
</template>

<script setup>
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
});
</script>
