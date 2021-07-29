<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="d-flex justify-content-around mt-4">
          <button @click="selectedComponent = 'appMemory'" class="btn btn-sm btn-warning">
            Memory
          </button>
          <button @click="selectedComponent = 'appAuthor'" class="btn btn-sm btn-danger">
            Author
          </button>
          <button
            @click="selectedComponent = 'appNewMemory'"
            class="btn btn-sm btn-primary"
          >
            NewMemory
          </button>
        </div>
        <p class="text-center mt-4">{{ selectedComponent }}</p>
        <keep-alive>
        <component :is="selectedComponent">
          <h3 slot="heading">Merhaba Yazilimci</h3>
          <p slot="content">vuejs oldukca basarili</p>
        </component>
        </keep-alive>
        <component :is="selectedComponent">
          <h3 slot="heading">Merhaba Yazilimci</h3>
          <p slot="content">vuejs oldukca basarili</p>
        </component>
        <!-- <app-memory>
          <h3 slot="heading">Merhaba Yazilimci</h3>
          <p slot="content">vuejs oldukca basarili</p>
        </app-memory> -->
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory.vue";
import Author from "./components/Author.vue";
import NewMemory from "./components/NewMemory.vue";

export default {
  data() {
    return {
      selectedComponent: "appMemory",
    };
  },
  components: {
    appMemory: Memory,
    appAuthor: Author,
    appNewMemory: NewMemory,
  },
};
</script>
