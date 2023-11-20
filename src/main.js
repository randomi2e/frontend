import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Support from './components/Support.vue';
import About from './components/About.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/support', component: Support },
  { path: '/app', component: App },
  { path: '/about', component: About },
];
// eslint-disable-next-line
const router = new VueRouter({
  routes
});

new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#app');