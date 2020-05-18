import Vue from 'vue'; 
import App from './App.vue';
import router from './router'; //import router

Vue.config.productionTip = false;

new Vue({ //instance Vue
  router, //import router instance vue
  render: h => h(App),
}).$mount('#app'); //lien avec sélecteur index.html
