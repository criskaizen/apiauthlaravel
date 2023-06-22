<script setup>
import { bodyScript } from '@/helpers/load_script';
import { onMounted, ref } from 'vue';
onMounted( () => {
    bodyScript('assets/js/pages/password-addon.init.js');
});

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();

const form = ref({
    email:'',
    password: ''
});
</script>
<template>
    <div class="auth-page-content overflow-hidden pt-lg-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card overflow-hidden">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="p-lg-5 p-4 auth-one-bg h-100">
                                    <div class="bg-overlay"></div>
                                    <div class="position-relative h-100 d-flex flex-column">
                                        <div class="mb-4">
                                            <a href="index.html" class="d-block">
                                                <img src="assets/images/logo-light.png" alt="" height="18">
                                            </a>
                                        </div>
                                        <div class="mt-auto">
                                            <div class="mb-3">
                                                <i class="ri-double-quotes-l display-4 text-success"></i>
                                            </div>

                                            <div id="qoutescarouselIndicators" class="carousel slide" data-bs-ride="carousel">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                </div>
                                                <div class="carousel-inner text-center text-white-50 pb-5">
                                                    <div class="carousel-item active">
                                                        <p class="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <p class="fs-15 fst-italic">" The theme is really great with an amazing customer support."</p>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <p class="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end carousel -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->

                            <div class="col-lg-6">
                                <div class="p-lg-5 p-4">
                                    <div>
                                        <h5 class="text-primary">¡Bienvenido!</h5>
                                        <p class="text-muted">Inicia sesión para continuar con el sistema.</p>
                                    </div>

                                    <div class="mt-4">
                                        <form @submit.prevent="authStore.login(form)">
                                            <div class="mb-3">
                                                <label for="username" class="form-label">Nombre de usuario</label>
                                                <input type="text" v-model="form.email" class="form-control" id="username" placeholder="Introduzca el nombre de usuario">
                                            </div>

                                            <div class="mb-3">
                                                <div class="float-end">
                                                    <a href="auth-pass-reset-cover.html" class="text-muted">¿Olvidó su contraseña?</a>
                                                </div>
                                                <label class="form-label" for="password-input">Contraseña</label>
                                                <div class="position-relative auth-pass-inputgroup mb-3">
                                                    <input type="password" v-model="form.password" class="form-control pe-5 password-input" placeholder="Introduzca la contraseña" id="password-input">
                                                    <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></button>
                                                </div>
                                            </div>

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="auth-remember-check">
                                                <label class="form-check-label" for="auth-remember-check">Recuérdame</label>
                                            </div>

                                            <div class="mt-4">
                                                <button class="btn btn-success w-100" type="submit">Iniciar sesión</button>
                                            </div>

                                            <div class="mt-4 text-center">
                                                <div class="signin-other-title">
                                                    <h5 class="fs-13 mb-4 title">Siguenos en nuestras redes sociales</h5>
                                                </div>

                                                <div>
                                                    <button type="button" class="btn btn-primary btn-icon waves-effect waves-light"><i class="ri-facebook-fill fs-16"></i></button>
                                                    <button type="button" class="btn btn-danger btn-icon waves-effect waves-light"><i class="ri-google-fill fs-16"></i></button>
                                                    <button type="button" class="btn btn-dark btn-icon waves-effect waves-light"><i class="ri-github-fill fs-16"></i></button>
                                                    <button type="button" class="btn btn-info btn-icon waves-effect waves-light"><i class="ri-twitter-fill fs-16"></i></button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                    <div class="mt-5 text-center">
                                        <p class="mb-0">¿No tienes una cuenta?
                                            <router-link :to="{name:'register'}" class="fw-semibold text-primary text-decoration-underline">Regístrate</router-link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->

            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
</template>
