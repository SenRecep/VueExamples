<template>
  <input
    type="text"
    :id="id"
    class="form-control"
    :value="value.firstName + ' ' + value.lastName"
    @input="inputEvent($event)"
  />
</template>

<script>
export default {
  props: ["value", "id"],
  methods: {
    inputEvent(e) {
      var firstName = e.target.value.split(" ").slice(0, -1).join(" ");
      var lastName = e.target.value.split(" ").slice(-1).join(" ");
      this.$emit("input", {
        firstName,
        lastName,
      });
    },
  },
};
</script>
