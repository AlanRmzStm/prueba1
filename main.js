const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            link: 'https://www.google.com'
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
  })
  
