<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
      <router-link active-class="active" class="nav-item" exact to="/" tag="li">
        <a class="nav-link">Home</a></router-link
      >
      <router-link active-class="active" class="nav-item" to="/user" tag="li">
        <a class="nav-link">User </a></router-link
      >
    </ul>
  </nav>
</template>

<style>
li.active {
  font-weight: bold;
}
</style>
