<script setup>
import { ref, onMounted } from 'vue';
import { confirmation } from '@/helpers/functions';
import axios from 'axios';
onMounted( () => {
    getDepartaments()
});

const departaments = ref([]);
const load = ref(false);

const getDepartaments = async () => {
    await axios.get('departments').then(
        response => (
            departaments.value = response.data
        ))
        load.value = true;
}

const deleteDepartment = (id, name) => {
    confirmation(name, ('departments/'+id), '/departments');
}
</script>
<template>
    <h1>holis</h1>
    {{  departaments }}

    <button @click="deleteDepartment('14','cristhian')">Delete</button>
</template>
