export default [
  {
    path: '/shop',
    meta: { breadcrumb: false },
    name: 'Shop',
    component: () => import(
        /* webpackChunkName: "routes" */
        `@/views/Shop.vue`
        )
  },
];
