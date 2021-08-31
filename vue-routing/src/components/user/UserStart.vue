<template>
  <div>
    <ul class="list-group">
      <router-link
        v-for="id in 5"
        tag="li"
        class="list-group-item"
        :key="id"
        :to="`/user/${id}`"
        ><a>User {{ id }}</a></router-link
      >
    </ul>
  </div>
</template>
