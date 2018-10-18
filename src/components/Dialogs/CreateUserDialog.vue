<template>
	<md-dialog :md-active.sync="dialogState.showCreateUserDialog">
		<md-dialog-title>
			<div class="md-title">Добавить пользователя</div>
		</md-dialog-title>
		<create-user-form />
	</md-dialog>
</template>

<script>
import { mapState } from "vuex";
import CreateUserForm from "../Forms/CreateUserForm";
export default {
	name: "CreateUserDialog",
	components: { CreateUserForm },
	computed: mapState(["dialogState"])
};
</script>

<style scoped>
</style>
