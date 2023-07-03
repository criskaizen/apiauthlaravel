<script lang="ts">
import { defineComponent } from "vue";
// import Footer from "./DefaultLayout/Footer.vue";
import LoaderFull from "../components/LoaderFull.vue";
import { bodyScript } from "../helpers/load_script";
export default defineComponent({
    name: "TheDefaultLayout",
    components: {
        LoaderFull
    },
    mounted() {
        // console.log("object is mounted");
        // bodyScript('assets/js/script.js');
        bodyScript('assets/js/script.js');
        bodyScript('assets/js/sidebar-menu.js');
        bodyScript('assets/js/icons/feather-icon/feather-icon.js');
    }
});
</script>

<template>
    <LoaderFull/>
    <slot></slot>
</template>
