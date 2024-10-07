import HomePage from '../components/HomePage.vue';
import SignUp from '../components/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/Login.vue';
import AddRestaurant from '../components/AddRestaurant.vue';
import UpdateRestaurant from '../components/UpdateRestaurant.vue';

const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: "/HomePage",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "LoginPage",
        component: LoginPage,
        path: "/login",
    },
    {
        name: "AddRestaurant",
        component: AddRestaurant,
        path: "/add-restaurant",
    },
    {
        name: "UpdateRestaurant",
        component: UpdateRestaurant,
        path: "/update-restaurant/:id",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;