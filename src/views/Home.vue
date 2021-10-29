<template>
<<<<<<< HEAD
  <div class="home">
    <h1>Bloggers</h1>

    <div v-if="showLogin">
      <h2>Login</h2>
      <Login />
      <p>
        no account yet? <span @click="showLogin = false">Signup</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <Signup />
      <p>
        already registered?
        <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
=======
	<div class="home">
		<div class="form_container" v-if="showLogin">
			<div class="form_image"></div>
			<div class="form_content">
				<h1 class="title">The Blog Cultivaters</h1>
				<div>
					<h2 class="subtitle">Login</h2>
					<Login />
					<p class="signup_hover_content">
						no account yet?
						<span class="signup_hover" @click="showLogin = false"
							>Signup instead</span
						>
					</p>
				</div>
			</div>
		</div>
		<div class="form_container" v-else>
			<div class="form_image"></div>
			<div class="form_content">
				<h1 class="title">The Blog Cultivaters</h1>
				<div>
					<h2 class="signup_subtitle">Sign up</h2>
					<Signup />
					<p class="login_hover_content">
						already registered?
						<span class="login_hover" @click="showLogin = true"
							>Login instead</span
						>
					</p>
				</div>
			</div>
		</div>
	</div>
>>>>>>> origin/developer
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import { ref } from "@vue/reactivity";

import Navbar from "../components/Navbar.vue";

export default {
<<<<<<< HEAD
  name: "Home",
  components: { Signup, Login, Navbar },
  setup() {
    const showLogin = ref(true);
=======
	name: "Home",
	components: { Signup, Login, Navbar },
	setup() {
		const showLogin = ref(true);
>>>>>>> origin/developer

    return { showLogin };
  },
};
</script>
