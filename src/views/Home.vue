<template>
  <div class="home">
    <p class="welcome"> IReader <br> Manage your readings </p>
  <h1 id="Retour">Liste de tes lectures</h1>
  <p>
    <button class="ajout" type="submit"><router-link to="/newreading" style="text-decoration:none; color:black">Ajouter un livre</router-link></button>
  </p>
    
  <table class="table-responsive" >
                      <tr class="thead">
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Publication</th>
                        <th>Pages</th>
                        <th>Statut </th>
                        <th><img src="https://www.cjoint.com/doc/20_05/JEnmMh2bd4G_settings.png" class="setting" alt="paramètres"></th></tr>               
 <tr v-for="readingg in reading" :key="readingg.reading"> 
<!--v-for: boucle: dans ma liste lectures, je vais voir afficher chaque lecture par itération -->
  <td data-label="Titre" style="background-color:#c5fcd6">{{readingg.Bookname}}</td> <!-- pour chaque lecture, avoir le titre-->
  <td data-label="Auteur">{{readingg.Author}}</td> <!-- pour chaque lecture, avoir l'auteur-->
  <td data-label="Publication">{{readingg.Publication}}</td> <!-- IDEM-->
  <td data-label="Pages">{{readingg.Pages}}</td>
  <td data-label="Statut">{{readingg.Statut}}</td>
  <td data-label="Paramètres"> 
    <form v-bind:readingg="readingg">
      <router-link :to="{ name: 'deletereading', params: { ReadingID: readingg.ReadingID }}">
      <input src="https://www.cjoint.com/doc/20_05/JEnmzN7OHJG_poubelle.png" type="image">
      </router-link>
    </form>
    <button style="background:none"><Reading v-bind:readingg="readingg" @event_update="updatereading" > <!--vbind: attributs-->
      <input style="background:none" src="bouton-modifier.png" type="image">
      </Reading>
    </button>
  </td> 
  </tr>

  </table>
  		<button id="boutonretour">
			<a href="#Retour"> 
			<img class="retour" src="https://www.cjoint.com/doc/20_05/JEqppiyjGuG_fleche.png" alt="fleche de retour" aria-hidden="True"></a>
		</button>
  </div>
</template>

<script> // dvlpmnt d'instance liée au composant
// @ is an alias to /src
import axios from "axios"; //pour accéder à l'API 
import Reading from "./updatereading.vue"; // import de la MàJ de la lecture 
export default {
  name: 'home', // nom route
  components:{Reading}, //définition élément personnalisé "lectures" dans l'instance components
    data() { // lié à l'instance de vue créée et ajoute toutes les propriétés ci-dessous.
      return{ //données à retourner
        readingg:{
           ReadingID:0,
             Bookname:"Bookname",
             Author:"Author",
             Publication:"Publication",
             Pages:"Pages",
             Statut:"Statut",
             FK_CatégorieID:"FK_CatégorieID",
         },  
         reading:[], // création liste lectures
         url:"http://localhost:8000/Api/mainpage/",
         url2: "http://localhost:8000/Api/updatereading/",
         showCreate: false
      }
     },
     methods: {
     get_readingList() {
         axios //déclarer Axios, qui va aller chercher l'info dans l'API
         .get(this.url) //url de la méthode appelée
         .then((response) => { //réponse avec param 'response'
             this.reading = response.data.reading; //charger le this.reading est envoyé dedans les données récupérées de l'API.
             console.log(this.reading);
         })
         .catch((error) => {
             console.log(error);
         });
     },
  
     updatereading(readingg){
       console.log(readingg)
       axios.put(this.url2 + readingg.ReadingID, readingg) //url de la méthode appelée: envoie de la lecture modifiée
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
     mounted() { // permet le montage de la page
     this.get_readingList(); // dans page on trouvera liste lectures
     
     }
}
</script>


<!--CSS-->
<style scoped>

/* .template{
  margin: 0;
  padding: 0;
} */
.home{
  color:black;
}

table{
  margin-left: 220px;
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

/* .tableau
{
  display: inline-block;
  float:center;
} */

.setting
{
  width: 30px;
  height: 30px;
}

.welcome
{
  text-align: center;
  font-size: 45px;
  padding-top:0;
  background-color: #e0ffe4;
}

.retour
{
	width: 30px;
	height: 30px;
}

#boutonretour
{
  position: fixed; 
  bottom: 10px; 
  right: 10px;
}

/* Tableau responsive*/ 
    @media only screen and (max-width: 500px)
    {
      h1{
        text-align: center;
      }

      table{
        margin-left: 0;
        padding-left: 0;
      }
      .ajout{
        margin-left: 140px;
      }
        .table-responsive table, 
        .table-responsive thead, 
        .table-responsive tbody, 
        .table-responsive tr, 
        .table-responsive th, 
        .table-responsive td {
            display:block;
            margin-left:0;
        }

        .table-responsive table{
            width:100%;
        }
        .table-responsive .thead{
            display:none;
        }

        .table-responsive td{
            padding-left: 200px;
            position: relative;
            margin-top: -1;
        }

        .table-responsive td:before{
            padding: 5px;
            content:attr(data-label);
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            bottom: 0;
            background-color: black;
            color: white;
            display: flex;
            align-items: center;
            font-weight: bold;
            width: 200px;
        }

        .table-responsive tr {
            margin-bottom: 1rem;
        }
    }
</style>