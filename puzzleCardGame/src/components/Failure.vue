<template>
  <div class="container">
    <h1>Malesef Bilemediniz!!!</h1>
    <button @click="newGame">Yeni Oyun</button>
  </div>
</template>

<script>
import newGameMixin from "../newgame.js";
export default {
  mixins: [newGameMixin],
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: darkred;
  position: absolute;
}

.container h1 {
  font-size: 333%;
  color: white;
}
.container button {
  background-color: #fff;
  color: darkred;
  border: 1px solid brown;
  font-size: 1rem;
  border-radius: 5px;
  outline: none;
  padding: 15px 50px;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
}

.container button:hover {
  background-color: lightgreen;
  color: #fff;
}
</style>
