<template>
    <div :class="studentPageStyle">
        <div :class="studentSelectStyle">
            <score-range v-model="score" />
            <student-range v-model="filterList" />
        </div>
        <div :class="studentResultStyle">
            <student-list :student-data="filterListStudent" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ScoreRange from '@/components/RangeScores/ScoreRange.vue'
import StudentRange from '@/components/RangeScores/StudentRange.vue'
import StudentList from '@/components/RangeScores/StudentList.vue'

export default {
    name: 'RangeScores',

    components: {
        StudentList,
        ScoreRange,
        StudentRange,
    },
    data() {
        return {
            score: null,
        }
    },
    computed: {
        ...mapGetters(['gStudentList', 'gStudentListChangeWithScoreRange', 'gStudentListToRender']),
        filterList: {
            get() {
                return this.filterList
            },
            set(val) {
                this.aChangeCategoryStudent(val)
            },
        },

        filterListStudent() {
            if (this.score) return this.gStudentListChangeWithScoreRange(this.score)
            else return this.gStudentListToRender()
        },

        // *---------------------------------------Style
        studentPageStyle() {
            return 'student__page'
        },
        studentSelectStyle() {
            return 'student__selected'
        },
        studentResultStyle() {
            return 'student__result'
        },
    },
    created() {
        this.aLoadStudentsList()
    },
    methods: {
        ...mapActions(['aLoadStudentsList', 'aChangeCategoryStudent']),
    },
}
</script>

<style lang="scss" scoped>
.student {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    max-width: 600px;

    // .student__selected
    &__selected {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        column-gap: 15px;
        flex: 1 1 45%;
        border-top: 3px solid #9cf02f;
        border-bottom: 4px solid #9cf02f;
        background-color: rgb(250, 230, 206);
    }
    // .student__result
    &__result {
        padding: 5px 15px 20px;
        background-color: rgb(250, 230, 206);
        border-bottom: 3px solid #9cf02f;
    }
}
</style>
