<template>
    <div>
        <h2 :class="shopTitle">Вітаємо на нашому сайті!!!</h2>
        <div :class="shopBody">
            <div :class="shopMain">
                <list-products :list-products-data="gListProductWithCorrectingPrice()" class="shop__list" />
                <monetary-currency />
            </div>
            <cart-products :cart-list-products-data="gCartProductListWithCorrectingPrice()" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ListProducts from '@/components/ShopPage/ListProducts.vue'
import MonetaryCurrency from '@/components/ShopPage/MonetaryCurrency.vue'
import CartProducts from '@/components/ShopPage/CartProducts.vue'
export default {
    name: 'ShopPage',
    components: {
        ListProducts,
        CartProducts,
        MonetaryCurrency,
    },
    computed: {
        ...mapGetters([
            'gListProducts',
            'gListProductWithCorrectingPrice',
            'gCartProductList',
            'gCartProductListWithCorrectingPrice',
        ]),

        // *---------------------------------------Style
        shopTitle() {
            return 'shop__title'
        },
        shopBody() {
            return 'shop__body'
        },
        shopMain() {
            return ' shop__main'
        },
    },
    created() {
        this.aLoadProductsList()
    },
    methods: {
        ...mapActions(['aLoadProductsList']),
    },
}
</script>

<style lang="scss" scoped>
.shop {
    // .shop__title
    &__title {
    }
    // .shop__body
    &__body {
    }
    // .shop__main
    &__main {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        justify-content: space-between;
    }
    // .shop__list
    &__list {
        flex: 1 1 75%;
    }
}
</style>
