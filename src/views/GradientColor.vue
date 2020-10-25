<template>
    <!-- 颜色过渡  用 opacity 来实现过渡，当 index === currentIndex 就让当前  opacity 为1 其他为0-->
    <div class="gradient">
        <div
                class="gradient-color"
                v-for="(todo,index) in todos"
                :key="todo.name"
                :class="{color_active: index === currentIndex}"
                :style="{backgroundImage: backColor(index)}"
        ></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "GradientColor",
        computed: {
            ...mapState(["todos", "currentIndex"])
        },
        methods: {
            backColor(index) {
                // console.log(index)
                // 渐变色 45度角
                return `linear-gradient(360deg,${this.todos[index].colors[0]},${this.todos[index].colors[1]})`
            }
        }
    }
</script>

<style scoped>
    .gradient {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;

    }

    .gradient-color {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: opacity 0.5s;
        opacity: 0;
    }

    .color_active {
        opacity: 1;
    }
</style>