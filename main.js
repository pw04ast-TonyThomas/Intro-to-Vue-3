const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id) 
        },
        removeFromCart(id) {
            let idIndex = this.cart.indexOf(id) 
            if (idIndex !== -1)
                this.cart.splice(idIndex, 1)
        }
    }
})
