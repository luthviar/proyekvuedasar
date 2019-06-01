import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import  ComponentBelajarDasar from './components/ComponentBelajarDasar.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/belajar-dasar', component: ComponentBelajarDasar }
];

export default routes;