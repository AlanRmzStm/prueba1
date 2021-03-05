const app = Vue.createApp({
    data() {
        return {
            brand: 'Vue Mastery',
            cart:0,
            onSale: true,
            product: 'Socks',
            link: 'https://www.google.com',
            // image: './assets/images/socks_blue.jpg',
            inventory: 0,
            onSale: true,
            // inStock: false,
            selectedVariant : 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['chico', 'mediano', 'grande'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',  quantity: 0},
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
        },
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
        }
    }
})
