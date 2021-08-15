<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <br />
        <button class="btn btn-danger" @click="addNewItem">Add</button>
        <hr />
        <ul class="list-group">
          <transition-group name="slide">
            <li
              v-for="(number, index) in list"
              class="list-group-item"
              :key="index"
              @click="removeItem(index)"
            >
              Number: {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [...Array(10).keys()],
    };
  },
  methods: {
    addNewItem() {
      const position = Math.floor(Math.random() * this.list.length);
      this.list.splice(position, 0, this.list.length + 1);
    },
    removeItem(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>
<style>
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  width: 100%;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  ,
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  ,
  to {
    transform: translateY(20px);
  }
}
</style>
