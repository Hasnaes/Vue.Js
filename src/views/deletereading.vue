<template>
  <div class="deletereading">
    <h1>Supprimer le livre?</h1>

    <button v-on:click="deletereading(idreading)">Effacer</button>
  </div>
</template>
<script>
export default {
  name: 'deletereading',
    data() {
      return{
        idreading:0,
        url:"http://localhost:8000/Api/deletereading/"
      }
     },
     methods: { // Parent (home) envoie l'opération à l'enfant qui exécute la requête 
       deletereading(idreading){
                axios
         .delete(this.url + idreading)
         .then((response) => {
             console.log(response.data);
             
         })
         .catch((error) => {
             console.log(error);
         })
         
         this.$router.push({name : "home"})
       }
     } ,
     created(){
       this.idreading=this.$route.params.ReadingID; // définition du idreading qui correspond au ReadingID qui apparait dans la route
     }
};
</script>
<style scoped>
p{
  font-family: Arial, Helvetica, sans-serif;
  color : white;
}
table
{
margin: auto;
}
td
{
text-align :center;
}
</style>