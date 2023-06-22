<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./DefaultLayout/Footer.vue";
export default defineComponent({
    name: "TheDefaultLayout",
    components: {
        Footer
    }
});
</script>

<template>
    <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        <slot></slot>
        <Footer/>
    </div>
</template>
