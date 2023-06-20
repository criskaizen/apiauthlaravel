<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheDashboardLayout",
});
</script>

<template>
    <h1>header</h1>
    <br />
    <h1>sidebar</h1><br>
        <slot></slot>
    <h1>footer</h1>
    <br />
</template>
