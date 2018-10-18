<template>
    <md-app>
        <md-app-toolbar class="md-primary">
            <div class="md-toolbar-section-start">
                <div class="md-title">BetaCall4All</div>
            </div>
            <div class="md-toolbar-section-end">
                <md-button class="md-primary">Выход</md-button>
            </div>
        </md-app-toolbar>
        <md-app-content>
            <slot/>
        </md-app-content>
    </md-app>
</template>

<script>
export default {
	name: "Layout"
};
</script>

<style scoped>
.md-app-content {
	background-color: #f1f1f1 !important;
	height: calc(100vh - 64px);
}
</style>
