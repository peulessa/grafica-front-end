<template>
  <section
    class="q-pa-md"
    style="display: flex; justify-content: space-between"
  >
    <div
      style="
        display: flex;
        align-items: center;
        font-size: 2em;
        color: grey;
        padding-top: 0.6em;
      "
    >
      <q-icon
        name="people"
        style="padding-bottom: 17px; padding-right: 0.5em"
      />
      <p>Clientes</p>
    </div>
    <div class="q-pr-lg">
      <q-input v-model="text" style="width: 30vw">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </section>
  <section>
    <Table :rows="rows" :columns="columns" />
  </section>
</template>

<script setup>
import Table from "src/components/Table.vue";

const columns = [
  {
    name: "nome",
    required: true,
    label: "Nome",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "razaoSocial",
    align: "center",
    label: "Razão Social",
    field: "razaoSocial",
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
  { name: "situacao", label: "Situacao", field: "situacao", align: "center" },
  {
    name: "ultimoPedido",
    label: "Ultimo Pedido",
    field: "ultimoPedido",
    align: "center",
  },
  {
    name: "codigo",
    label: "Código do Cliente",
    field: "codigo",
    required: true,
    sortable: true,
    align: "center",
  },
  { name: "telefone", label: "Telefone", field: "telefone", align: "center" },
  { name: "celular", label: "Celular", field: "celular", align: "center" },
  { name: "email", label: "E-mail", field: "email", align: "center" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    razaoSocial: 159,
    cnpj: 6.0,
    situacao: 24,
    ultimoPedido: 4.0,
    codigo: 87,
    telefone: "14%",
    celular: "1%",
    email: "teste",
  },
  {
    name: "Ice cream sandwich",
    razaoSocial: 237,
    cnpj: 9.0,
    situacao: 37,
    ultimoPedido: 4.3,
    codigo: 129,
    telefone: "8%",
    celular: "1%",
    email: "teste",
  },
  {
    name: "Eclair",
    razaoSocial: 262,
    cnpj: 16.0,
    situacao: 23,
    ultimoPedido: 6.0,
    codigo: 337,
    telefone: "6%",
    celular: "7%",
    email: "teste",
  },
  {
    name: "Cupcake",
    razaoSocial: 305,
    cnpj: 3.7,
    situacao: 67,
    ultimoPedido: 4.3,
    codigo: 413,
    telefone: "3%",
    celular: "8%",
    email: "teste",
  },
  {
    name: "Gingerbread",
    razaoSocial: 356,
    cnpj: 16.0,
    situacao: 49,
    ultimoPedido: 3.9,
    codigo: 327,
    telefone: "7%",
    celular: "16%",
    email: "teste",
  },
  {
    name: "Jelly bean",
    razaoSocial: 375,
    cnpj: 0.0,
    situacao: 94,
    ultimoPedido: 0.0,
    codigo: 50,
    telefone: "0%",
    celular: "0%",
    email: "teste",
  },
  {
    name: "Lollipop",
    razaoSocial: 392,
    cnpj: 0.2,
    situacao: 98,
    ultimoPedido: 0,
    codigo: 38,
    telefone: "0%",
    celular: "2%",
    email: "teste",
  },
  {
    name: "Honeycomb",
    razaoSocial: 408,
    cnpj: 3.2,
    situacao: 87,
    ultimoPedido: 6.5,
    codigo: 562,
    telefone: "0%",
    celular: "45%",
    email: "teste",
  },
  {
    name: "Donut",
    razaoSocial: 452,
    cnpj: 25.0,
    situacao: 51,
    ultimoPedido: 4.9,
    codigo: 326,
    telefone: "2%",
    celular: "22%",
    email: "teste",
  },
  {
    name: "KitKat",
    razaoSocial: 518,
    cnpj: 26.0,
    situacao: 65,
    ultimoPedido: 7,
    codigo: 54,
    telefone: "12%",
    celular: "6%",
    email: "teste",
  },
];
</script>
