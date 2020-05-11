<template>
  <div class="home">
  <h1>Liste des lectures</h1>
  <p>
    <button type="submit"><router-link to="/newreading">nouvelle serie</router-link></button>
  </p>
    
  <table>
                      <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Publication</th>
                        <th>Pages</th>
                        <th>Statut </th>
                        <th><img src="https://www.cjoint.com/doc/20_04/JDCkQDlcxGV_pngguru.com-1-.png"></th></tr>               
 <tr v-for="readingg in reading" :key="readingg.reading">
 
  <td>{{readingg.Bookname}}</td>
  <td>{{readingg.Author}}</td>
  <td>{{readingg.Publication}}</td>
  <td>{{readingg.Pages}}</td>
  <td>{{readingg.Statut}}</td>
  <td > <form v-bind:readingg="readingg"><router-link :to="{ name: 'deletereading', params: { ReadingID: readingg.ReadingID }}"><input src="kisspng-button-computer-icons-.png" type="image"></router-link></form>
  <button><Reading v-bind:readingg="readingg" @event_update="updatereading" ><input src="bouton-modifier.png" type="image"></Reading></button>
  </td> 
  </tr>

  </table>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
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
</style>