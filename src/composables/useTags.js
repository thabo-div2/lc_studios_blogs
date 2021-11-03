import { ref } from "vue";

const useTags = (documents) => {
  const tags = ref([]);
  const tagSet = new Set();

  documents.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });

  tags.value = [...tagSet];
};

export default useTags;
