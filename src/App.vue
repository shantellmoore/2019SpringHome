<template>
<div>
  <Nav />  
<div class="container" id="main">
   
    <router-view/>
  </div>
</div>
</template>

<script>
import Nav from "@/components/Nav";
import { Globals } from "@/models/api";
export default {
  data: ()=>({
    Globals: Globals
  }),
  components: {
    Nav
  }
}
</script>

<style lang="scss">
</style>