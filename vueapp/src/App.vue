<template>
 <div class="container">
  <h1>Carrito</h1>
  <hr>
  <CarritoCompra />
    <div class="row">
     <CardS
    v-for="producto of productos" :key="producto.id"
     :producto="producto"
      />
    </div>

 </div>
</template>

<script>
import { useStore } from "vuex"
import { computed, onMounted } from "vue"
import CardS from "./components/CardS.vue"
import CarritoCompra from "./components/CarritoCompra.vue"

export default {
  name: 'App',
  components: {
    CardS,
    CarritoCompra
  },
  setup() {
     const store = useStore()
     onMounted(() => {
       store.dispatch("fetchData")
     })

      const productos = computed (() => store.state.productos)
      // const carrito = computed (() => store.state.carrito)

    return {productos}
  }
}
</script>
