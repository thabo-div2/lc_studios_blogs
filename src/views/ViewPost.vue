<template>
	<div>
		<div v-if="documents">
			<div v-for="doc in documents" :key="doc">
				<h3>{{ doc.title }}</h3>
				<img :src="doc.coverUrl" />
				<p>Made by: {{ doc.userName }}</p>
				<p>{{ doc.content }}</p>
				<div v-for="tag in doc.tags" :key="tag">
					<p># {{ tag }} ,</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import getCollection from "@/composables/getCollection";

export default {
	setup() {
		const { error, documents } = getCollection("posts");

		return { error, documents };
	},
};
</script>

<style>
img {
	width: 300px;
	height: 300px;
	object-fit: cover;
}
</style>
