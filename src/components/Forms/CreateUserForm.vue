<template>
    <form @submit="onSubmitHandler">
		<md-dialog-content>
			<md-field>
				<label>ФИО</label>
				<md-input type="text" v-model="user.fullName" required/>
			</md-field>
			<md-field>
				<label>Телефон</label>
				<md-input type="text" v-model="user.phone" required/>
			</md-field>
			<md-field>
				<label>Пароль</label>
				<md-input type="password" v-model="user.password" required/>
			</md-field>
			<md-switch v-model="user.role">Администратор</md-switch>
		</md-dialog-content>
		<md-dialog-actions>
			<md-button @click="onCloseHandler" class="md-accent">Отмена</md-button>
			<md-button type="submit" class="md-primary md-raised">Добавить</md-button>
		</md-dialog-actions>
	</form>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "CreateUserForm",
	data() {
		return {
			user: {
				fullName: "",
				phone: "",
				password: "",
				role: false
			}
		};
	},
	computed: mapState(["dialogState"]),
	methods: {
		onCloseHandler() {
			this.dialogState.showCreateUserDialog = false;
		},
		onSubmitHandler(event) {
			event.preventDefault();
		}
	}
};
</script>

<style scoped>
</style>
