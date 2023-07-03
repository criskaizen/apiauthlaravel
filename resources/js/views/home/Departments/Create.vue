<script setup>
import { nextTick, ref } from "vue";
import { sendRequest } from "../../../helpers/functions";

const form = ref({
    name: ''
});

const name_input = ref('');

const save = () => {
    let resp = sendRequest('POST', form.value, '/departments');
    if (resp) {
        $route.push({ name: 'departments' });
    }

    form.value.name = '';
    nextTick(() => name_input.value.focus());
}
</script>
<template>
    <PageLayout title="Create new deparment" title_padre="Departments" title_hijo="Create Department" />
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="save">
                <div class="mb-3">
                    <label class="form-label fw-bold">.: Deparment Title</label>
                    <input class="form-control" v-model="form.name" type="text" placeholder="Enter deparment title" ref="name_input" required>
                </div>
                <div class="text-end">
                    <button class="btn btn-primary" type="submit">New Deparment</button>
                    <router-link type="button" :to="{ name: 'departments' }" class="btn btn-light">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>
