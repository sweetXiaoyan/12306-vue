import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/login'
import Register from '../pages/register'
Vue.use(VueRouter)

export default  new VueRouter({
    routes:[
        {
            path:'/',
            name:'Login',
            component:Login
        },
        {
            path:"/reg",
            name:'Register',
            component:Register
        }

    ]
})