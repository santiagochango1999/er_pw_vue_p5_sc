<template>
<div class="containerp">
<componente2 @ver="visualizar" :dat="verificaremos"/>
    <componente3 :datos="datos" @actualizar="verificar"/>
</div>
    

</template>

<script>
import componente2 from "@/components/componente2.vue";
import componente3 from "@/components/componente3.vue";


export default {
    components: {
    componente2,
    componente3
  },
  data(){
    return{
        datos:{requerid:false},
        verificaremos:false,
    }
  },
  methods:{
    visualizar(data){
        this.datos=data;
        console.log("principal:", this.datos);

    },
    verificar(data){
        console.log("principal: ",data);
        this.verificaremos=data;
    }
  }
};
</script>

<style scoped>
.containerp{
    background: black;
}
</style>