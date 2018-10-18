<template>
	<div>
		<md-table class="user-list" v-model="searched" md-sort="id" md-sort-order="asc" md-card md-fixed-header>
			<md-table-toolbar>
				<div class="md-toolbar-section-start">
					<div class="md-title">Список пользователей</div>
				</div>
				<md-field md-clearable class="md-toolbar-section-end">
					<md-input placeholder="Поиск по имени" v-model="search" @input="searchInUsersList"/>
				</md-field>
			</md-table-toolbar>

			<md-table-empty-state
				md-label="Пользователь не найден"
				:md-description="`Пользователь ${search} не найден. Вы можите добавить нового пользователя`">
				<md-button @click="addUserHandler" class="md-primary md-raised">Добавить пользователя</md-button>
			</md-table-empty-state>

			<md-table-row slot="md-table-row" slot-scope="{ item }">
				<md-table-cell width="48" md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
				<md-table-cell md-label="ФИО" md-sort-by="fullName">{{ item.fullName }}</md-table-cell>
				<md-table-cell md-label="Телефон" md-sort-by="phone">{{ item.phone }}</md-table-cell>
				<md-table-cell md-label="Роль" md-sort-by="role">{{ item.role ? 'Администратор' : 'Менеджер' }}</md-table-cell>
				<md-table-cell md-label="Действия" md-sort-by="role"  md-numeric>
					<md-button class="md-fab md-mini md-primary">
						<md-icon>edit</md-icon>
					</md-button>
					<md-button class="md-fab md-mini md-plain">
						<md-icon>delete</md-icon>
					</md-button>
				</md-table-cell>
			</md-table-row>
		</md-table>
		<create-user-dialog />
		<md-button @click="addUserHandler" class="md-fab md-accent page-action">
			<md-icon>add</md-icon>
		</md-button>
	</div>
</template>

<script>
import { mapState } from "vuex";
import CreateUserDialog from "../../components/Dialogs/CreateUserDialog";

const toLower = text => {
	return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
	if (term) {
		return items.filter(item =>
			toLower(item.fullName).includes(toLower(term))
		);
	}
	return items;
};

export default {
	name: "UserListPage",
	components: { CreateUserDialog },
	data() {
		return {
			searched: [],
			search: ""
		};
	},
	computed: mapState(["dialogState", "usersState"]),
	mounted() {},
	created() {
		this.searched = this.usersState;
	},
	methods: {
		searchInUsersList() {
			this.searched = searchByName(this.usersState, this.search);
		},
		addUserHandler() {
			this.dialogState.showCreateUserDialog = true;
		}
	}
};
</script>

<style scoped>
.page-action {
	bottom: 50px;
	position: absolute;
	right: 50px;
}
.md-field {
	max-width: 300px;
}
</style>
