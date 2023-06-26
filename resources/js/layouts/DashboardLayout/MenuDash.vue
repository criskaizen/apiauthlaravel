<script setup>
import { BASE_URL } from "@/helpers/config";

const item_sidebar = {
    "data": [
        {
            "title": "Pagina Principal",
            "icon": "ri-honour-line",
            "path": "/panelprincipal",
            "name_to": "panelprincipal"
        },
        {
            "title": "departments",
            "icon": "ri-honour-line",
            "path": "/departments",
            "name_to": "departments"
        },
        {
            "title": "Employess",
            "icon": "ri-honour-line",
            "path": "/employees",
            "name_to": "employees"
        }
    ]
}
</script>
<template>
    <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
            <!-- Dark Logo-->
            <a href="index.html" class="logo logo-dark">
                <span class="logo-sm">
                    <img :src="BASE_URL+'assets/images/logo-sm.png'" alt="" height="22" />
                </span>
                <span class="logo-lg">
                    <img :src="BASE_URL+'assets/images/logo-dark.png'" alt="" height="17" />
                </span>
            </a>
            <!-- Light Logo-->
            <a href="index.html" class="logo logo-light">
                <span class="logo-sm">
                    <img :src="BASE_URL+'assets/images/logo-sm.png'" alt="" height="22" />
                </span>
                <span class="logo-lg">
                    <img :src="BASE_URL+'assets/images/logo-light.png'" alt="" height="17" />
                </span>
            </a>
            <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                id="vertical-hover">
                <i class="ri-record-circle-line"></i>
            </button>
        </div>

        <div id="scrollbar">
            <div class="container-fluid">
                <div id="two-column-menu"></div>

                <ul class="navbar-nav" id="navbar-nav">
                    <li class="menu-title"><span data-key="t-menu">Menu</span></li>

                    <li v-for="({ title, icon, name_to }, index) in item_sidebar.data" :key="index" class="nav-item">
                        <router-link class="nav-link" active-class="active" :to="{ name: name_to }" exact>
                            <i :class="icon"></i>
                            <span>{{ title }}</span>
                        </router-link>
                    </li>


                    <!-- <li class="nav-item">
                        <router-link class="nav-link menu-link" :class="$route.path == '/panelprincipal' ? 'active' : ''">
                            <i class="ri-honour-line"></i>
                            <span data-key="t-widgets">Panel Principal</span>
                        </router-link>
                    </li> -->


                   <!--  <li class="nav-item">
                        <a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse"
                            role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                            <i class="ri-dashboard-2-line"></i>
                            <span data-key="t-dashboards">Dashboards</span>
                        </a>
                        <div class="collapse menu-dropdown" id="sidebarDashboards">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <a href="dashboard-analytics.html" class="nav-link" data-key="t-analytics">
                                        Analytics
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="dashboard-crm.html" class="nav-link" data-key="t-crm">
                                        CRM
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="index.html" class="nav-link" data-key="t-ecommerce">
                                        Ecommerce
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="dashboard-crypto.html" class="nav-link" data-key="t-crypto">
                                        Crypto
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="dashboard-projects.html" class="nav-link" data-key="t-projects">
                                        Projects
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="dashboard-nft.html" class="nav-link" data-key="t-nft">
                                        NFT</a>
                                </li>
                                <li class="nav-item">
                                    <a href="dashboard-job.html" class="nav-link"><span data-key="t-job">Job</span>
                                        <span class="badge badge-pill bg-success" data-key="t-new">New</span></a>
                                </li>
                            </ul>
                        </div>
                    </li> -->

                </ul>
            </div>
            <!-- Sidebar -->
        </div>

        <div class="sidebar-background"></div>
    </div>
</template>
