<template>
  <div class="newserie">
    <h1>Ajouter un livre</h1>
       <!-- <table> -->
        <!-- <tr>
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
        </tr> -->
    <!-- </table> -->

<p>  Titre  <input type="text" v-model="readingg.Bookname"></p>
<p>  Auteur  <input type="text" v-model="readingg.Author"></P>
<p>  Publication <input type="int" v-model="readingg.Publication"></p>
<p>  Pages <input type="int" v-model="readingg.Pages"></p>
<p> CatégorieID <input type="int" v-model="readingg.FK_CatégorieID"></p>

<p><button v-on:click="createreading">Ajouter</button>
   </p>

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