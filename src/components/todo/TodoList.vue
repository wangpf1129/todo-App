<template>
    <div class="todo_list" :style="{width:`${todos.length * 100}%`}" ref="todoList">
        <div
                class="list_todo"
                v-for="item in todos"
                :key="item.name"
                :style="{transform:`translate3d(-${currentIndex*100}%,0,0)`}"
                @click="todoClick(item)"
        >
            <todo :todo="item"></todo>
        </div>
    </div>
</template>

<script>
    import Todo from "./Todo";
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "TodoList",
        components: {
            Todo
        },
        computed: {
            ...mapState(['todos', 'currentIndex'])
        },
        methods: {
            ...mapMutations(['nextClick', 'prevClick', 'changeSelected']),
            todoClick(item) {
                // console.log(item)
                this.changeSelected(item)
                // 调用 home 中的方法
                this.$parent.showChange();
            }
        },
        mounted() {
            let touch = {};
            // console.log(this.$refs.todoList);
            // 当触摸发生前 将 X的的位置记录下
            this.$refs.todoList.addEventListener("touchstart", e => {
                touch.startX = e.touches[0].clientX
                touch.endX = 0
            })
            // 当触摸发生移动时， 将 X的位置记录下
            this.$refs.todoList.addEventListener("touchmove", e => {
                touch.endX = e.touches[0].clientX
            })
            // 当触摸完成后，将
            this.$refs.todoList.addEventListener("touchend", e => {
                // 当 endX 为0 或者  endX -startX 小于10 时 返回
                if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
                    return
                }
                //  当 endX 小于 startX 时 触发右滑按钮 反之 触发左滑按钮
                if (touch.endX < touch.startX) {
                    this.nextClick()
                } else {
                    this.prevClick()
                }
            })
        }
    }
</script>

<style scoped>
    .todo_list {
        display: flex;
        margin-top: 10%;
    }


    .list_todo {
        width: 25%;
        height: 320px;
        margin-left: 15px;
        background-color: #eee;
        border-radius: 10px;
        transition: all 0.5s;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, .5);
    }
</style>