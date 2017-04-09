<template>
    <div class="cart">
        <p v-show="!products.length"><i>Ваша корзина пуста.</i></p>
        <product-item v-for="product in products" :product="product"></product-item>
        <p>Сумма: {{ total }}</p>
        <p><button :disabled="!products.length" @click="checkout(products)">Оформить заказ</button></p>
        <p v-show="checkoutStatus">Оформить заказ {{ checkoutStatus }}.</p>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ProductItem from './../components/ProductItem.vue'
    export default {
        components: {
          ProductItem
        },
        computed: {
            ...mapGetters ({
                products: 'cartProducts',
                checkoutStatus: 'checkoutStatus'
            }),
            total () {
                return this.products.reduce(( total, p) => {
                    return total + p.price * p.quantity
                }, 0)
            }
        },
        methods: {
            ...mapActions([
                'addToCart',
                'removeFromCart',
            ]),
            checkout (products) {
                this.$store.dispatch('checkout', products)
            }

        }
    }
</script>

<style>
    .product {
        display: flex;
    }
    .product-item {
        max-height: 482px;
        flex-direction: row;

    }

    .product-picture {
        flex: 0 0 auto;
    }

    .product-name {
        display: inline-block;
    }
</style>