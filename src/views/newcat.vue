<template>
  <div class="newcat">
    <h1 style="color:black">Ajoute une nouvelle catégorie</h1>
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
    <div class="formulaire">
<p> CatégorieID <input type="int" v-model="catégorie.CatégorieID"></p>
<p>  Catégorie Name  <input type="text" v-model="catégorie.CatName"></p> </div>
<p><button v-on:click="createcat" class="add">Ajouter</button>
   </p>
  <img src="https://www.cjoint.com/doc/20_05/JEnnfY4P6xG_books.jpg">
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
  color : black;
}
table
{
margin: auto;
}
td
{
text-align :center;
}

.formulaire
{
        background-color: #E0E0E0;
        width:25%;
        text-align:justificy;
        border-width: 2px;
        border-style: groove;
        border-image: initial;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-left: 480px;
        margin-top: 35px;
        border-radius: 3px 3px 3px;
}

input
{
          border-radius: 3px 3px 3px;
}

.add
{
          border-radius: 12px;
        background-color: black;
        border: white;
        color: white;
        font-family: Georgia;
        font-size: 18px;
}
</style>