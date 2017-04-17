<template>
    <div class="product clearfix">

        <div class="unit-left">
            <img src="./../assets/margo.jpg" class="clearfix">
        </div>

        <div class="unit-body">
            <h2 class="product-name">{{ product.title }}</h2>
            <p class="product-description">{{ product.description }}</p>
        </div>
        <div class="unit-right">
            <div class="price">{{ product.price }} &#8381</div>
            <div class="ordering">
                <button class="add-button" @click="addToCart(product)" v-if="qtyInCart == 0">Заказать</button>
                <div v-else class="change-qty clearfix">
                    <button class="inc clearfix" @click="removeFromCart(product)">-</button>
                    <span class="qty clearfix">{{ qtyInCart }}</span>
                    <button class="dec" @click="addToCart(product)">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props: ['product'],

        computed: {
            ...mapGetters ({
                productsInCart: 'cartProducts'
            }),
            qtyInCart() {
                var found = this.productsInCart.find(p => p.id === this.product.id)
                if (typeof found == 'object') {
                    return found.quantity
                } else {
                    return 0
                }
            }
        },

        methods: mapActions([
            'addToCart',
            'removeFromCart',
        ])
    }
</script>

<style>
    .product {
        border-bottom: 1px solid #46494b;
        display: block;
    }

    .unit-left {
        float: left;
        display: block;
        width: 33%;
        padding: 4%;
        position: relative;
    }
    .unit-left img {
        display: block;
        border-radius: 50%;
        max-height: 100%;
        margin: auto;
        width: 100%;
    }

    .unit-body {
        float: left;
        width: 33%;
        padding: 4%;
        text-align: left;
    }

    .product-name {
        margin: 0;
        line-height: 30px;
        font-size: 1.5rem;
    }

    .product-description {
        color: #7f8c8d;
        font-size: 1rem;
        padding: 0;
        margin: 0;
        line-height: 30px;
    }

    .unit-right {
        float: left;
        width: 33%;
        padding: 4%;
        position: relative;
    }

    .price {
        line-height: 30px;
        color: #e63f52;
        font-size: 2.3rem;
    }

    .ordering {
        margin-top: 14%;
    }

    .add-button {
        border: medium none;
        border-radius: 5px;
        padding: 12% 19%;
        font-size: 1.2rem;
        line-height: 14px;
        background-color: #e63f52;
        width: 100%;
        outline: none;
    }

    .inc, .dec {
        padding: 12%;
        font-size: 0.9rem;
        line-height: 14px;
        float: left;
        background-color: transparent;
        border: 1px solid #e63f52;
        color: #e63f52;
        width: 33.33333333333333%;
        outline: none;
    }

    .inc {
        padding: 12% 13.7%;
    }

    .qty {
        padding: 12%;
        background-color: #e63f52;
        display: block;
        float: left;
        font-size: 1.1rem;
        line-height: 14px;
        border: 1px solid #e63f52;
        width: 33.3333333333333333%;
    }

    /*@media screen and (max-width: 670px) {
        .unit-left { padding: 15px; }
        .unit-body { padding: 15px; }
        .product-name {font-size: 26px; margin: 10px 0 0 0;}
        .product-description {font-size: 16px; line-height: 20px}
        .unit-right { padding: 7px;}
        .price { font-size: 36px; margin-top: 26px}
        .ordering { margin-top: 16px}
        .add-button { font-size: 18px; padding: 10% 18%}
        .dec, .qty { font-size: 18px; padding: 10%}
        .inc { padding: 10% 11.4%;}
        .change-qty { padding-left: 30px; }

    }
   /* @media screen and (max-width: 479px) {
        .product-name {font-size: 18px; margin: 6px 0 0 0;}
        .product-description {font-size: 12px; line-height: 20px}
        .unit-right { padding: 7px;}
        .price { font-size: 28px; margin-top: 22px}
        .ordering { margin-top: 12px}
        .dec, .qty, .add-button { font-size: 12px;}
        .change-qty { padding-left: 10px; }

    }*/
</style>