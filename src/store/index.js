import Vue from 'vue';
import Vuex from 'vuex';
import homeActions from '../components/Home/data/action'

Vue.use(Vuex);

const store = new Vuex.Store({
    ...homeActions,
})

export default store;