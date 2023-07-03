<script setup>
import { BASE_URL } from "@/helpers/config";
import { bodyScript, delScript } from '@/helpers/load_script';
import { onMounted, ref } from 'vue';

onMounted(() => {
    bodyScript('assets/js/script.js');
    bodyScript('assets/js/icons/feather-icon/feather-icon.js');

});

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();

const form = ref({
    name: '',
    email: '',
    password: ''
});




const alert = () => {
    Swal.fire({
        title: "Any fool can use a computer",
        confirmButtonClass: "btn btn-primary w-xs mt-2",
        buttonsStyling: !1,
        showCloseButton: !0,
    });
}
</script>
<template>
    <section>
        <div class="container-fluid p-0">
            <div class="row m-0">
                <div class="col-12 p-0">
                    <div class="login-card">
                        <form @submit.prevent="authStore.register(form)" class="theme-form login-form">
                            <h4>Create your account</h4>
                            <h6>Enter your personal details to create account</h6>
                            <div class="form-group">
                                <label>Your Name</label>
                                <div class="input-group"><span class="input-group-text"><i class="icon-user"></i></span>
                                    <input class="form-control" type="text" v-model="form.name" required placeholder="Fist Name">
                                </div>

                            </div>
                            <div class="form-group">
                                <label>Email Address</label>
                                <div class="input-group"><span class="input-group-text"><i class="icon-email"></i></span>
                                    <input class="form-control" type="email" v-model="form.email" required placeholder="Test@gmail.com">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
                                    <input class="form-control" type="password" v-model="form.password" name="login[password]" required placeholder="*********">
                                    <div class="show-hide"><span class="show"> </span></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="checkbox">
                                    <input id="checkbox1" type="checkbox">
                                    <label class="text-muted" for="checkbox1">Agree with <span>Privacy Policy </span></label>
                                </div>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary btn-block" type="submit">Create Account</button>
                            </div>
                            <div class="login-social-title">
                                <h5>signup with</h5>
                            </div>
                            <div class="form-group">
                                <ul class="login-social">
                                    <li><a href="https://www.linkedin.com/login" target="_blank"><i data-feather="linkedin"></i></a></li>
                                    <li><a href="https://www.linkedin.com/login" target="_blank"><i data-feather="twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/login" target="_blank"><i data-feather="facebook"></i></a></li>
                                    <li><a href="https://www.instagram.com/login" target="_blank"><i data-feather="instagram"> </i></a></li>
                                </ul>
                            </div>
                            <p>Already have an account?
                                <router-link :to="{name:'login'}">Sign in</router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
