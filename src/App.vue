<template>
  <div id="app">
    <Heading/>
    <div class="columns is-gapless is-multiline is-mobile">

    <div class="is-one-quarter" id="sidebar"> <!--SIDEBAR-->
    <Nav/>
    </div>
    <div class="column"> <!--MAIN-->
<!--    <div id="nav">-->

<!--&lt;!&ndash;      <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--    </div>-->
    <router-view/>
    </div>
      </div>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/*#sidebar a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/

#sidebar{
  background-color: ghostwhite;
}

</style>
<script>
import Heading from "@/components/Heading";
import Nav from "@/components/Nav"

export default {
  components: {Heading, Nav}
}
</script>
