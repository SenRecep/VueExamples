<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3>VueJS Directive'ler</h3>
        <p v-text="'mail: me@senrecep.com'"></p>
        <p v-html="'<b>mail</b>: me@senrecep.com'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Custom Directive'ler</h3>
        <p v-color.delay="'blue'">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo illum
          veritatis ipsa, omnis dolor incidunt minima asperiores eveniet ducimus nam
          libero? Quae, omnis sit necessitatibus veniam tempore aperiam! Nostrum!
        </p>
        <p v-color:backgroundColor.flash="'yellow'">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo illum
          veritatis ipsa, omnis dolor incidunt minima asperiores eveniet ducimus nam
          libero? Quae, omnis sit necessitatibus veniam tempore aperiam! Nostrum!
        </p>
        <p style="border-style: solid; border-width: thin" v-color:borderColor="'red'">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo illum
          veritatis ipsa, omnis dolor incidunt minima asperiores eveniet ducimus nam
          libero? Quae, omnis sit necessitatibus veniam tempore aperiam! Nostrum!
        </p>
        <button v-custom-on:click="showAlert">Show Alert</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showAlert() {
      alert("Test Basarili");
    },
  },
};
</script>
