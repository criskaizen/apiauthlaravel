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
    <PageLayout title="Departments" title_hijo="Departments">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header border-0">
                        <div class="d-flex align-items-center">
                            <h5 class="card-title mb-0 flex-grow-1"></h5>
                            <div class="flex-shrink-0">
                                <button class="btn btn-danger"><i class="ri-delete-bin-2-line"></i></button>
                                <router-link type="button" :to="{path: 'create'}" class="btn btn-primary"><i class="ri-add-line align-bottom me-1"></i> New Department</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-8"></div>
                            <div class="col-sm-4">
                                <label for="rol" class="form-label fw-bold">.: Búsqueda</label>
                                <div class="input-group">
                                    <input type="search" name="search" class="form-control" placeholder="Búsqueda">
                                    <button class="btn btn-primary" type="button" v-on:click="SearchDocente(1)">Buscar</button>
                                </div>
                            </div>
                        </div>
                        <Loader v-if="!load" />
                        <div v-else class="table-responsive">
                            <table class="table align-middle table-bordered mb-0 mt-4">
                                <thead class="table-light">
                                    <tr class="text-uppercase text-center">

                                        <th scope="col">#</th>
                                        <th scope="col">name</th>
                                        <th scope="col">createAt</th>
                                        <th scope="col">updatedAt</th>
                                        <th scope="col">actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="({id, name, created_at, updated_at}, index) in departaments" :key="id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ name }}</td>
                                        <td class="text-primary"><i class="ri-checkbox-circle-line fs-17 align-middle"></i> {{ created_at }}</td>
                                        <td class="text-primary"><i class="ri-checkbox-circle-line fs-17 align-middle"></i> {{ updated_at }}</td>
                                        <td>
                                            <div class="hstack gap-3 fs-15">
                                                <router-link type="button" :to="{path: 'edit/'+id}" class="btn btn-warning btn-sm btn-icon waves-effect waves-light"><i class="ri-edit-2-line"></i></router-link>
                                                <button type="button" @click="deleteDepartment(id, name)" class="btn btn-danger btn-sm btn-icon waves-effect waves-light"><i class="ri-delete-bin-5-line"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- end table -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>

</template>

