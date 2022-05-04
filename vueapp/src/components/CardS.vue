<template>
   <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
       <div class="card">
           <div class="card-body">
               <p class="card-text">{{producto.category}} <span></span></p>
               <h5 class="card-title">{{producto.title}}</h5>
               <img :src="producto.image" alt="imagen-producto.image" class="card-img-top" />
               <p class="card-text">${{producto.price}} <span></span></p>
               <p class="card-text">{{producto.description}} <span></span></p>
               <button class="btn btn-dark" @click="agregar(producto)">Comprar</button>
           </div>
       </div>
   </div>
</template>

<script>
import {useStore} from "vuex"

 export default ({
    props: ["producto"],
    setup() {
     const store = useStore()
     const agregar = producto => {
      store.dispatch("agregarAlCarro")
      console.log(producto)
  }

  return {agregar}
    }
})
</script>

<style scoped>

</style>
