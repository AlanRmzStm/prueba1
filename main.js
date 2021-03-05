const app = Vue.createApp({
    data() {
        return {
<<<<<<< HEAD
            cart: [],
            premium: true,
=======
            cart:0,
            onSale: true,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant : 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',  quantity: 0},
            ]
>>>>>>> L8-start
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
<<<<<<< HEAD
        deleteCart(id){
            this.cart.pop(id)
        }
=======
        updateVariant(index) {
            this.selectedVariant = index;
        }, 
    },
    computed:{
        title(){
            if(this.onSale){
                return this.brand+' '+this.product
            }
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
>>>>>>> L8-start
    }
  })
  
