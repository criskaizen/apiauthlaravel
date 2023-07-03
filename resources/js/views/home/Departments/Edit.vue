<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { sendRequest } from "../../../helpers/functions";

const route = useRoute();
const form = ref({
    id: '',
    name:''
});
const id = ref(route.params.id);
onMounted( () => {
    getDepartment()
});

const getDepartment = () => {
    axios.get('departments/'+id.value).then(
        response => (
            form.value.name = response.data.data.name
        )
    );
}

const save = () => {
    let resp = sendRequest('PUT', form.value, 'departments/'+id.value, '/departments');
    if (resp) {
        $route.push({ name: 'departments' });
        form.value.name = '';
    }
}
</script>
<template>
    <PageLayout title="Update deparment" title_padre="Departments" title_hijo="Update Department"/>
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="save">
                <div class="mb-3">
                    <label class="form-label fw-bold">.: Deparment Title</label>
                    <input class="form-control" v-model="form.name" type="text" placeholder="Enter deparment title" required>
                </div>
                <div class="text-end">
                    <button class="btn btn-primary" type="submit">Update Deparment</button>
                    <router-link type="button" :to="{ name: 'departments' }" class="btn btn-light">Cancel</router-link>
                </div>
            </form>
        </div>
    </div>
</template>
