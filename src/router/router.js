import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: "/crear",
        component: () => import("@/page/PageCrear")
    },
    {
        path: "/consultar",
        component: () => import("@/page/PageConsultar")
    },
]

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;