import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
//import LoginLayout from './views/LoginLayout.vue'
//import LoginComponent from './components/Login.vue'
//import ForgetPasswordComponent from './components/ForgetPassword.vue'
//import ChangePasswordComponent from './components/ChangePassword.vue'
import Mark from './views/Mark.vue'
import MarkHome from './views/MarkHome.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  //mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    /*{
      path: '/',
      name: '',
      component: LoginLayout,
      children:[
          {path:'/' , name:'login' ,component:LoginComponent},
          {path:'/forgetpassword' , name:'forgetpassword' ,component:ForgetPasswordComponent},
          {path:'/changepassword' , name:'changepassword' ,component:ChangePasswordComponent}
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },*/
    {
      path: '/mark',
      name: 'mark',
      component: Mark,
    },
    {
      path: '/markHome',
      name: 'markHome',
      component: MarkHome,
      children:[
       
        {
          path: 'Dashboard',  
          //name:'main', 
          components: {
            default: Dashboard,
            aside: AsideMenu 
          }
        },
        {
          path: 'deviceStatus',
          components: {
            default: DeviceStatus,
            aside: AsideMenu2
          }
        },
        {
          path: '',
          redirect: 'Dashboard'
        }
      ]
    },
   
  ]
})
