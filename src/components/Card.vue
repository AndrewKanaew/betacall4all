<template>
    <md-card>
        <md-card-header>
            <div class="md-title">{{title}}</div>
        </md-card-header>
        <md-card-content>
            <slot />
        </md-card-content>
    </md-card>
</template>

<script>
export default {
	name: "Card",
	props: {
		title: String
	}
};
</script>

<style scoped>
</style>
