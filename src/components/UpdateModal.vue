<template>
	<div v-show="props.modalActive" class="bg">
		<div v-show="props.modalActive" class="modal-inner">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ["modalActive"],
	setup(props) {
		console.log("prop", props.modalActive);

		return { props };
	},
};
</script>

<style>
.modal {
	background: black;
}
</style>
