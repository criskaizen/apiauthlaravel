// import InicioLayout from "../../layouts/inicio/InicioLayout.vue";

export default [
    {
        path: "/",
        name: "login",
        component: () => import(/* webpackChunkName: "Login" */ "../../views/auth/Login.vue"),
        meta: {
            layout: 'Default',
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import(/* webpackChunkName: "Register" */ "../../views/auth/Register.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
];
