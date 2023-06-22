import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});


//PROTECCION  DE RUTAS CON META
router.beforeEach( async (to) => {
    const publicPages = ['/', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();
    if(authRequired && !auth.user){
        auth.returnUrl = to.fullPath;
        return '/';
    }
})


export default router;
