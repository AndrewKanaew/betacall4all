<template>
	<md-dialog :md-active.sync="dialogState.showUpdateUserDialog">
		<md-dialog-title>
			<div class="md-title">Редактировать пользователя</div>
		</md-dialog-title>
		<update-user-form :user-id="userId" />
	</md-dialog>
</template>

<script>
import { mapState } from "vuex";
import UpdateUserForm from "../Forms/UpdateUserForm";
export default {
	name: "UpdateUserDialog",
	components: { UpdateUserForm },
	props: ["userId"],
	computed: mapState(["ordersLoad"])
};
</script>

<style scoped>
</style>
