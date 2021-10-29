<template>
  <Navbar />
  <div class="tag">Tag page</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import getCollection from "@/composables/getCollection";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    components = { Navbar };

    const route = useRoute();
    const { documents, error } = getCollection();

    // const postsWithTag = computed(() => {
    //     return documents.value.filter((p) => p.tags)
    // })
  },

  data() {
    return {
      books: [],
    };
  },
  firestore: {
    books: db.collection("books").orderBy("title"),
  },
};
</script>

<style></style>
