<script lang="ts">
import { defineComponent } from "vue";
import HeaderDash from "./DashboardLayout/HeaderDash.vue";
import MenuDash from "./DashboardLayout/MenuDash.vue";
import FooterDash from "./DashboardLayout/FooterDash.vue";

export default defineComponent({
    name: "TheDashboardLayout",
    components: {
        HeaderDash,
        MenuDash,
        FooterDash
    }
});
</script>

<template>
    <div id="layout-wrapper">
        <HeaderDash/>
        <MenuDash/>
        <div class="vertical-overlay"></div>

        <div class="main-content">
            <slot></slot>
            <FooterDash/>
        </div>
    </div>
</template>
