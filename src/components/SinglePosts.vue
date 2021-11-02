<template>
	<div>
		<img class="single_post_img" :src="doc.coverUrl" />
		<router-link :to="{ name: 'SinglePost', params: { id: doc.id } }"  class="post_title_container">
			<h3 class="post_title">{{ doc.title }}</h3>
		</router-link>
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
