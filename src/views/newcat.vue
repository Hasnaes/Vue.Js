<template>
  <div class="newcat">
    <h1>Ajouter une nouvelle catégorie</h1>
       <table>
        <tr>
            <th>1</th>
            <td>Action</td>
            <th>2</th>
            <td>Aventure</td>
            <th>3</th>
            <td>Comédie</td>
            <th>4</th>
            <td>Horreur</td>
            <th>5</th>
            <td>Drama</td>
        </tr>
    </table>
<p> CatégorieID <input type="int" v-model="catégorie.CatégorieID"></p>
<p>  Catégorie Name  <input type="text" v-model="catégorie.CatName"></p>
<p><button v-on:click="createcat">Ajouter</button>
   </p>

  </div>
</template>
<script>
export default {
  name: 'newcat',
    data() {
      return{
         catégorie:{
             CatégorieID:"",
             CatName:"",
         },
         url:"http://localhost:8000/Api/newcatreading"
      }
     },
     methods: {
     createcat() {
         axios
         .post(this.url, this.catégorie)
         .then((response) => {
             this.catégorie = response.data.catégorie;
             console.log(this.catégorie);
          
         })
         .catch((error) => {
             console.log(error);
         })
         this.$router.push({name : "home"})
     }
     }, 
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