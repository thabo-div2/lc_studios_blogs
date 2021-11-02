<template>
	<div v-if="error">{{ error }}</div>
	<div v-if="post">
		<h3>{{ post.title }}</h3>
		<img :src="post.coverUrl" />
		<p>{{ post.content }}</p>
		<button v-if="ownership" @click="handleDelete">Delete Post</button>
	</div>
	<CommentsWindow :doc="props.id" />
	<CommentsForm :doc="props.id" />
</template>

<script>
import { useRouter } from "vue-router";
import useSingleCollection from "@/composables/useSingleCollection";
import getSingleCollection from "@/composables/getSingleCollection";
import getUsers from "@/composables/getUsers";
import useStorage from "@/composables/useStorage";
import CommentsForm from "@/components/CommentsForm.vue";
import { computed } from "@vue/reactivity";
import CommentsWindow from "@/components/CommentsWindow.vue";

export default {
	props: ["id"],
	components: { CommentsForm, CommentsWindow },
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
			router.push("/posts");
		};

		console.log(props.id);

		return { error, post, ownership, handleDelete, props };
	},
};
</script>

<style></style>
