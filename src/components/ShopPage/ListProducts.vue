<template>
    <div :class="shopList">
        <h3 :class="shopListTitle">Список товарів</h3>
        <div v-for="product in listProductsData" :key="product.id" :class="shopProductItem">
            <div :class="shopProductName">{{ product.title }}</div>
            <div :class="shopProductPrice">{{ product.price.toFixed(2) }} {{ definitionMonetaryCurrency }}</div>
            <button :class="shopProductButton" @click="addProductToCart(product)">До кошика</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ListProducts',
    props: {
        listProductsData: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        ...mapGetters(['gMonetaryCurrency']),
        definitionMonetaryCurrency() {
            if (!this.gMonetaryCurrency || this.gMonetaryCurrency === 1) return '₴'
            else return '$'
        },

        // * ---------------------------------------Style
        shopList() {
            return 'shop__list'
        },
        shopListTitle() {
            return 'shop__list-title'
        },
        shopProductItem() {
            return 'shop__item'
        },
        shopProductName() {
            return 'shop__name'
        },
        shopProductPrice() {
            return 'shop__price'
        },
        shopProductButton() {
            return 'shop__button'
        },
    },
    methods: {
        ...mapActions(['aAddCartProductList']),
        addProductToCart(product) {
            this.aAddCartProductList(product)
        },
    },
}
</script>

<style lang="scss" scoped>
.shop {
    // .shop__list
    &__list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-width: 500px;
        border-radius: 5px;
        padding: 5px 10px;
        border: 2px solid yellowgreen;
    }
    // .shop__list-title
    &__list-title {
        text-align: left;
        font-size: 20px;
        color: rgb(5, 107, 107);
    }
    // .shop__item
    &__item {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        padding-bottom: 7px;
        align-items: center;
        color: rgb(5, 107, 107);
        &:not(:last-child) {
            border-bottom: 1px solid gray;
        }
    }
    // .shop__name
    &__name {
        flex: 1 1 auto;
        text-align: start;
    }
    // .shop__price
    &__price {
    }
    // .shop__button
    &__button {
        padding: 3px 7px;
        font-size: 16;
        color: rgb(5, 107, 107);
        background-color: #cae7d1;
        border: 1px solid #cae7d1;
        transition: border ease 0.3s;
        cursor: pointer;
        &:hover {
            border: 1px solid rgb(5, 107, 107);
        }
    }
}
</style>
