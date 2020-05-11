<template>
  <div class="home">
  <h1>Liste des livres par catégorie</h1>

  
    <p><button type="submit"><router-link to="/newcat">nouvelle catégorie</router-link>
    </button></p>
    
  <table>
                      <tr>
                        <th>Nom Cat</th> 
                        <th>Titre</th>  
                        <th>Statut</th> 
                      </tr>      
<tr v-for="categorie in catégorie" :key="categorie.catégorie">
  <td>{{categorie.category}}</td>
  <td>{{categorie.nom}}</td>
   <td>{{categorie.statut}}</td>
</tr>
  </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
    data() {
      return{
         catégorie:[],
         url:"http://localhost:8000/Api/categoriereading",
      }
     },
     methods: {},
     mounted() {
         axios
         .get(this.url)
         .then((response) => {
             this.catégorie = response.data.catégorie;
             console.log(this.catégorie);
         })
         .catch((error) => {
             console.log(error);
         });
     },

};
</script>
<style scoped>
.home{
  color:white;
}
th{
  text-align: center;
  border : solid 1px;
}
tr{
  border : solid 1px;
}
td{
  border : solid 1px;
}
input[type='image'] {
    width: 20px;
}
th img{
width: 20px;
height: 20px;
}
p{
  text-align: right;
  margin-right: 5px;
}
table
{
margin: auto;
}
td
{
text-align :center;
}
ul {
 padding:0;
 margin:0;
 list-style-type:none;
 }
li {
 margin-left:2px;
 float:left; /*pour IE*/
 }
ul li a {
 display:block;
 float:left;   
 width:100px;
 background-color:#6495ED;
 color:black;
 text-decoration:none;
 text-align:center;
 padding:5px;
 border:2px solid;
 /*pour avoir un effet "outset" avec IE :*/
 border-color:#DCDCDC #696969 #696969 #DCDCDC;
 }
ul li a:hover {
 background-color:#D3D3D3;
 border-color:#696969 #DCDCDC #DCDCDC #696969;
 } 
</style>
