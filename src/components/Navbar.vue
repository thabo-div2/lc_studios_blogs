<template>
  <nav>
    <div>
      <p>hey there... name</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";

export default {
  setup() {
    const { logout, error } = useLogout();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };

    return { handleClick };
  },
};
</script>

<style></style>
