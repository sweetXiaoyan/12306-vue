import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/login'
import Register from '../pages/register'
import Home from '../pages/home'
import Address from '../pages/address'
Vue.use(VueRouter)

export default  new VueRouter({
    routes:[
        {
            path:'/',
            component:Login
        },
        {
            path:"/reg",
            component:Register
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/address",
            component:Address
        }

    ]
})