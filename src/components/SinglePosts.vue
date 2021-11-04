<template>
	<div class="post_container">
		<img class="single_post_img" :src="doc.coverUrl" />
		<div class="post_info">
			<span class="post_time">
				<p class="time">{{ doc.createdAt }} ago</p>
			</span>
			<router-link
				:to="{ name: 'SinglePost', params: { id: doc.id } }"
				class="post_title_container"
			>
				<div class="post_heading">
					<h3 class="post_title style">{{ doc.title }}</h3>
				</div>
			</router-link>
			<p>Author: {{ doc.userName }}</p>
			<p>{{ snippet }}</p>
			<div v-for="tag in doc.tags" :key="tag">
				<p># {{ tag }} ,</p>
			</div>
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
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;700&family=Mukta:wght@300&display=swap");
.post_container {
	width: 90vw;
	height: 100vh;
	margin: 0 0 80px 0;
	background: black;
}
.post_info {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.post_time {
	height: 100px;
	width: 100px;
	background-color: #f8f8f8;
	border-radius: 50%;
	display: flex;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	margin: -50px 0 0 0;
	border: solid 1px black;
}
.time {
	width: 90%;
	font-family: "Mukta", sans-serif;
	color: black;
}
.post_title {
	font-weight: 900;
}
.style {
	font-family: "Mukta", sans-serif;
	color: #ffffff;
}
</style>
