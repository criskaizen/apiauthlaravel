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
        <div class="page-header">
            <div class="row">
                <div class="col-sm-6">
                    <h3>{{ title }}</h3>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="javascript:void(location.reload())">{{ title_padre }}</a>
                        </li>
                        <li class="breadcrumb-item active">{{ title_hijo }}</li>
                    </ol>
                </div>
                <div class="col-sm-6">
                    <!-- Bookmark Start-->
                    <!-- <div class="bookmark">
                        <ul>
                            <li>
                                <a href="javascript:void(0)" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Tables"><i data-feather="trash-2"></i></a>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
