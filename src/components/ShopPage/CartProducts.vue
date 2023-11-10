<template>
    <div :class="cart">
        <h3>Кошик</h3>
        <div v-for="(product, index) in cartListProductsData" :key="product.id" :class="cartList">
            <div :class="cartProductName">{{ product.title }}</div>
            <div :class="cartProductCount">Кількість: {{ product.count }}.</div>
            <div :class="cartProductPrice">{{ totalPriceProduct(product) }} {{ definitionMonetaryCurrency }}</div>
            <button :class="cartProductButton" @click="removeProductCart(index)">Видалити</button>
        </div>
        <div :class="cartTotalPrice">Загальна сума: {{ totalPrice }} {{ definitionMonetaryCurrency }}</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CartProducts',
    props: {
        cartListProductsData: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        ...mapGetters(['gCartProductList', 'gMonetaryCurrency']),
        definitionMonetaryCurrency() {
            if (this.gMonetaryCurrency === 1) return '₴'
            else return '$'
        },
        totalPrice() {
            if (!this.cartListProductsData[0]) return '0'
            else
                return this.cartListProductsData
                    .reduce((totalSum, product) => (totalSum += product.price * product.count), 0)
                    .toFixed(2)
        },
        // *---------------------------------------Style
        cart() {
            return 'cart'
        },
        cartList() {
            return 'cart__list'
        },
        cartProductName() {
            return 'cart__name'
        },
        cartProductCount() {
            return 'cart__count'
        },
        cartProductPrice() {
            return 'cart__price'
        },
        cartProductButton() {
            return 'cart__button'
        },
        cartTotalPrice() {
            return 'cart__total'
        },
    },
    methods: {
        ...mapActions(['aRemoveProductWithCartList']),
        removeProductCart(productIndex) {
            this.aRemoveProductWithCartList(productIndex)
        },
        totalPriceProduct(product) {
            return (product.price * product.count).toFixed(2)
        },
    },
}
</script>

<style lang="scss" scoped>
.cart {
    margin-top: 20px;
    padding: 10px;
    border: 2px solid yellowgreen;
    // .cart__list
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        padding: 7px 0px;
        color: rgb(5, 107, 107);
        align-items: center;
        &:not(:last-child) {
            border-bottom: 1px solid gray;
        }
    }
    // .cart__list-title
    &__list-title {
        text-align: left;
        font-size: 20px;
        color: rgb(5, 107, 107);
    }
    // .cart__item
    &__item {
    }
    // .cart__name
    &__name {
        flex: 1 1 auto;
        text-align: start;
    }
    // .cart__price
    &__price {
        width: 120px;
        padding: 0 10px;
        text-align: end;
    }
    // .cart__button
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
    // .cart__total
    &__total {
        margin-top: 15px;
        text-align: end;
        font-weight: 600;
    }
}
</style>
