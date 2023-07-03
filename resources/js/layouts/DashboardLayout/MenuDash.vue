<script setup>
import { BASE_URL } from "@/helpers/config";
import { onMounted } from "vue";
import { bodyScript } from "../../helpers/load_script";
onMounted(() => {
    bodyScript('assets/js/sidebar-menu.js');
    bodyScript('assets/js/icons/feather-icon/feather-icon.js');
    bodyScript('assets/js/script.js');

})
const item_sidebar = {
    "data": [
        {
            "title": "Pagina Principal",
            "icon": "home",
            "path": "/panelprincipal",
            "name_to": "panelprincipal"
        },
        {
            "title": "departments",
            "icon": "airplay",
            "path": "/departments",
            "name_to": "departments"
        },
        {
            "title": "Employess",
            "icon": "command",
            "path": "/employees",
            "name_to": "employees"
        }
    ]
}
</script>
<template>
    <header class="main-nav">
        <div class="sidebar-user text-center"><a class="setting-primary" href="javascript:void(0)"><i data-feather="settings"></i></a><img class="img-90 rounded-circle" src="assets/images/dashboard/1.png" alt="">
            <div class="badge-bottom"><span class="badge badge-primary">New</span></div><a href="user-profile.html">
                <h6 class="mt-3 f-14 f-w-600">Emay Walter</h6>
            </a>
            <p class="mb-0 font-roboto">Human Resources Department</p>
            <!-- <ul>
                <li><span><span class="counter">19.8</span>k</span>
                    <p>Follow</p>
                </li>
                <li><span>2 year</span>
                    <p>Experince</p>
                </li>
                <li><span><span class="counter">95.2</span>k</span>
                    <p>Follower </p>
                </li>
            </ul> -->
        </div>
        <nav>
            <div class="main-navbar">
                <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
                <div id="mainnav">
                    <ul class="nav-menu custom-scrollbar">
                        <li class="back-btn">
                            <div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
                        </li>

                        <!-- <li class="dropdown"> <a class="nav-link menu-title" href="javascript:void(0)"><i data-feather="box"></i><span>Project </span></a>
                            <ul class="nav-submenu menu-content">
                                <li><a href="projects.html">Project List</a></li>
                                <li><a href="projectcreate.html">Create new </a></li>
                            </ul>
                        </li> -->
                        <li v-for="({ title, icon, name_to}, index) in item_sidebar.data" :key="index" class="dropdown" >
                            <router-link class="nav-link" active-class="active" :to="{ name: name_to }" exact>
                                <i :data-feather="icon"></i>
                                <span>{{ title }}</span>
                            </router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
