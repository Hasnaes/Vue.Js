import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'; //import des composants
import newreading from './views/newreading.vue'
import updatereading from './views/updatereading.vue'
import deletereading from './views/deletereading.vue'
import categorie from './views/categorie.vue';
import newcat from './views/newcat.vue'
Vue.use(Router);

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ //chaque route contient un objet qui a pour params path, name et component
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/categorie',
      name: 'categorie',
      component: categorie,
    },
    {
      path: '/newreading',
      name: 'newreading',
      component: newreading,
    },
    {
      path: '/updatereading/:ReadingID',
      name: 'updatereading',
      component: updatereading,
    },
    {
      path: '/deletereading/:ReadingID',
      name: 'deletereading',
      component: deletereading,
    },
    {
    path: '/newcat',
    name: 'newcat',
    component: newcat,
  },
  ],
});
