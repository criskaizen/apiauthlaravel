<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HeaderDash from "./DashboardLayout/HeaderDash.vue";
import MenuDash from "./DashboardLayout/MenuDash.vue";
import FooterDash from "./DashboardLayout/FooterDash.vue";
import NotificationModal from "./DashboardLayout/NotificationModalDash.vue";
import ThemeSetting from "./DashboardLayout/ThemeSettingDash.vue";

import { bodyScript } from "../helpers/load_script";

export default defineComponent({
    name: "TheDashboardLayout",
    components: {
        HeaderDash,
        MenuDash,
        FooterDash,
        NotificationModal
    },
    mounted() {
        // console.log("object is mounted");
        bodyScript('assets/js/app.js');
    },
});
</script>

<template>
    <div id="layout-wrapper">
        <HeaderDash/>
        <NotificationModal/>
        <MenuDash/>
        <div class="vertical-overlay"></div>

        <div class="main-content">
            <div class="page-content">
                <slot></slot>
            </div>
            <FooterDash/>
        </div>
    </div>

    <!--start back-to-top-->
    <button onclick="topFunction()" class="btn btn-danger btn-icon" id="back-to-top">
        <i class="ri-arrow-up-line"></i>
    </button>
    <!--end back-to-top-->

    <!--preloader-->
    <div id="preloader">
        <div id="status">
            <div class="spinner-border text-primary avatar-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

    <ThemeSetting/>
</template>
