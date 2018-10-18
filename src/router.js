import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginPage from "./views/LoginPage.vue";
import DashboardPage from "./views/admin/DashboardPage.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/admin",
			name: "admin",
			component: DashboardPage
		},
		{
			path: "/login",
			name: "login",
			component: LoginPage
		}
	]
});
