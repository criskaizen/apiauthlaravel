export default [
    {
        path: "/panelprincipal",
        name: "panelprincipal",
        component: () => import(/* webpackChunkName: "Bienvenida" */ "../../views/home/PanelPrincipal/Bienvenida.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
];
