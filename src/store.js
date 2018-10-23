import Vue from "vue";
import Vuex from "vuex";

import dialogState from "./storages/dialogs.state";
import usersState from "./storages/users.state";
import ordersState from "./storages/orders.state";

import { SET_ORDERS } from "./mutations/orders.mutations";

import { ordersLoad } from "./actions/orders.action";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dialogState,
		usersState,
		ordersState
	},
	mutations: {
		SET_ORDERS
	},
	actions: {
		ordersLoad
	}
});
