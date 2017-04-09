<template>

    <div>
        <product-item v-for="product in products" :product="product"></product-item>
    </div>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ProductItem from './../components/ProductItem.vue'
    export default {
        computed: mapGetters({
            products: 'allProducts'
        }),
        components: {
            ProductItem
        },
        created () {
            this.$store.dispatch('getAllProducts')
        }
    }
</script>

<style>

</style>