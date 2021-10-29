<template>
	<div>
		<BlogPosts v-if="showPosts" :formattedDocuments="formattedDocuments" />
	</div>
</template>

<script>
import BlogPosts from "@/components/BlogPosts.vue";
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed } from "vue";

export default {
	components: { BlogPosts },
	setup() {
		const { error, documents, showPosts } = getCollection("posts");

		const formattedDocuments = computed(() => {
			if (documents.value) {
				return documents.value.map((doc) => {
					let time = formatDistanceToNow(doc.createdAt.toDate());
					return { ...doc, createdAt: time };
				});
			}
		});

		return { error, documents, formattedDocuments, showPosts };
	},
};
</script>

<style>
/* img {
	width: 300px;
	height: 300px;
	object-fit: cover;
} */
</style>
