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
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">Starter</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                            <li class="breadcrumb-item active">Starter</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header align-items-center d-flex text-center">
                    <h4 class="card-title mb-0 flex-grow-1 fw-bold">.:: HABILITACIÓN DE LA FECHA DE LA EVALUACIÓN ESTUDIANTE ::.</h4>
                </div>
                <div class="card-body">
                    {{ BASE_URL }}
                    <pre>
                        {{  departaments }}
                    </pre>

                    <button @click="deleteDepartment('14','cristhian')">Delete</button>
                </div>
            </div>
        </div>
    </div>

</template>

