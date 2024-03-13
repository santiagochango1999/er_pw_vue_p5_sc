<template>
  <div class="container2">
    <p>codigo de barras</p>
    <input v-model="this.datos.codigoBarras" type="text" />
    <p>nombre</p>
    <input v-model="this.datos.nombre" type="text" />
    <p>stock</p>
    <input v-model="this.datos.stock" type="text" />
    <p>fecha de caducidad</p>
    <input v-model="this.datos.fechaCaducidad" type="datetime-local" />
    <button @click="actualizar">ACTUALIZAR</button>
  </div>
</template>

<script>
import { actualizarfachada, consultartodosfachada } from "@/helpers/clienteProductos";
export default {
  props: {
    datos: {
      requerid: false,
    },
  },
  methods: {
    async actualizar() {
      const body = {
        codigoBarras: this.datos.codigoBarras,
        nombre: this.datos.nombre,
        stock: this.datos.stock,
        fechaCaducidad: this.datos.fechaCaducidad,
      };
      await actualizarfachada(body, this.datos.id);
      alert("se actualizado correctamente");
      const verificar = await consultartodosfachada();
      this.$emit("actualizar", verificar);
    },
  },
};
</script>

<style scoped>
.container2 {
  display: grid;
  align-content: center;
  justify-content: center;
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