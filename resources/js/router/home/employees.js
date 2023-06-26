export default [
    {
        path: "/employees",
        name: "employees",
        component: () => import(/* webpackChunkName: "EmployeesIndex" */ "../../views/home/Employees/Index.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
    {
        path: "/graphic",
        name: "graphic",
        component: () => import(/* webpackChunkName: "Graphic" */ "../../views/home/Employees/Graphic.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
    {
        path: "/reports",
        name: "reports",
        component: () => import(/* webpackChunkName: "Report" */ "../../views/home/Employees/Report.vue"),
        meta: {
            layout: 'Dashboard',
        }
    },
];
