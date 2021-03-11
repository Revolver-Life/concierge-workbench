<template>
  <div>


  <div class="align-items">
  <h1 class="dashboard-heading">Configuration</h1>

    <div class="align-child">
      <h3 class="assets-child"><button class="toggleAssets" v-on:click="turnBank">Bank Accounts</button></h3>

      <h3 class="assets-child"><button class="toggleAssets" v-on:click="turnMarkup">Markups</button></h3>

    </div>
  </div>

    <div v-if="Banks && Markup === false"> <!--Bank Accounts Div-->
      <Bank></Bank>
    </div>

    <div v-if="Markup && Banks === false"> <!--Markups Div-->
      <markups></markups>
    </div>


  </div>
</template>

<script>
import Bank from '@/components/Configuration-Banks.vue'
import Markups from '@/components/Configuration-Markups.vue'

export default{
  name: 'Configuration',
  components: {Markups, Bank},
  Banks: true,
  Markup: false,
  data: function(){
    return {
      Banks: true,
      Markup: false
    }
  },
  methods: {
    turnBank: function(){
      console.log("Banks")
      if (this.Banks === false){
        this.Banks = true
        this.Markup = false
      }
    },
    turnMarkup: function(){
      console.log("Turn markup")
      if(this.Markup === false){
        this.Markup = true
        this.Banks = false
      }

    }
  }
}
</script>
