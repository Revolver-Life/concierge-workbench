<template>
  <div>


  <div class="align-items"> <!--Beginning of Assets Heading -->
  <h1 class="assets-heading">Assets</h1>

      <div class="align-child">
  <h3 class="assets-child"><button v-on:click="turnExperiences" class="toggleAssets">Experiences</button></h3>

         <h3 class="assets-child"><button v-on:click="turnDocument" class="toggleAssets">Documents</button></h3>

      </div>
  </div> <!--End of Assets Heading -->

    <div v-if="this.experiences && this.document === false"> <!-- Beginning of Experiences tab -->
      <experiences></experiences>
    </div> <!-- End of Experiences tab -->

  <div v-if="this.document && this.experiences === false"> <!-- Beginning of Documents tab -->
    <documents></documents>
  </div> <!-- End of Experiences tab -->


  </div>
</template>

<script>
import Documents from '../components/Assets-Documents'
import Experiences from '../components/Assets-Experiences'

export default{
  name: 'Assets',
  components: {Experiences, Documents},
  document: true,
  experiences: true,
  data: function(){
    return{
      document: false,
      experiences: true
    }
  },
  methods: {
    turnDocument: function(){
      console.log("documents")
      if (this.document === false){
        this.document = true
        this.experiences = false
      }
    },
    turnExperiences: function(){
      console.log("experiences")

      if (this.experiences === false){
        this.experiences = true
        this.document = false
       }
    }
  }
}

</script>

<style>
.align-items{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-inline: 2%;
  border: #EBEBE6 solid 1px;
  text-align: start;
}

.assets-heading{
  font-size: 32px;
  color: darkgray;
}

.align-child{
  display: flex;
  flex-direction: row;
  position: relative;
  text-align: start;
}

.assets-child{
  margin-right: 25px;
  padding-bottom: 1%;
  padding-top: 1%;
}

.toggleAssets{
  background-color: inherit;
  border: none;
}
</style>
