<template>
	<nav>
		<div v-if="user">
			<router-link :to="{ name: 'ViewPost' }">See All Post</router-link>
			<router-link :to="{ name: 'CreatePost' }">Create a Post</router-link>
			<div>
				<p>hey there... {{ user.displayName }}</p>
				<p class="email">Currently logged in as... {{ user.email }}</p>
			</div>
			<button @click="handleClick">Logout</button>
		</div>
	</nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUsers from "../composables/getUsers";
import { useRouter } from "vue-router";

export default {
	setup() {
		const { user } = getUsers();
		const { logout, error } = useLogout();
		const router = useRouter();

		const handleClick = async () => {
			await logout();
			if (!error.value) {
				console.log("user logged out");
				router.push("/");
			}
		};

		return { handleClick, user };
	},
};
</script>

<style></style>
