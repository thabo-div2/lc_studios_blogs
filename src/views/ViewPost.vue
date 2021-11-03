<template>
	<div class="post_page_container">
		<div class="post_page">
			<BlogPosts v-if="showPosts" :formattedDocuments="formattedDocuments" />
		</div>
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
.single_post_img {
    width: 90vw;
    height: 78vh;
    -o-object-fit: cover;
    object-fit: cover;
}
.post_page {
	width: 100%;
	display: flex;
    justify-content: center;
}
.post_title_container {
	text-decoration: none;
	/* position: absolute; */
    /* bottom: -16%; */
    /* left: 50%; */
}
</style>
