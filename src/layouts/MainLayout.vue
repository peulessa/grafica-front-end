<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Gráfica Vitória </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Painel </q-item-label>
        <EssentialLink
          @click="goRoute(link.title)"
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import EssentialLink from "components/EssentialLink.vue";

const router = useRouter();

const linksList = [
  {
    title: "Clientes",
    caption: "Carteira de Clientes",
    icon: "people",
  },
  {
    title: "Estoque",
    caption: "Controle de Estoque",
    icon: "inventory_2",
  },
  {
    title: "Fluxo de Caixa",
    caption: "Controle de Despesas",
    icon: "account_balance",
  },
  {
    title: "Contas a Receber",
    caption: "Contas a Receber",
    icon: "payments",
  },
  {
    title: "Contas a Pagar",
    caption: "Contas a Pagar",
    icon: "paid",
  },
];

const leftDrawerOpen = ref(false);

function goRoute(Route) {
  const formatedRoute = Route.toLowerCase().replace(/\s/g, "-");
  router.push(formatedRoute);
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
