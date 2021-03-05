const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            link: 'https://www.google.com',
            image: './assets/images/socks_blue.jpg',
            inventory: 0,
            onSale: true,
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['chico', 'mediano', 'grande'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart++
        },
        updateImage(variantImage){
            this.image = variantImage;
        },
        decrementToCart(){
            this.cart--;
        }
    }
})
