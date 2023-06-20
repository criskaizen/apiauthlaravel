<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheDefaultLayout",
});
</script>

<template>
    <h1>header</h1>
    <br />
        <slot></slot>
    <h1>footer</h1>
    <br />
</template>
