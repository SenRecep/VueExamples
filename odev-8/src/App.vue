<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <br />
        <div class="text-center">
          <button @click="selectedComponent='appBlue'" class="btn btn-primary">Mavi Temayı Yükle</button>
          <button @click="selectedComponent='appGreen'" class="btn btn-success">Yeşil Temayı Yükle</button>
          <button @click="selectedComponent='appRed'" class="btn btn-danger">Kırmızı Temayı Yükle</button>
        </div>
        <hr />
        <keep-alive>
            <component :is='selectedComponent'>
                <h1>VUE.JS</h1>
                <p>Recep ŞEN</p>
            </component>
        </keep-alive>
     
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
        selectedComponent:'appBlue'
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
};
</script>

<style></style>
