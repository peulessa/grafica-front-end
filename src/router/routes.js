
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/clientes', component: () => import('pages/ClientesPage.vue') },
      { path: '/estoque', component: () => import('pages/EstoquePage.vue') },
      { path: '/fluxo-de-caixa', component: () => import('pages/FluxoDeCaixaPage.vue') },
      { path: '/contas-a-receber', component: () => import('pages/ContasAReceberPage.vue') },
      { path: '/contas-a-pagar', component: () => import('pages/ContasAPagarPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
