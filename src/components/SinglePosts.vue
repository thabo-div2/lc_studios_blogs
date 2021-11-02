<template>
	<div>
		<img class="single_post_img" :src="doc.coverUrl" />
		<div class="post_info">
			<router-link :to="{ name: 'SinglePost', params: { id: doc.id } }"  class="post_title_container">
				<div class="post_heading">
					<h3 class="post_title">{{ doc.title }}</h3>
				</div>
			</router-link>
			<p>Author: {{ doc.userName }}</p>
			<p>{{ snippet }}</p>
			<div v-for="tag in doc.tags" :key="tag">
				<p># {{ tag }} ,</p>
			</div>
			<p>{{ doc.createdAt }}</p>
		</div>
	</div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
	props: ["doc"],
	setup(props) {
		const snippet = computed(() => {
			return props.doc.content.substring(0, 25) + "...";
		});

		return { snippet };
	},
};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;700&family=Mukta:wght@300&display=swap');
	.post_info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.post_heading {
		display: flex;
		margin: -180px 0 0 0;
		justify-content: center;
	}
	.post_title {
		color: #7c8ebf;
		font-weight: 700;
		font-size: 60px;
		font-family: 'Mukta', sans-serif;
	}
</style>
