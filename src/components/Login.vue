<template>
  <form @submit.prevent="handleSubmit">
    <!-- <div class="form_img"></div> -->
    <input class="inputs" type="email" required placeholder="email" v-model="email" />
    <input class="inputs" type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="login_btn">Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";

export default {
  setup() {
    // refs
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
  /* @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;700&display=swap');
  body  {
    /* background: #529C79; */
    background: #327A77;
  }
  .home {
    background: #FEFEFE;
    width: 70vw;
    height: 80vh;
    margin: 20px 40px 0 0;
    border-radius: 20px;
  }
  #app {
    display: flex;
    justify-content: flex-end;
  }
  form {
    background: none;
  }
  .title {
    color: #F8D6D6;
    /* color: #517FFF; */
    display: flex;
    -webkit-text-stroke: 0.5px black;
    -webkit-font-smoothing: antialiased;
    /* font-weight: bold; */
    font-family: 'Barlow', sans-serif;
    font-size: 40px;
  }
  .subtitle {
    color: #7c8ebf;
    /* -webkit-text-stroke: 0.5px black; */
    /* -webkit-font-smoothing: antialiased; */
    font-size: 28px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .inputs {
    width: 25vw;
    border: none;
    border-bottom: solid 1.9px #6B82AE;
    margin: 0 0 25px 0;
    font-size: 17px;
    font-weight: 600;
  }
  .inputs::placeholder {
    color: #d3e6e9;
    /* color: #C9D6FF; */
    /* color: #a1f2ee; */
    -webkit-text-stroke: 0.1px black;
    -webkit-font-smoothing: antialiased;
  }
  .inputs:focus {
    outline: none;
  }
  .form_container {
    display: flex;
    height: 100%;
  }
  .form_image {
    width: 45%;
    background: lightblue;
    border-radius: 20px 0 0 20px;
    background-image: url(/img/login_image.dcc7e3bf.jpg);
    background-size: cover;
  }
  .form_content {
    display: flex;
    flex-direction: column;
    width: 55%;
    align-items: center;
  }
  .form_image {
    background-image: url(../assets/login_image.jpg);
  }
  .login_btn {
    
  }
</style>
