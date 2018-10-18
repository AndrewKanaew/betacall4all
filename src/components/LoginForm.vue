<template>
    <form @submit="submitHandler">
        <md-field>
            <label>Телефон</label>
            <md-input type="text" v-model="user.phone" required/>
        </md-field>
        <md-field>
            <label>Пароль</label>
            <md-input type="password" v-model="user.password" required/>
        </md-field>
        <md-button type="submit" class="md-primary md-raised">Войти</md-button>
    </form>
</template>

<script>
export default {
    name: "LoginForm",
    data() {
        return {
            user: {
                phone: null,
                password: null
            }
        };
    },
    methods: {
        submitHandler(event) {
            event.preventDefault();
        }
    }
};
</script>

<style scoped>
</style>
