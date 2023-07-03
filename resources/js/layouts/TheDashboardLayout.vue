<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HeaderDash from "./DashboardLayout/HeaderDash.vue";
import MenuDash from "./DashboardLayout/MenuDash.vue";
import FooterDash from "./DashboardLayout/FooterDash.vue";
import ThemeSetting from "./DashboardLayout/ThemeSettingDash.vue";

import LoaderFull from "../components/LoaderFull.vue";

import { bodyScript } from "../helpers/load_script";

export default defineComponent({
    name: "TheDashboardLayout",
    components: {
        HeaderDash,
        MenuDash,
        FooterDash,
        LoaderFull
    },
    mounted() {
        // console.log("object is mounted");


    },
});
</script>

<template>
    <LoaderFull/>
    <div class="page-wrapper" id="pageWrapper">
        <HeaderDash/>
        <div class="page-body-wrapper horizontal-menu">
            <MenuDash/>
            <div class="page-body">
                <slot></slot>
            </div>
            <FooterDash/>
        </div>
    </div>


</template>
