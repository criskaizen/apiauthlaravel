/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import { BASE_URL, BASE_URL_API } from './helpers/config';
import { renderLayouts } from './layouts/RenderLayouts';
window.BASE_URL = BASE_URL;

//AXIOS
import axios from 'axios';
window.axios = axios;
window.axios.defaults.baseURL = BASE_URL_API;
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

//Global Components
import Loader from './components/Loader.vue';
import PageLayout from './components/PageLayout.vue';

//VUEJS
import { createApp, markRaw } from 'vue';
import App from './App.vue';

//ROUTER
import router from './router';
window.$router = router;

//PINIA
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia  = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
});
pinia.use(piniaPluginPersistedstate);



const app = createApp(App);
app.use(router);
app.use(pinia);
app.component("PageLayout", PageLayout);
app.component("Loader", Loader);
app.mount("#company_app");

//render layout templates
renderLayouts(app);


//manejo de token
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore();
axios.interceptors.request.use((config) => {
    const token = authStore.authToken;
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        // console.log(config);
    }
    return config;
});




/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });
