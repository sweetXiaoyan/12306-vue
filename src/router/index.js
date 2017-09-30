import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/login'
import Register from '../pages/register'
import Home from '../pages/home'
import Address from '../pages/address'
import TicketList from '../pages/ticketList'
import Timer from '../components/common/timer/time'
Vue.use(VueRouter)

export default  new VueRouter({
    mode:'history',
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
        },
        {
            path:"/ticketList",
            component:TicketList
        },
        {
          path:'/timer',
          component:Timer
        }

    ]
})
