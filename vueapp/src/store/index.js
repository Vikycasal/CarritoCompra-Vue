import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload
      console.log(state.productos)
    },
    //las mutuaciones son las que afectan el estado
    setCarrito(state, payload) {
      //tengo que buscar en toda la data, y aumentar su cantidad cuando exista en el carrito
      state.carrito[payload.id] = { ...payload }
      console.log(state.carrito)
    },
    vaciarCarrito(state) {
      state.carrito = {}
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload]
      }
    }
  },
  actions: {
    async fetchData({commit}) {
      try{
        const res = await fetch("api.json")
        const data = await res.json()
        commit("setProducto", data)
      } catch (error) {
        console.log(error)
      }
    },
agregarAlCarro({commit, state}, producto) {
  Object.prototype.hasOwnProperty.call([state.carrito], [producto.id])
  ? producto.cantidad = state.carrito(producto.id).cantidad + 1
  : producto.cantidad = 1
  commit("setCarrito", producto)
}
  },
  getters: {
    //con el getter voy a poder sumar las cantidades+
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    }
  },
  modules: {
  }
})
