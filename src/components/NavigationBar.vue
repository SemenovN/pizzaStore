<template>
    <nav class="menu">
        <router-link to="homepage">Ресторан
            <svg.js<svg class="icon-vk_round">
                <use xlink:href="./../assets/restaursvg.js.svg"></use>
          svg/svg>*/-->
        </router-link>
        <router-link to="promotionpage">Акции
            <svg.js<svg class="icon-vk_round">
                <use xlink:href="./../assets/promotisvg.js.svg"></use>
          svg/svg>-->
        </router-link>
        <router-link to="menupage">Меню
            <svg.js<svg class="icon-vk_round">
                <use xlink:href="./../assets/dsvg.js.svg"></use>
          svg/svg>-->
        </router-link>
        <router-link to="cartpage">Корзина ({{cartCount}})
            <svg.js<svg class="icon-vk_round">
                <use xlink:href="./../assets/csvg.js.svg"></use>
          svg/svg>-->
        </router-link>
        <router-link to="profilepage">Кабинет
            <svg.js<svg class="icon-vk_round">
                <use xlink:href="./../assets/profsvg.js.svg"></use>
          svg/svg>-->
        </router-link>
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
        height: 146px;
        width: 100%;
        left: 0;
    }
</style>