import axios from "axios";

export const ordersLoad = ({ commit }) => {
	axios
		.get("/api/orders", {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json"
			}
		})
		.then(r => r.data)
		.then(orders => commit("SET_ORDERS", orders));
};
