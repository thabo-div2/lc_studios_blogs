<template>
	<div v-if="error">{{ error }}</div>
	<div v-if="post">
		<h3>{{ post.title }}</h3>
		<img :src="post.coverUrl" />
		<p>{{ post.content }}</p>
		<button v-if="ownership" @click="handleDelete">Delete Post</button>
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import useSingleCollection from "@/composables/useSingleCollection";
import getSingleCollection from "@/composables/getSingleCollection";
import getUsers from "@/composables/getUsers";
import useStorage from "@/composables/useStorage";
import { computed } from "@vue/reactivity";

export default {
	props: ["id"],
	setup(props) {
		const { error, post } = getSingleCollection("posts", props.id);
		const { user } = getUsers();
		const { deleteImage } = useStorage();
		const { delDoc } = useSingleCollection("posts", props.id);
		const router = useRouter();

		const ownership = computed(() => {
			return post.value && user.value && user.value.uid == post.value.userId;
		});

		const handleDelete = async () => {
			await deleteImage(post.value.filePath);
			await delDoc();
			router.push({ name: "ViewPost" });
		};

		return { error, post, ownership, handleDelete };
	},
};
</script>

<style></style>
