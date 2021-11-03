<template>
  <div class="tag-cloud">
    <h3>tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from "@/composables/useTags";

export default {
  props: ["documents"],

  setup(props) {
    const { tags } = useTags(props.documents);

    return { tags };
  },
};
</script>

<style></style>
