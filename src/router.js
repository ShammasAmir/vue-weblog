import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue"
import Users from "./pages/Users.vue"
import Posts from "./pages/Posts.vue"

const routes = [
    { path: "/" , name : "home" , component : Home },
    { path: "/users" , name : "users" , component : Users },
    { path: "/posts" , name : "posts" , component : Posts }
];
const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;