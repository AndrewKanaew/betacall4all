import Vue from "vue";

import VueMaterial from "vue-material";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial, axios, VueAxios);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
