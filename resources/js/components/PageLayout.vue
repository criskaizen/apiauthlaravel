<script setup>
import { defineProps } from 'vue';
const props_data = defineProps({
    title: {
        type: String,
        required: true,
        default: '',
    },
    title_padre: {
        type: String,
        default: '',
    },
    title_hijo: {
        type: String,
        required: true,
        default: '',
    }
});
</script>
<template>
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">{{ title }}</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">{{ title_padre }}</a></li>
                            <li class="breadcrumb-item active">{{ title_hijo }}</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->
        <slot></slot>
    </div>
</template>
