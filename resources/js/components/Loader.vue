<script setup>
import { defineProps } from 'vue';
const props_data = defineProps({
    text_data: {
        type: String,
        required: false,
        default: 'Cargando...',
    },
});
</script>
<template>
    <div class="loader-box">
        <div class="loader-3"></div>
    </div>
</template>
