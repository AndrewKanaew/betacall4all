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
				<md-input type="password" v-model="user.password"/>
			</md-field>
			<md-switch v-model="user.role">Администратор</md-switch>
		</md-dialog-content>
		<md-dialog-actions>
			<md-button @click="onCloseHandler" class="md-accent">Отмена</md-button>
			<md-button type="submit" class="md-primary md-raised">Сохранить</md-button>
		</md-dialog-actions>
	</form>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "UpdateUserForm",
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
	props: ["userId"],
	computed: mapState(["dialogState", "usersState"]),
	mounted() {
		this.usersState.map(user => {
			if (user.id === this.userId) {
				this.user = user;
			}
		});
	},
	methods: {
		onCloseHandler() {
			this.dialogState.showUpdateUserDialog = false;
		},
		onSubmitHandler(event) {
			event.preventDefault();
			this.dialogState.showUpdateUserDialog = false;
		}
	}
};
</script>

<style scoped>
</style>
