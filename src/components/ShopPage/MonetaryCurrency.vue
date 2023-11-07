<template>
    <div>
        <h3>Валюта:</h3>
        <select v-model="current" class="shop__currency">
            <option value="1">Гривня</option>
            <option value="43">Доллар</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'MonetaryCurrency',
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['gMonetaryCurrency']),
        current: {
            get() {
                return this.gMonetaryCurrency
            },
            set(val) {
                this.aMonetaryCurrency(val)
            },
        },
    },
    methods: {
        ...mapActions(['aMonetaryCurrency']),
    },
}
</script>

<style lang="scss" scoped>
h3 {
    text-align: end;
    font-size: 20px;
    margin-right: 15px;
    color: rgb(5, 107, 107);
}

.shop__currency {
    padding: 5px 10px;
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid greenyellow;
    outline: none;
    margin-right: 15px;
    font-size: 18px;
}
</style>
