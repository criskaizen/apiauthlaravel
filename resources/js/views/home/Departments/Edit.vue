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
    sendRequest('PUT', form.value, 'departments/'+id.value, '/departments');
    form.value.name = '';
}
</script>
<template>
    <PageLayout title="Update deparment" title_padre="Departments" title_hijo="Update Department">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="save">
                    <div class="mb-3">
                        <label class="form-label" for="product-title-input">Deparment Title</label>
                        <input type="text" v-model="form.name" class="form-control" placeholder="Enter deparment title" required>
                        <div class="invalid-feedback">Please Enter a product title.</div>
                    </div>
                    <div class="text-end mb-3">
                        <button type="submit" class="btn btn-primary w-sm">Update Deparment</button>
                    </div>
                </form>

            </div>
        </div>

    </PageLayout>
</template>
