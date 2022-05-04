<template>
    <div class="my-5">
        <h4>Carrito de Compras</h4>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Accion</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody id="items"></tbody>
               <ItemS 
               v-for="item in items" :key="item.id"
               :item="item"
               />
            <tfoot>
                <tr id="footer-carrito">
                    <th scope="row" colspan="5" v-if="Object.keys(items).length === 0">Carrito vacio - Comience a Comprar</th>
                  <FooterS v-else />
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core"
import { useStore } from "vuex"
import ItemS from "./ItemS.vue"
import FooterS from "./FooterS.vue"

export default ({
    component: {ItemS, FooterS},
    setup() {
        const store = useStore()
        const items = computed(() => store.state.carrito)

        return {items}
    },
})
</script>
