<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" required placeholder="name" v-model="displayName" />
		<input type="text" required placeholder="surname" v-model="surname" />
		<input type="email" required placeholder="email" v-model="email" />
		<input type="password" required placeholder="password" v-model="password" />
		<div class="error">{{ error }}</div>
		<button>Sign up</button>
	</form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
import { useRouter } from "vue-router";

export default {
	setup() {
		const { error, signup } = useSignup();
		const router = useRouter();

		// refs
		const displayName = ref("");
		const surname = ref("");
		const email = ref("");
		const password = ref("");

		const handleSubmit = async () => {
			await signup(email.value, password.value, displayName.value);
			console.log("user signed up");

			router.push("/posts");
		};

		return { displayName, surname, email, password, handleSubmit, error };
	},
};
</script>

<style></style>
