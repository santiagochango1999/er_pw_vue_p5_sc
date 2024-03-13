<template>
  <div class="container">
    <h1>CREAR PRODUCTO</h1>
    <p> Codigo de Barras</p>
    <input v-model="codigoBarras" type="text">
    <p>Nombre</p>
    <input v-model="nombre" type="text">
    <p>Stock</p>
    <input v-model="stock" type="text">
    <p>Fecha de Caducidad</p>
    <input v-model="fechaCaducidad" type="datetime-local">
    <button @click="guardar">GUARDAR</button>
  </div>
</template>

<script>
import {crearfachada} from "@/helpers/clienteProductos"
export default {
    data(){
        return{
            codigoBarras:"",
            nombre:"",
            stock:"",
            fechaCaducidad:""
        }
    },
    methods:{
        async guardar(){
           /*  if(this.codigoBarras&&this.nombre&&this.stock&&this.fechaCaducidad){

            }else{
               alert("ingrese todo los datos"); 
            } */
            const body={
                codigoBarras:this.codigoBarras,
                nombre:this.nombre,
                stock:this.stock,
                fechaCaducidad:this.fechaCaducidad

            };
            await crearfachada(body);
            console.log(body);
            alert("se creo el producto");
            this.limpiar();

        },
        limpiar(){
            this.codigoBarras="";
            this.nombre="";
            this.stock="";
            this.fechaCaducidad="";

        }

    }

}
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  background: black;
}
h1{
    color: white;
}
p{
    color: white;
}
input{
    border: 2px solid white;
}
button{
    margin: 20px;
}
</style>