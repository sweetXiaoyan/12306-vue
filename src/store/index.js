/**
 * Created by Administrator on 2017/10/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
  checkedTime:"10月20日",
};
const getters ={

};

const mutations = {
  changeTime(state,data){
     state.checkedTime = data;
  }
}

;
const actions = {

};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
})
export default store;
