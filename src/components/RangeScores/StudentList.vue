<template>
    <h2 :class="studentTitleStyle">Список студентів</h2>
    <ul :class="studentListStyle">
        <li v-for="student in studentData" :key="student.id" :class="studentItemStyle">
            <div :class="studentNameStyle">{{ student.name }}</div>
            <div :class="studentScoreStyle">{{ student.score }}</div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'StudentList',
    props: {
        studentData: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        // ------------------------------------Style
        studentTitleStyle() {
            return 'student__title'
        },
        studentListStyle() {
            return 'student__list'
        },
        studentItemStyle() {
            return 'student__item'
        },
        studentNameStyle() {
            return 'student__name'
        },
        studentScoreStyle() {
            return 'student__score'
        },
    },
}
</script>

<style lang="scss" scoped>
.student {
    //     // .student__titlle
    &__title {
    }
    // .student__list
    &__list {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        row-gap: 2px;
        font-size: 18px;
        padding: 0;
        margin: 0 auto;
    }
    //     // .student__item
    &__item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2px;
    }
    // .student__name
    &__name {
        flex: 1 1 auto;
        text-align: start;
        padding: 5px;
        background-color: #54f854;
    }
    // .student__score
    &__score {
        flex: 0 0 15%;
        padding: 5px;
        background-color: #9cf02f;
    }
}
</style>
