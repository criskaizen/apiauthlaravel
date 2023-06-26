<script setup>
</script>
<template>
    <PageLayout>
        <div class="row">
            <div class="col-lg-12">
                <div class="card" id="invoiceList">
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
                            <table class="table align-middle table-bordered mb-0">
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

