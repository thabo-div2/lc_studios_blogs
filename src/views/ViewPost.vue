<template>
  <div class="post_page_container">
    <div>
      <BlogPosts v-if="showPosts" :formattedDocuments="formattedDocuments" />
    </div>
    <div>
      <TagCloud :posts="formattedDocuments" />
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/BlogPosts.vue";
import getCollection from "@/composables/getCollection";
import TagCloud from "@/components/TagCloud.vue";
import { formatDistanceToNow } from "date-fns";
import { computed } from "vue";

export default {
  components: { BlogPosts, TagCloud },
  setup() {
    const { error, documents, showPosts } = getCollection("posts");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
        console.log(time);
      }
    });

    return { error, documents, formattedDocuments, showPosts };
  },
};
</script>

<style>
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
