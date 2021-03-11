<template>
  <div class="sidebar">

  <b-menu>
    <b-menu-list>

      <div class="navItem">
       <img src="../assets/icons8-performance-64.png" class="navIcon"> <b-menu-item label="Dashboard" class="item" tag="router-link" :to="{path: '/'}"></b-menu-item>
      </div>

      <div class="navItem">
       <img src="../assets/icons8-customer-64.png" class="navIcon"> <b-menu-item label="Profile" class="item" tag="router-link" :to="{path:'/profile'}"> </b-menu-item>
      </div>

      <div class="navItem">
        <img src="../assets/icons8-chat-message-64.png" class="navIcon"> <b-menu-item label="Messages" class="item" tag="router-link" :to="{path:'/messages'}"></b-menu-item>
      </div>

      <div class="navItem">
        <img src="../assets/icons8-ticket-48.png" class="navIcon"> <b-menu-item label="Catalogue" class="item" tag="router-link" :to="{path:'/catalogue'}"></b-menu-item>
      </div>

      <div class="navItem">
       <img src="../assets/icons8-new-document-64.png" class="navIcon"> <b-menu-item label="Assets" class="item" tag="router-link" :to="{path:'/assets'}"></b-menu-item>
      </div>

      <div class="navItem">
       <img src="../assets/icons8-heart-48.png" class="navIcon"> <b-menu-item label="Feedback" class="item" tag="router-link" :to="{path: '/feedback'}"></b-menu-item>
      </div>

      <div class="navItem">
       <img src="../assets/icons8-settings-64.png" class="navIcon"> <b-menu-item label="Configuration" class="item" tag="router-link" :to="{path:'/configuration'}"></b-menu-item>
      </div>
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
  border-right: #EBEBE6 solid 2px;
}

.navItem{
  display: flex;
  flex-direction: row;
  padding: 10%;
}

.navIcon{
  height: 35px;
  width: 35px;
}
/*.item{*/
/*  padding: 10%;*/
/*}*/

</style>
