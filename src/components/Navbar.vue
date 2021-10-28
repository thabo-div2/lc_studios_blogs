<template>
	<nav>
		<div v-if="user">
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

export default {
	setup() {
		const { user } = getUsers();
		const { logout, error } = useLogout();

		const handleClick = async () => {
			await logout();
			if (!error.value) {
				console.log("user logged out");
			}
		};

		return { handleClick, user };
	},
};
</script>

<style></style>
