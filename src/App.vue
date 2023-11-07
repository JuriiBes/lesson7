<template>
    <range-scores />
    <shop-page />
</template>

<script>
import RangeScores from '@/components/RangeScores/index.vue'
import ShopPage from '@/components/ShopPage/index.vue'
export default {
    name: 'App',
    components: {
        RangeScores,
        ShopPage,
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
