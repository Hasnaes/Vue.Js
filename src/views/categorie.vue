<template>
  <div class="home">
  <h1>Liste des livres par catégorie</h1>

  
    <p><button class="ajout" type="submit"><router-link to="/newcat" style="text-decoration:none; color:black">Ajouter une catégorie</router-link>
    </button></p>
    
  <table class="table-responsive">
                      <tr>
                        <th>Catégorie</th> 
                        <th>Titre</th>  
                        <th>Statut</th> 
                      </tr>      
<tr v-for="categorie in catégorie" :key="categorie.catégorie">
  <td data-label="Catégorie" style="background-color:#c5fcd6">{{categorie.category}}</td>
  <td data-label="Titre" style="font-weight:bold">{{categorie.nom}}</td>
   <td data-label="Statut">{{categorie.statut}}</td>
</tr>
  </table>
      <img src="https://www.cjoint.com/doc/20_05/JEnnfY4P6xG_books.jpg">
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
table
{
margin: auto;
width:700px;
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
 /*pour avoir un effet outset avec IE :*/
 border-color:#DCDCDC #696969 #696969 #DCDCDC;
 }
ul li a:hover {
 background-color:#D3D3D3;
 border-color:#696969 #DCDCDC #DCDCDC #696969;
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
  margin-left: 530px;
  font-size: 16px;
  

}

.ajout:hover
{
  color: white;
	background-color:black;
	transition: 0.6s all; 
}

/*Tableau responsive*/
    @media only screen and (max-width: 500px)
    {

        table{
          margin-left: 0;
          padding-left: 0;
          width: 100%;
        }

        .ajout{
            margin-left: 120px;
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
        .table-responsive th{
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
            width: 150px;
            bottom: 0;
            background-color: black;
            color: white;
            display: flex;
            align-items: center;
            font-weight: bold;
        }

        .table-responsive tr {
            margin-bottom: 1rem;
        }

        img{
          margin-left: 0;
          padding-left: 0;
          width: 300px;
          height:200px;
        }
    }
</style>
