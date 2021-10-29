<template>
  <div class="home">
    <div class="form_container" v-if="showLogin">
      <div class="form_image"></div>
      <div class="form_content">
        <h1 class="title">The Blog Cultivaters</h1>
        <div>
            <h2 class="subtitle">Login</h2>
            <Login />
            <p>
              no account yet? <span @click="showLogin = false">Signup</span> instead
            </p>
        </div>
      </div>
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
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  components: { Signup, Login },
  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>
