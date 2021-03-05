const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            link: 'https://www.google.com',
            image: './assets/images/socks_blue.jpg',
            inventory: 0,
            onSale: true,
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['chico', 'mediano', 'grande'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ]
        }
    }
})
