<template>
  <div class="newserie">
    <h1>Ajoute un livre</h1>
       <!-- <table> -->
    <!-- </table> -->
<div class="formulaire">
<p>  Titre  <input type="text" v-model="readingg.Bookname"></p>
<p>  Auteur  <input type="text" v-model="readingg.Author"></P>
<p>  Publication <input type="int" v-model="readingg.Publication"></p>
<p>  Pages <input type="int" v-model="readingg.Pages"></p>
<p> CatégorieID <input type="int" v-model="readingg.FK_CatégorieID"></p>
        <tr style="color:black"> <p style="font-weight:bold"> Existantes: </p>
            <th>1</th>
            <td>Roman</td>
            <th>2</th>
            <td>Religion</td>
            <th>3</th>
            <td>Politique</td>
            <th>4</th>
            <td>Histoire</td>
            <th>6</th>
            <td>Policier</td>
        </tr>
</div>
<p style="color:black"><button v-on:click="createreading" class="add">Ajouter</button>
   </p>
  <img src="https://www.cjoint.com/doc/20_05/JEnnfY4P6xG_books.jpg">
  </div>
</template>
<script>
export default {
  name: 'newreading',
    data() {
      return{
         readingg:{
             Bookname:"",
             Author:"",
             Publication:"",
             Pages:"",
             FK_CatégorieID:"",
         },
         url:"http://localhost:8000/Api/readingnew"
      }
     },
     methods: {
     createreading() {
         axios
         .post(this.url, this.readingg)
         .then((response) => {
             this.readingg = response.data.readingg;
             console.log(this.reading);
                this.get_readingList();
          
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
h1{
  color: black;
}
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
        width:35%;
        text-align:justificy;
        border-width: 2px;
        border-style: groove;
        border-image: initial;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-left: 430px;
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