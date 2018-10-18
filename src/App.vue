<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<style lang="scss">
	.md-content.md-table-content.md-scrollbar.md-theme-default.md-table-empty{
		display: none;
	}
</style>
<script>
import Layout from "./components/Layout";
export default {
	components: { Layout }
};
</script>
