<template>
  <div class="tag-container">
    <tag
      v-for="(tag, index) in tags"
      :tag="tag"
      :index="index"
      :color="color"
      @removeTagEvent="removeTag($event)"
      :key="index"
    />
    <input
      type="text"
      class="tag-input"
      @keydown.enter="addTag"
      @keydown.backspace="removeLastTag"
    />
    <div v-if="error" class="error">Bu etiket daha önceden eklenmiş</div>
  </div>
</template>

<script>
import Tag from "./Tag.vue";

export default {
  components: {
    tag: Tag,
  },
  props: {
    value: {
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
  },
  data() {
    return {
      tags: [],
      error: false,
    };
  },
  methods: {
    addTag(event) {
      const value = event.target.value;
      if (value.length == 0) {
        alert("Tag adı boş geçilemez");
        return;
      }
      if (this.tags.some((x) => x.toLowerCase() == value.toLowerCase())) {
        this.error = true;
        setTimeout(() => (this.error = false), 1000);
        return;
      }
      this.tags.push(value);
      event.target.value = "";
    },
    removeLastTag(event) {
      if (event.target.value.length == 0)
        this.tags.splice(this.tags.length - 1, 1);
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
  },
  watch: {
    tags() {
      this.$emit("input", this.tags.split(","));
    },
    value() {
      this.tags = this.tags.join(",");
    },
  },
  created() {
    if (this.value && this.value.length > 0) this.tags = this.value.split(",");
  },
};
</script>

<style scoped>
.tag-container {
  border: 1px solid #ccc;
  padding: 20px;
}

.tag-input {
  outline: none;
  width: 100px;
  height: 29px;
}

.error {
  padding: 10px;
  color: darkred;
}
</style>
