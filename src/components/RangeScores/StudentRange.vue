<template>
    <div class="score__range">
        <h2 class="score__title">Рівень студента:</h2>
        <select v-model="range" class="score__select">
            <option value="100" class="score__option">Всі студенти</option>
            <option value="10" class="score__option">Відмінник</option>
            <option value="7" class="score__option">Хорошист</option>
            <option value="4" class="score__option">Трійочник</option>
            <option value="0" class="score__option">Двійочник</option>
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
