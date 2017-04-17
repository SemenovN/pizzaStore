<template>
    <div>
        <div class="search-block">
            <i class="icon-angle-right"></i>
            <input type="text" class="search-field" v-model="searchString" placeholder="Введите название блюда"/>
        </div>
        <product-item v-if="searchString != ''" v-for="product in filteredProducts" :product="product"></product-item>
        <div class="not-found" v-if="!filteredProducts.length">
            <i class="icon-unsearch"></i>
            <h2>Нет результатов</h2>
            <p>Совпадений не найдено</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ProductItem from './../components/ProductItem.vue'
    export default {
        data: function() {
            return { searchString: "",  resultSearch: false}
        },
        computed: {
            ...mapGetters({
                products: 'allProducts'
            }),
            filteredProducts: function () {
                var products_arr = this.products,
                searchString = this.searchString;

                searchString = searchString.trim().toLowerCase();

                products_arr = products_arr.filter(function (product) {
                    if (product.title.toLowerCase().indexOf(searchString) !== -1) {
                        return product;
                    }
                })
                return products_arr;
            }
        },
        components: {
            ProductItem
        },
        created () {
            this.$store.dispatch('getAllProducts')
        }
    }
</script>

<style>
    .search-field {
        border: none;
        width: 100%;
        background-color: #3c3e40;
        color: #7f8c8d;
        padding: 4%;
        font-size: 1rem;
        outline: none;
        position: relative;
    }
    .search-block {
        position: relative;
    }

    .icon-angle-right {
        position: absolute;
        top: 26%;
        right: 3%;
        z-index: 2;
        cursor: pointer;
        font-size: 1.5rem;
    }

    .icon-angle-right:hover {
        color: #e63f52;
    }
    .not-found {
        margin-top: 16%;
        color: #7f8c8d;
    }

    .not-found h2 {
        text-transform: uppercase;
    }

    .icon-unsearch {
        font-size: 14rem;
        color: #46494b;
    }

</style>