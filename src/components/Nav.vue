<template>
  <div class="sidebar" v-bind:style="colorStyle">
  <b-menu>
    <b-menu-list>

      <router-link to="/"><b-menu-item label="Dashboard" class="item"></b-menu-item></router-link>

      <router-link to="/profile"><b-menu-item label="Profile" class="item"> </b-menu-item></router-link>

      <router-link to="/messages"><b-menu-item label="Messages" class="item"> </b-menu-item></router-link>

      <router-link to="/catalogue"><b-menu-item label="Catalogue" class="item"></b-menu-item></router-link>

     <router-link to="/assets"> <b-menu-item label="Assets" class="item"></b-menu-item></router-link>

     <router-link to="/feedback"> <b-menu-item label="Feedback" class="item"></b-menu-item> </router-link>

     <router-link to="/configuration"> <b-menu-item label="Configuration" class="item"></b-menu-item></router-link>


    </b-menu-list>
    <b-menu-list>
    </b-menu-list>
  </b-menu>
  </div>
  </template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isActive: true,
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
  justify-content: flex-start;
  text-align: start;
}

.item{
  padding: 10%;
}

.item::selection{
  background-color: darkgrey!important;
}
</style>
