import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// import { useAuthStore } from "../stores/auth";

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});


//PROTECCION  DE RUTAS CON META
/* router.beforeEach( (to, from, next) => {
    const authStore = useAuthStore();
    const isAuth = authStore.isAutenticated;
    if((to.meta.requiresAuth) && (isAuth === false)){
        next({ name: "login" });
    } else {
        next();
    }
}); */

export default router;
