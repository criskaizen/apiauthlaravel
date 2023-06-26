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
    <div class="text-center mb-3">
        <a href="javascript:void(0);" class="text-primary fw-semibold">
            <i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>
            {{text_data}}
        </a>
    </div>
</template>
