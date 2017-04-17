<template>
    <nav class="menu">
        <div class="container">
            <router-link class="menu-item" to="homepage"><i class="icon-restaurant"></i> <span>Ресторан</span></router-link>
            <router-link class="menu-item" to="promotionpage"><i class="icon-promotion"></i> <span>Акции</span></router-link>
            <router-link class="menu-item" to="menupage"><i class="icon-menu"></i><span>Меню</span></router-link>
            <router-link class="menu-item" to="cartpage"><i class="icon-cart"><span class="qty-product">{{cartCount}}</span></i><span>Корзина</span></router-link>
            <router-link class="menu-item" to="profilepage"><i class="icon-profile"></i> <span>Кабинет</span></router-link>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            cartCount: 'cartCount'
        })
    }
</script>

<style>
    .menu {
        background-color: #ecf0f1;
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        color: #46494b;
    }

    .menu a {
        color: #46494b;
        text-decoration: none;
        font-size: 1.3rem;
    }

    .menu-item {
        display: block;
        float: left;
        width: 20%;
        margin: 12px auto;
    }

    .menu-item span {
        display: block;
    }

    .menu-item.router-link-active {
        color: #e63f52;
    }

    .qty-product {
        position: absolute;
        bottom: 12px;
        right: -8px;
        padding: 0px 6px 2px;
        font-size: 10px;
        color: #fff;
        background-color: #e63f52;
        line-height: 14px;
        border-radius: 50%;
    }
    @media screen and (min-width: 479px) {
        .qty-product {font-size: 12px; line-height: 16px; padding: 0px 7px 2px; bottom: 18px;}
    }
    @media screen and (min-width: 767px) {
        .qty-product {font-size: 14px; line-height: 18px; padding: 0px 7px 2px; bottom: 22px;}
    }
</style>