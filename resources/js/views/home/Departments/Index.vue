<script setup>
import { ref, onMounted } from 'vue';
import { confirmation } from '@/helpers/functions';
import axios from 'axios';
onMounted(() => {
    getDepartaments()
});

const departaments = ref([]);
const load = ref(false);

const getDepartaments = async () => {
    load.value = false;
    await axios.get('departments').then(
        response => (
            departaments.value = response.data
        ))
    load.value = true;
}

const deleteDepartment = (id, name) => {
    let cris = confirmation(name, ('departments/' + id), '/departments');
    console.log(cris);
}
</script>
<template>
    <PageLayout title="Departments" title_padre="Departments" title_hijo="List Departments" />
    <div class="container-fluid">
        <div class="row project-cards">
            <div class="col-md-12 project-list">
                <div class="card">
                    <div class="row">
                        <div class="col-md-4 p-0">
                            <!-- <ul class="nav nav-tabs border-tab">
                                <li class="nav-item"><a class="nav-link active" id="top-home-tab" data-bs-toggle="tab" href="#top-home" role="tab" aria-controls="top-home" aria-selected="true"><i data-feather="target"></i>All</a></li>
                                <li class="nav-item"><a class="nav-link" id="profile-top-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="false"><i data-feather="info"></i>Doing</a></li>
                                <li class="nav-item"><a class="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false"><i data-feather="check-circle"></i>Done</a></li>
                            </ul> -->
                        </div>
                        <div class="col-md-8 p-0">
                            <div class="form-group mb-0 me-0"></div>
                            <!-- <button type="button" class="btn btn-primary"><i class="fa fa-plus"></i> Create New Department</button> -->
                            <router-link type="button" :to="{ path: 'create' }" class="btn btn-primary"><i class="fa fa-plus"></i> Create New Department</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-8"></div>
                            <div class="col-sm-4">
                                <div class="input-group">
                                    <input class="form-control" type="search" placeholder="Busqueda.......">
                                    <button class="input-group-text" type="button" @click="getDepartaments"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <Loader v-if="!load" />
                        <div v-else class="table-responsive mt-4">
                            <table class="table table-border-horizontal">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">CreateAt</th>
                                        <th scope="col">UpdateAt</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="({ id, name, created_at, updated_at }, index) in departaments" :key="id">
                                        <th scope="row">{{ index + 1 }}</th>
                                        <td>{{ name }}</td>
                                        <td>{{ created_at }}</td>
                                        <td>{{ updated_at }}</td>
                                        <td>
                                            <div class="btn-group">
                                                <router-link type="button" :to="{path: 'edit/'+id}" class="btn btn-warning btn-xs"><i class="fa fa-edit"></i></router-link>
                                                <button @click="deleteDepartment(id, name)" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

