app.component('product-display',{
  props:{
    premium:{
      type: Boolean,
      requierd: true,
    }
  },
  template:
  /*html*/
  `<div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <img v-bind:src="image">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="onSale">On Sale</p>
      <p v-if="inventory > 10">In Stock</p>
      <p v-else-if="inventory <=10 && inventory >0">Almost sold out</p>
      <p v-else>Out of Stock</p>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      <p>Shipping: {{ shipping }}</p>

      <product-details :details="details"></product-details>
      <ul>
              <li v-for="size in sizes">{{ size }}</li>
      </ul>

      <div 
            class="color-circle" 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            :style="{ backgroundColor: variant.color }"></div>
      
            <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
            <button class="button" @click="decrementToCart">Eliminar del Carrito</button>
    </div>
  </div>
</div>`,
data() {
  return {
    brand: 'Vue Mastery',
    cart:0,
    onSale: false,
    product: 'Socks',
    link: 'https://www.google.com',
    // image: './assets/images/socks_blue.jpg',
    inventory: 0,
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
methods: {
  addToCart(){
    this.cart++
},
decrementToCart(){
    this.cart--;
},
updateVariant(index) {
    this.selectedVariant = index;
}, 
},
computed: {
  title() {
      return this.brand + ' ' + this.product
  },
  image() {
      return this.variants[this.selectedVariant].image
  },
  inStock() {
      return this.variants[this.selectedVariant].quantity
  },
  shipping(){
    if(this.premium){
      return "Free"
    }
    return 2.99
  }
}

})