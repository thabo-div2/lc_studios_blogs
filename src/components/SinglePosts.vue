<template>
	<div>
		<router-link :to="{ name: 'SinglePost', params: { id: doc.id } }">
			<h3>{{ doc.title }}</h3>
		</router-link>
		<img :src="doc.coverUrl" />
		<p>Author: {{ doc.userName }}</p>
		<p>{{ snippet }}</p>
		<div v-for="tag in doc.tags" :key="tag">
			<p># {{ tag }} ,</p>
		</div>
		<p>{{ doc.createdAt }}</p>
	</div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
	props: ["doc"],
	setup(props) {
		const snippet = computed(() => {
			return props.doc.content.substring(0, 25) + "...";
		});

		return { snippet };
	},
};
</script>

<style></style>
