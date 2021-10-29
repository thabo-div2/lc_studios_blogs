<template>
	<div v-if="error">{{ error }}</div>
	<div v-if="post">
		<h3>{{ post.title }}</h3>
		<img :src="post.coverUrl" />
		<p>{{ post.content }}</p>
		<button @click="deletePost">Delete Post</button>
	</div>
</template>

<script>
import getSingleCollection from "@/composables/getSingleCollection";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "../firebase/config";

export default {
	props: ["id"],
	setup(props) {
		const route = useRoute();
		const router = useRouter();
		const { error, post } = getSingleCollection("posts", route.params.id);

		const deletePost = async () => {
			await projectFirestore.collection("posts").doc(props.id).delete();

			router.push("/posts");
		};

		return { error, post, deletePost };
	},
};
</script>

<style></style>
