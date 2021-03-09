<template>
  <div class="sidebar">

  <b-menu>
    <b-menu-list>

        <b-menu-item label="Dashboard" class="item" tag="router-link" :to="{path: '/'}"></b-menu-item>

        <b-menu-item label="Profile" class="item" tag="router-link" :to="{path:'/profile'}"> </b-menu-item>

        <b-menu-item label="Messages" class="item" tag="router-link" :to="{path:'/messages'}"></b-menu-item>

        <b-menu-item label="Catalogue" class="item" tag="router-link" :to="{path:'/catalogue'}"></b-menu-item>

       <b-menu-item label="Assets" class="item" tag="router-link" :to="{path:'/assets'}"></b-menu-item>

       <b-menu-item label="Feedback" class="item" tag="router-link" :to="{path: '/feedback'}"></b-menu-item>

       <b-menu-item label="Configuration" class="item" tag="router-link" :to="{path:'/configuration'}"></b-menu-item>

<!--    <router-link to="/"><h3 class="item">Dashboard</h3></router-link>-->

<!--    <router-link to="/profile"><h3 class="item">Profile</h3></router-link>-->

<!--    <router-link to="/messages"><h3 class="item">Messages</h3></router-link>-->

<!--    <router-link to="/catalogue"><h3 class="item">Catalogue</h3></router-link>-->

<!--    <router-link to="/assets"> <h3 class="item">Assets</h3></router-link>-->

<!--    <router-link to="/feedback"> <h3 class="item">Feedback</h3> </router-link>-->

<!--    <router-link to="/configuration"> <h3 class="item">Configuration</h3></router-link>-->
    </b-menu-list>
  </b-menu>

  </div>
  </template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isActive: false,
      colorStyle: function(){
        return {
          color: '#ffffff'
        }
      }
    }
  }
}
</script>
<style>
.sidebar{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
}

.item{
  padding: 10%;
}

/*.item::selection{*/
/*  background-color: darkgrey!important;*/
/*}*/

router-link-exact-active {
  background-color: yellow !important;
}
</style>
