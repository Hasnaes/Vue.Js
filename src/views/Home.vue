<template>
  <div class="home">
    <p class="welcome"> IReader, Manage your readings </p>
  <h1>Liste de tes lectures</h1>
  <p>
    <button class="ajout" type="submit"><router-link to="/newreading">Ajouter un livre</router-link></button>
  </p>
    
  <table class="tableau">
                      <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Publication</th>
                        <th>Pages</th>
                        <th>Statut </th>
                        <th><img src="https://www.cjoint.com/doc/20_05/JEnmMh2bd4G_settings.png" class="setting"></th></tr>               
 <tr v-for="readingg in reading" :key="readingg.reading"> <!--v-for: boucle-->
 
  <td style="background-color:#c5fcd6">{{readingg.Bookname}}</td>
  <td>{{readingg.Author}}</td>
  <td>{{readingg.Publication}}</td>
  <td>{{readingg.Pages}}</td>
  <td>{{readingg.Statut}}</td>
  <td > 
    <form v-bind:readingg="readingg">
      <router-link :to="{ name: 'deletereading', params: { ReadingID: readingg.ReadingID }}">
      <input src="https://www.cjoint.com/doc/20_05/JEnmzN7OHJG_poubelle.png" type="image">
    </router-link>
    </form>
  <button><Reading v-bind:readingg="readingg" @event_update="updatereading" > <!--vbind: attributs-->
    <input src="bouton-modifier.png" type="image">
    </Reading>
  </button>
  </td> 
  </tr>

  </table>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"; //pour accéder à l'API
import Reading from "./updatereading.vue";
export default {
  name: 'home',
  components:{Reading},
    data() {
      return{ 
        readingg:{
           ReadingID:0,
             Bookname:"Bookname",
             Author:"Author",
             Publication:"Publication",
             Pages:"Pages",
             Statut:"Statut",
             FK_CatégorieID:"FK_CatégorieID",
         },  
         reading:[],
         url:"http://localhost:8000/Api/mainpage/",
         url2: "http://localhost:8000/Api/updatereading/",
         showCreate: false
      }
     },
     methods: {
     get_readingList() {
         axios
         .get(this.url)
         .then((response) => {
             this.reading = response.data.reading;
             console.log(this.reading);
         })
         .catch((error) => {
             console.log(error);
         });
     },
  
     updatereading(readingg){
       console.log(readingg)
       axios.put(this.url2 + readingg.ReadingID, readingg)
         .then((response) => {
             console.log(response.data);
             this.get_readingList();
         })
                  .catch((error) => {
             console.log(error);
         });
         console.log("update item " + readingg.ReadingID);
     }
     },
     mounted() {
     this.get_readingList();
     
     }
}
</script>



<style scoped>

.home{
  color:black;
}
th{
  text-align: center;
  background-color:darkseagreen;
}
tr{
  letter-spacing: 2px;
}
/* td{
  border : solid 1px;
} */
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

.ajout
{
  background-color:#ceebd7;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-content: space-between;
  margin-left: 550px;
  font-size: 16px;
  

}

.ajout:hover
{
  color: white;
	background-color:black;
	transition: 0.6s all; 
}

.tableau
{
  display: inline-block;
  /* float:center; */
}

.setting
{
  width: 30px;
  height: 30px;
}

.welcome
{
  text-align: center;
  font-size: 50px;
  padding-top:0;
  background-color: #e0ffe4;
}
</style>