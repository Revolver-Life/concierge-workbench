<template>
  <div class="sidebar">
  <b-menu>
    <b-menu-list>

      <b-menu-item icon="account" label="Dashboard"> </b-menu-item>

      <b-menu-item icon="account" label="Profile"> </b-menu-item>

      <b-menu-item icon="account" label="Messages"> </b-menu-item>

      <b-menu-item icon="account" label="Catalogue"></b-menu-item>

      <b-menu-item icon="account" label="Assets"></b-menu-item>

      <b-menu-item icon="account" label="Feedback"></b-menu-item>

      <b-menu-item icon="account" label="Configuration"></b-menu-item>


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
      isActive: true
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
</style>
