<template>
    <div :class="scoreRangeStyle">
        <h2 :class="scoreTitleStyle">Рівень студента:</h2>
        <select v-model="range" :class="scoreSelectStyle">
            <option value="100" :class="scoreOptionStyle">Всі студенти</option>
            <option value="10" :class="scoreOptionStyle">Відмінник</option>
            <option value="7" :class="scoreOptionStyle">Хорошист</option>
            <option value="4" :class="scoreOptionStyle">Трійочник</option>
            <option value="0" :class="scoreOptionStyle">Двійочник</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'StudentRange',

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
        // ----------------------------------Style
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
