<template>
    <div class="md-layout">
		<div class="md-layout-item">
			<card title="Пользователи">
				<md-button class="md-primary md-raised">Добавить</md-button>
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
	</div>
</template>

<script>
import Card from "../../components/Card";
export default {
	name: "DashboardPage",
	components: { Card }
};
</script>

<style scoped>
</style>
