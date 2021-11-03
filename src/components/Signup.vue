<template>
	<form @submit.prevent="handleSubmit" class="signup_form">
		<input
			class="inputs"
			type="text"
			required
			placeholder="name"
			v-model="displayName"
		/>
		<input
			class="inputs"
			type="text"
			required
			placeholder="surname"
			v-model="surname"
		/>
		<input
			class="inputs"
			type="email"
			required
			placeholder="email"
			v-model="email"
		/>
		<input
			class="inputs"
			type="password"
			required
			placeholder="password"
			v-model="password"
		/>
		<div class="error">{{ error }}</div>
		<button class="signup_btn">Sign up</button>
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

<style>
.signup_form {
	display: flex;
    width: 70%;
    margin: 0 0 0 70px;
    align-items: center;
	flex-direction: column;
}
.signup_subtitle {
	color: #e3ad1b;
	/* -webkit-text-stroke: 0.5px black; */
	/* -webkit-font-smoothing: antialiased; */
	font-size: 28px;
	font-family: "Barlow", sans-serif;
}
.signup_btn {
	background: #7c8ebf;
	border: none;
	width: 35%;
	padding: 9px 0 9px 0;
	border-radius: 15px;
	font-family: "Barlow", sans-serif;
	font-size: 14px;
	font-weight: 600;
	color: white;
}
.signup_btn:hover {
	cursor: pointer;
}
.login_hover {
	color: #e3ad1b;
	cursor: pointer;
	font-family: "Barlow", sans-serif;
	font-weight: 600;
	font-size: 19px;
}
.login_hover_content {
	font-family: "Barlow", sans-serif;
	font-weight: 500;
	font-size: 19px;
}
</style>
