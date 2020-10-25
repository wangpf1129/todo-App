<template>
    <transition name="fade">
        <div class="todo_detail" v-if="isShow">
            <!--导航栏-->
            <nav-bar left_icon='chevron-left' @leftClick="cancelClick" title=" " ></nav-bar>
            <!--信息和任务列表-->
            <todo :todo="selectedTodo"></todo>
        </div>
    </transition>
</template>

<script>
    import NavBar from "../common/NavBar";
    import Todo from "./Todo";

    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "TodoDetail",
        components: {
            NavBar,
            Todo
        },
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapState(['selectedTodo'])
        },
        methods: {
            ...mapMutations(['changeSelected']),
            cancelClick() {
                this.changeSelected(null)
                // 调用 home 中的方法
                this.$parent.showChange();
            }
        }
    }
</script>

<style scoped>
    .todo_detail {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: .9;
        transform:translate(0,70%);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s ease;
    }
</style>