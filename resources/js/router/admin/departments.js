export default [
    {
        path: "/departments",
        name: "departments",
        component: () => import(/* webpackChunkName: "Index" */ "../../views/Departments/Index.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: () => import(/* webpackChunkName: "Edit" */ "../../views/Departments/Edit.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
    {
        path: "/create",
        name: "create",
        component: () => import(/* webpackChunkName: "Create" */ "../../views/Departments/Create.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
];
