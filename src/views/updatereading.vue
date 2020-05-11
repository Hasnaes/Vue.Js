<template>
    <div id="reading">   
        <button class="modif" v-on:click="showInput = true" v-if="! showInput" >Modifier</button>
    <div v-if="showInput"> 
            <input type="text" v-model="readingg.Bookname">
            <input type="text" v-model="readingg.Author">
            <input type="number" v-model="readingg.Publication">
            <input type="number" v-model="readingg.Pages">
            <input type="text" v-model="readingg.Statut">
            <input type="number" v-model="readingg.FK_CatégorieID">
   <button v-on:click="updatereadingee(readingg)">Sauver</button>
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
        </div>
        
      </div>
</template>

<script>
    export default {
        name: "Reading",
        props:['readingg'],
        data() {
            return {
              showInput:false
            }
        },
        methods: {
            updatereadingee(readingg) {
                this.$emit('event_update', readingg); 
                  this.showInput = false;
            }
     }
     }
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
.modif, button{
        border-radius: 12px;
        background-color: black;
        border: white;
        color: white;
        font-family: Georgia;
        font-size: 13px;
    }
</style>