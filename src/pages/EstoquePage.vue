<template>
  <Table :columns="columns" />
</template>
<script setup>
import Table from "src/components/Table.vue";

const columns = [
  {
    name: "Produto",
    required: true,
    label: "Produto",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "quantidadeEmEstoque",
    align: "center",
    label: "Quantidade",
    field: "quantidadeEmEstoque",
    sortable: true,
  },
  {
    name: "cnpj",
    label: "CNPJ",
    field: "cnpj",
    sortable: true,
    align: "center",
    align: "center",
  },
  { name: "telefone", label: "Telefone", field: "telefone", align: "center" },
  { name: "celular", label: "Celular", field: "celular", align: "center" },
  { name: "email", label: "E-mail", field: "email", align: "center" },
];
</script>
