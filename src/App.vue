<template>
  <h1>{{ title }}</h1>
  <p> Click me.. </p>

  <div v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Logout</a>
        <a href="#">Blogs</a>
      </template>

      <h1> Your Profile </h1>
      <p> User Content </p>
    </Modal>

    

  </div>
  <button @click="toggleModal">View Profile</button>
</template>



<script>

import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'User Profile',
      header: 'User profile',
      text: "User content",
      showModal: false,
      
    }
  },
  methods: {
    toggleModal(){
        this.showModal = !this.showModal;
      }
    }
  }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>