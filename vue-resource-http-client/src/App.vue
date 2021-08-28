<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h3>VUE-RESOURCE</h3>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Text"
            aria-label="Enter Text"
            aria-describedby="button-addon2"
            v-model="name"
          />
          <button
            @click="saveUser"
            class="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Kaydet
          </button>
          <button
            @click="getData"
            class="btn btn-success"
            type="button"
            id="button-addon2"
          >
            Getir
          </button>
        </div>
        <hr />
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between" v-for="item in list">
            <span>{{ item.name }}</span>
            <button @click="deleteItem(item.key)" class="btn btn-sm btn-danger">
              Sil
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      list: [],
      resource: {},
    };
  },
  methods: {
    saveUser() {
      // this.$http
      //   .post("users.json", {
      //     name: this.name,
      //   })
      //   .then((res) => {
      //     this.getData();
      //   });
      // this.$resource("users.json")
      //   .save({}, { name: this.name })
      //   .then((res) => {
      //     this.getData();
      //   });

      this.resource.saveAs({}, { name: this.name }).then((res) => {
        this.getData();
      });
    },
    getData() {
      // this.$http
      //   .get("users.json")
      //   .then((res) => res.json())
      //   .then((data) => (this.list = data));

      this.$resource("users.json")
        .get()
        .then((res) => res.json())
        .then((data) => (this.list = data));
    },
    deleteItem(key) {
      // this.$http.delete(`users/${key}.json`).then((res) => {
      //   this.getData();
      // });

      this.$resource(`users/${key}.json`)
        .delete()
        .then((res) => {
          this.getData();
        });
    },
  },
  created() {
    this.resource = this.$resource(
      "users.json",
      {},
      {
        saveAs: { method: "POST", url: "users.json" },
      }
    );
    this.getData();
  },
};
</script>

<style></style>
