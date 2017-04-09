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
                productsInCart: 'cartProducts',
                //qtyInCart: 'qtyInCart'
            }),
            qtyInCart() {
                var found = this.productsInCart.find(p => p.id === this.product.id)
                //console.log(found)
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
        padding: 30px;
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
        padding: 30px;
        text-align: left;
    }

    .product-name {
        margin: 22px 0 0 0;
        line-height: 30px;
        font-size: 36px;
    }

    .product-description {
        color: #7f8c8d;
        font-size: 22px;
        padding: 0;
        margin: 0;
        line-height: 30px;
    }

    .unit-right {
        float: left;
        width: 33%;
        padding: 26px;
        position: relative;
    }

    .price {
        line-height: 30px;
        color: #e63f52;
        font-size: 46px;
        margin-top: 34px;
    }

    .ordering {
        margin-top: 28px;
    }

    .change-qty {
        /*padding-left: 30px;*/
    }

    .add-button {
        border: medium none;
        border-radius: 5px;
        padding: 12% 21%;
        font-size: 24px;
        line-height: 14px;
        background-color: #e63f52;
    }

    .inc, .dec {
        padding: 12%;
        font-size: 24px;
        line-height: 14px;
        float: left;
        background-color: transparent;
        border: 1px solid #e63f52;
        color: #e63f52;
    }

    .inc {
        padding: 12% 13.4%;
    }

    .qty {
        padding: 12%;
        background-color: #e63f52;
        display: block;
        float: left;
        font-size: 24px;
        line-height: 14px;
        border: 1px solid #e63f52;
    }

    @media screen and (max-width: 670px) {
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
    @media screen and (max-width: 479px) {
        .product-name {font-size: 18px; margin: 6px 0 0 0;}
        .product-description {font-size: 12px; line-height: 20px}
        .unit-right { padding: 7px;}
        .price { font-size: 28px; margin-top: 22px}
        .ordering { margin-top: 12px}
        .dec, .qty, .add-button { font-size: 12px;}
        .change-qty { padding-left: 10px; }

    }
</style>