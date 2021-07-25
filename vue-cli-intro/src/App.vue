<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <header-component></header-component>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <server-status-list></server-status-list>
      </div>
      <div class="col-xs-12 col-sm-6">
        <server-description></server-description>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Shared/HeaderComponent'
import Footer from './components/Shared/FooterComponent'
import ServerDescription from './components/Server/ServerDescription'
import ServerStatusList from './components/Server/ServerStatusList'
export default {
  components:{
    "header-component":Header,
    "footer-component":Footer,
    "server-description":ServerDescription,
    "server-status-list":ServerStatusList,
  }
};
</script>

<style></style>
