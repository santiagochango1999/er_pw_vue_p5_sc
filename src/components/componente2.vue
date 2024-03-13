<template>
  <div class="container">
    <h1>consulta</h1>
    <button @click="consultar">CONSULTAR</button>
    <table>
      <tr>
        <td>Codigo de Barras</td>
        <td>Nombre</td>
        <td>Accion</td>
        <td>Accion</td>
      </tr>
      <tr v-for="dato in datos" :key="dato.codigo">
        <td>{{ dato.codigoBarras }}</td>
        <td>{{ dato.nombre }}</td>
        <td>
          <button @click="actualizar(dato.links[0].href)">Actualizar</button>
        </td>
        <td><button @click="eliminar(dato.links[0].href)">Eliminar</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import {
  consultartodosfachada,
  consultarfachada,
  eliminarfachada,
} from "@/helpers/clienteProductos";

export default {
  props: {
    dat: {
      requerid: false,
    },
  },
  data() {
    return {
      datos: this.dat,
      axul: { requerid: false },
    };
  },
  methods: {
    async consultar() {
      this.datos = await consultartodosfachada();
      console.log("datos: ", this.datos);
    },
    async actualizar(dato) {
      this.axul = await consultarfachada(dato);
      console.log(this.axul);
      this.$emit("ver", this.axul);
    },
    async eliminar(dato) {
      this.axul = await consultarfachada(dato);
      console.log(this.axul.id);
      await eliminarfachada(this.axul.id);
      alert("se a eliminado correctamente");
      this.consultar();
    },
  },
  
};
</script>

<style scoped>
.container {
  display: grid;
  align-content: center;
  justify-content: center;
  background: white;
  margin: 40px;
}
</style>