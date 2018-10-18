import Vue from "vue";
import Vuex from "vuex";

import dialogState from "./storages/dialogs.state";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dialogState
	},
	mutations: {},
	actions: {}
});
