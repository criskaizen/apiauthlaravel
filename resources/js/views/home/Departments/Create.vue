<script setup>
import { nextTick, ref } from "vue";
import { sendRequest } from "../../../helpers/functions";

const form = ref({
    name:''
});

const name_input = ref('');

const save = () => {
    sendRequest('POST', form.value, '/departments', '');
    form.value.name = '';
    nextTick( () => name_input.value.focus());
}
</script>
<template>
    <PageLayout title="Create new deparment" title_padre="Departments" title_hijo="Create Department">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="save">
                    <div class="mb-3">
                        <label class="form-label" for="product-title-input">Deparment Title</label>
                        <input type="text" v-model="form.name" class="form-control" placeholder="Enter deparment title" ref="name_input" required>
                        <div class="invalid-feedback">Please Enter a product title.</div>
                    </div>
                    <div class="text-end mb-3">
                        <button type="submit" class="btn btn-primary w-sm">New Deparment</button>
                    </div>
                </form>

            </div>
        </div>

    </PageLayout>
</template>
