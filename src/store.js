import Vue from "vue";
import Vuex from "vuex";

import dialogState from "./storages/dialogs.state";
import usersState from "./storages/users.state";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dialogState,
		usersState
	},
	mutations: {},
	actions: {}
});
