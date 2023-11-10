import { createStore } from 'vuex'
// * -------------------------------------------------------- Range Scores
import students from '../data/students.json'
import { getCorrectScore } from './helpers'

// * -------------------------------------------------------- ShopPage
import products from '../data/ShopData/products.json'

const store = createStore({
    state() {
        return {
            // * -------------------------------------------------------- Range Scores
            studentListData: [],
            categoryStudent: null,

            // * -------------------------------------------------------- ShopPage
            productsListData: [],
            monetaryCurrency: 1,
            cartProductList: [],
        }
    },
    getters: {
        // * -------------------------------------------------------- Range Scores
        gStudentList: ({ studentListData }) => studentListData,
        gStudentListToRender: (state) => {
            return () => {
                if (!state.categoryStudent || state.categoryStudent == 100) return state.studentListData
                else {
                    const minValue = state.categoryStudent
                    const maxValue = parseInt(state.categoryStudent) + 3
                    return state.studentListData.filter((student) => {
                        if (student.score >= minValue && student.score < maxValue) return student
                    })
                }
            }
        },
        gStudentListChangeWithScoreRange: (state, getters) => {
            return (scoreRange) => {
                if (scoreRange == 12) {
                    return getters.gStudentListToRender()
                } else {
                    let studentsListCopy = [...getters.gStudentListToRender()]

                    return studentsListCopy.map((student) => ({
                        ...student,
                        score: getCorrectScore(student.score),
                    }))
                }
            }
        },
        // * -------------------------------------------------------- ShopPage
        gListProducts: ({ productsListData }) => productsListData,
        gMonetaryCurrency: ({ monetaryCurrency }) => monetaryCurrency,
        gListProductWithCorrectingPrice: ({ productsListData, monetaryCurrency }) => {
            return () => {
                if (monetaryCurrency === 1) return productsListData
                else {
                    return productsListData.map((product) => ({
                        ...product,
                        price: product.price * monetaryCurrency,
                    }))
                }
            }
        },
        gCartProductList: ({ cartProductList }) => cartProductList,
        gCartProductListWithCorrectingPrice: ({ monetaryCurrency, cartProductList }) => {
            return () => {
                if (monetaryCurrency === 1) return cartProductList
                else {
                    return cartProductList.map((product) => ({
                        ...product,
                        price: product.price * monetaryCurrency,
                    }))
                }
            }
        },
    },

    mutations: {
        // * -------------------------------------------------------- Range Scores
        mLoadStudentsList(state, list) {
            state.studentListData = list
        },
        mChangeCategoryStudent(state, category) {
            state.categoryStudent = category
        },

        // * -------------------------------------------------------- ShopPage
        mLoadProductsList(state, list) {
            state.productsListData = list
        },
        mMonetaryCurrency(state, current) {
            current == 1
                ? (state.monetaryCurrency = parseInt(current))
                : (state.monetaryCurrency = 1 / parseInt(current))
        },
        mAddCartProductList(state, product) {
            let auditProduct = state.cartProductList.some((cartProduct) => cartProduct.id === product.id)
            if (!state.cartProductList[0] || auditProduct === false) {
                state.cartProductList.push({
                    ...product,
                    count: 1,
                    price: product.price / state.monetaryCurrency,
                })
            } else {
                state.cartProductList.filter((cart) => {
                    if (cart.id === product.id) ++cart.count
                })
            }
        },
        mRemoveProductWithCartList(state, productIndex) {
            if (state.cartProductList[productIndex].count !== 1) --state.cartProductList[productIndex].count
            else state.cartProductList.splice(productIndex, 1)
        },
    },

    actions: {
        // * -------------------------------------------------------- Range Scores
        aLoadStudentsList({ commit }) {
            commit('mLoadStudentsList', students)
        },
        aChangeCategoryStudent({ commit }, category) {
            commit('mChangeCategoryStudent', category)
        },

        // * -------------------------------------------------------- ShopPage
        aLoadProductsList({ commit }) {
            commit('mLoadProductsList', products)
        },
        aMonetaryCurrency({ commit }, current) {
            commit('mMonetaryCurrency', current)
        },
        aAddCartProductList({ commit }, product) {
            commit('mAddCartProductList', product)
        },
        aRemoveProductWithCartList({ commit }, productIndex) {
            commit('mRemoveProductWithCartList', productIndex)
        },
    },
})

export default store
