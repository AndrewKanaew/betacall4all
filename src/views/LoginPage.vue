<template>
    <div class="login-wrapper">
        <card class="login-card" title="Вход">
            <login-form />
        </card>
    </div>
</template>
<script>
import Card from "../components/Card";
import LoginForm from "../components/LoginForm";
export default {
    name: "LoginPage",
    components: { LoginForm, Card }
};
</script>

<style scoped>
.login-wrapper {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
}
.login-card {
    margin-top: -150px;
    width: 320px;
}
</style>
