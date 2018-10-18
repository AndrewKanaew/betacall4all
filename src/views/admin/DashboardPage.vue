<template>
    <div class="md-layout">
		<div class="md-layout-item">
			<card title="Пользователи">
				<md-button @click="addUserHandler" class="md-primary md-raised">Добавить</md-button>
				<md-button to="/admin/users" class="md-primary">Список</md-button>
			</card>
		</div>
		<div class="md-layout-item">
			<card title="Заказы">
				<md-button to="/admin/orders" class="md-primary md-raised">Список</md-button>
			</card>
		</div>
		<div class="md-layout-item">
			<card title="Статистика">
				<md-button class="md-primary md-raised">Скачать</md-button>
				<md-button to="/admin/statistics" class="md-primary">Просмотреть</md-button>
			</card>
		</div>
		<create-user-dialog v-if="dialogState.showCreateUserDialog"/>
	</div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../../components/Card";
import CreateUserDialog from "../../components/Dialogs/CreateUserDialog";
export default {
	name: "DashboardPage",
	components: { CreateUserDialog, Card },
	computed: mapState(["dialogState"]),
	methods: {
		addUserHandler() {
			this.dialogState.showCreateUserDialog = true;
		}
	}
};
</script>

<style scoped>
</style>
