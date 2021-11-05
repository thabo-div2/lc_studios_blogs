<template>
	<div v-if="error">{{ error }}</div>
	<div class="view_post_container" v-if="post">
		<router-link :to="{ name: 'ViewPost' }" class="arrow_container">
			<i class="fas fa-arrow-left back_arrow"></i>
		</router-link>
		<button v-if="ownership" @click="handleDelete">Delete Post</button>
		<div class="modal_content">
			<img class="postImg" :src="post.coverUrl" />
			<h3>{{ post.title }}</h3>
			<p>{{ post.content }}</p>
		</div>
		<div class="modal-body">
			<h5>Popover in a modal</h5>
			<p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
			<hr>
			<h5>Tooltips in a modal</h5>
			<p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
		</div>
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
import UpdateModal from "@/components/UpdateModal.vue";
import { computed } from "@vue/reactivity";
import CommentsWindow from "@/components/CommentsWindow.vue";

export default {
	props: ["id"],
	components: { CommentsForm, CommentsWindow, UpdateModal },
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

<style>
	.view_post_container {
		margin: 193px 0 0 0;
	}
	.arrow_container {
		text-decoration: none;
	}
	.back_arrow {
		display: flex;
		margin: 0 0 0 40px;
		padding: 15px 0 0 0;
		font-size: 31px;
		text-decoration: none;
		position: fixed;
	}
	.postImg {
		width: 60vw;
		height: 74vh;
		object-fit: contain;
	}
</style>
