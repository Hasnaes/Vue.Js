<template>
    <div id="reading">   
        <button class="modif" v-on:click="showInput = true" v-if="! showInput">Modifier</button> 
    <div v-if="showInput"> 
            <input type="text" v-model="readingg.Bookname"> <!--liaison données bidir variable Màj automatiquement-->
            <input type="text" v-model="readingg.Author">
            <input type="number" v-model="readingg.Publication">
            <input type="number" v-model="readingg.Pages">
            <input type="text" v-model="readingg.Statut">
            <input type="number" v-model="readingg.FK_CatégorieID">
   <button v-on:click="updatereadingee(readingg)">Sauver</button> <!--envoie des données une fois click sur sauver-->
       <table>
        <tr style="color:black"> <p style="font-weight:bold; color:black"> Existantes: </p>
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
    </table>
</div>
</div>      

</template>

<script>
    export default {
        name: "Reading", 
        props:['readingg'], // livre concerné par la modification
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