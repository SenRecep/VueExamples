<template>
  <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>senrecep.com</strong> | recepsen
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Alış Tutarı : </strong>
        <span class="badge badge-danger">{{getTrade.purchase | currency}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Satış Tutarı : </strong>
        <span class="badge badge-success">{{getTrade.sale | currency }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Bakiye : </strong>
        <span class="badge badge-primary">{{getTrade.balance | currency}}</span>
    </span>
  </nav>

</template>

<script>
import  {mapGetters} from 'vuex';
export default {
computed:mapGetters(['getTrade'])
}
</script>

<style scoped>

</style>
