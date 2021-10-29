<template>
	<div v-if="error">{{ error }}</div>
	<div v-if="post">
		<h3>{{ post.title }}</h3>
		<img :src="post.coverUrl" />
		<p>{{ post.content }}</p>
		<button v-if="ownership" @click="deletePost">Delete Post</button>
	</div>
</template>

<script>
import getSingleCollection from "@/composables/getSingleCollection";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "../firebase/config";
import getUsers from "@/composables/getUsers";
import { computed } from "@vue/reactivity";

export default {
	props: ["id"],
	setup(props) {
		const route = useRoute();
		const router = useRouter();
		const { error, post } = getSingleCollection("posts", route.params.id);
		const { user } = getUsers();

		const ownership = computed(() => {
			return post.value && user.value && user.value.uid == post.value.userId;
		});

		const deletePost = async () => {
			await projectFirestore.collection("posts").doc(props.id).delete();

			router.push("/posts");
		};

		return { error, post, deletePost, ownership };
	},
};
</script>

<style></style>
