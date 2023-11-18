import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Function from './components/Function.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/sign-up', component: SignUp },
  { path: '/function', component: Function },
  { path: '/app', component: App }
];
// eslint-disable-next-line
const router = new VueRouter({
  routes
});

new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#app');