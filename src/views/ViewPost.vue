<template>
	<div>
		<div v-if="documents">
			<div v-for="doc in formattedDocuments" :key="doc">
				<h3>{{ doc.title }}</h3>
				<img :src="doc.coverUrl" />
				<p>Author: {{ doc.userName }}</p>
				<p>{{ doc.content }}</p>
				<div v-for="tag in doc.tags" :key="tag">
					<p># {{ tag }} ,</p>
				</div>
				<p>{{ doc.createdAt }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";

export default {
	setup() {
		const { error, documents } = getCollection("posts");

		const formattedDocuments = computed(() => {
			if (documents.value) {
				return documents.value.map((doc) => {
					let time = formatDistanceToNow(doc.createdAt.toDate());
					return { ...doc, createdAt: time };
				});
			}
		});

		return { error, documents, formattedDocuments };
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
