<template>
	<div class="ordersPage"></div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "OrdersPage",
	computed: mapState(["ordersState"]),
	mounted() {
		this.$store.dispatch("ordersLoad");
	}
};
</script>

<style scoped>
</style>
