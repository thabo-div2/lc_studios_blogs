<template>
  <form @submit.prevent="handleSubmit">
    <input class="inputs" type="text" required placeholder="name" v-model="displayName" />
    <input class="inputs" type="text" required placeholder="surname" v-model="surname" />
    <input class="inputs" type="email" required placeholder="email" v-model="email" />
    <input class="inputs" type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="signup_btn">Sign up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

export default {
  setup() {
    const { error, signup } = useSignup();

    // refs
    const displayName = ref("");
    const surname = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      console.log("user signed up");
    };

    return { displayName, surname, email, password, handleSubmit, error };
  },
};
</script>

<style>
  .signup_subtitle {
    color: #E3AD1B;
    /* -webkit-text-stroke: 0.5px black; */
    /* -webkit-font-smoothing: antialiased; */
    font-size: 28px;
    font-family: 'Barlow', sans-serif;
  }
  .signup_btn {
    background: #7c8ebf;
    border: none;
    width: 35%;
    padding: 9px 0 9px 0;
    border-radius: 15px;
   font-family: 'Barlow', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
  .signup_btn:hover {
    cursor: pointer;
  }
  .login_hover {
    color: #E3AD1B;
    cursor: pointer;
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    font-size: 19px;
  }
  .login_hover_content {
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
    font-size: 19px;
  }
</style>
