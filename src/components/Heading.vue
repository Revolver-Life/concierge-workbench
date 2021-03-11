<template>
  <div class="all" v-bind:style="myStyle">
    <div class="headingStart"><img class="logo" src="../assets/Nomade_v3.jpg"> <h3 class="nomad-logo">Nomad</h3></div>

    <div class="headingEnd"><img class="accountIcon" src="../assets/icons8-test-account-48.png"></div>

  </div>
</template>
<script>
export default{
  name: 'Heading',
  data: function(){
    return {
      myStyle: {
        backgroundColor: "#0d4063",
        color: "#FFFFFF",
      }
    }
  }
}
</script>
<style>

.accountIcon{
  height: 40px;
  width: 40px;
}
.all{
  display: flex;
  justify-content: space-between;
  height: 80px;
  border-bottom: #189AB4 solid 5px;
}
.headingStart{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding-top: 3%;
  padding-left: 3%;

}

.headingEnd{
  display: flex;
  justify-content: flex-end;
  padding-top: 2%;
  padding-right: 2%;
}

.logo{
  background-color: inherit;
  border: none;
  text-decoration: none;
}

.nomad-logo{
  font-weight: 800;
  font-size: 32px;
  padding-inline-start: 2%;
}
</style>
