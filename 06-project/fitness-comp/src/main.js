import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Header from './components/Header'
import HeaderWSearch from './components/HeaderWSearch'
import Body from './components/Body'
import HeroWorkout from './components/HeroWorkout.vue'
import PersonalWorkout from './components/PersonalWorkout';


Vue.use(VueRouter);
Vue.config.productionTip = false


const router = new VueRouter({
  routes: [
    {
      path: '/',
      components:{
        a: Header,
        b: Body
      }
    }, 
    {
      path: '/PersonalWorkout',
      components: {
        a: Header,
        b: PersonalWorkout
      }
    },
    {
      path: '/HeroWorkout',
      components: {
        a: HeaderWSearch,
        b: HeroWorkout
      }
    }
  ],
mode: 'history'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount( '#app')

