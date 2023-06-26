export default [
    {
        path: "/departments",
        name: "departments",
        component: () => import(/* webpackChunkName: "Index" */ "../../views/home/Departments/Index.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: () => import(/* webpackChunkName: "Edit" */ "../../views/home/Departments/Edit.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
    {
        path: "/create",
        name: "create",
        component: () => import(/* webpackChunkName: "Create" */ "../../views/home/Departments/Create.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
];
