<template>
	<div class="post_page_container">
		<div class="create_post_container">
			<img src="" alt="" class="create_img" />
			<router-link :to="{ name: 'CreatePost' }" class="create_post_link"
				>Create a Post</router-link
			>
		</div>
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
.post_page_container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
/* .single_post_img {
    width: 90vw;
    height: 75vh;
    -o-object-fit: cover;
    object-fit: cover;
    margin: 7px 0 0 0;
} */
.single_post_img {
	width: 100%;
	/* height: 75vh; */
	-o-object-fit: cover;
	object-fit: contain;
	margin: 7px 0 0 0;
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
.create_post_container {
	display: flex;
	flex-direction: row;
	/* background: #FFFFFF; */
	width: 26vw;
	border-bottom: solid 1px black;
	margin: 0 0 25px 0;
	/* border-radius: 50px; */
	overflow: hidden;
}
.create_img {
	background: black;
	width: 65px;
	height: 65px;
	border-radius: 50px;
	border: none;
	margin: 0 55px 7px 30px;
}
.create_post_link {
	display: flex;
	align-items: flex-end;
	text-decoration: none;
	color: black;
	font-family: "Mukta", sans-serif;
	font-size: 20px;
}
</style>
