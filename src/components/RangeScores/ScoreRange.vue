<template>
    <div :class="scoreRangeStyle">
        <h2 :class="scoreTitleStyle">Система оцінювання:</h2>
        <select v-model="range" :class="scoreSelectStyle">
            <option value="5" :class="scoreOptionStyle">5</option>
            <option value="12" :class="scoreOptionStyle">12</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'ScoreRange',

    props: {
        modelValue: {
            type: String,
            default: null,
        },
    },
    emits: ['update:modelValue'],
    computed: {
        range: {
            get() {
                return this.modelValue
            },
            set(val) {
                this.$emit('update:modelValue', val)
            },
        },
        // *---------------------------------------Style

        scoreRangeStyle() {
            return 'score__range'
        },
        scoreTitleStyle() {
            return 'score__title'
        },
        scoreSelectStyle() {
            return 'score__select'
        },
        scoreOptionStyle() {
            return 'score__option'
        },
    },
    methods: {
        changeRangeScore() {
            this.nameOfAction(this.range)
        },
    },
}
</script>

<style lang="scss" scoped>
.score {
    // .score__range
    &__range {
        padding: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }
    // .score__title
    &__title {
        margin: 0;
    }
    // .score__select
    &__select {
        padding: 5px 10px;
        border: 3px solid #499c49;
        border-radius: 5px;
        background-color: rgb(250, 230, 206);
        font-size: 16px;
        font-weight: 600;
        outline: none;
    }
    // .score__option
    &__option {
    }
}
</style>
