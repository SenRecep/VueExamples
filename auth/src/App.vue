<template>
  <div>
    <Header/>
    <HomePage/>
  </div>
</template>
<script>
import Header from "./components/Header";
import Auth from "./pages/auth/Auth"
import Homepage from "./pages/Homepage"
import About from "./pages/About"

export default {
  components: {
    Header,
    Auth,
    Homepage,
    About
  },
}
</script>
