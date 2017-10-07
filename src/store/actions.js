/**
 * Created by Administrator on 2017/10/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

const debug = process.env.NODE_ENV !== 'production'
export default  new Vuex.Store({
    actions,
    getters,
    modules:{

    },
    strict:debug,
    plugins:debug ?[createLogger()]:[]
})
Vue.use(Vuex);