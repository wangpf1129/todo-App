<template>
    <div class="home">
        <nav-bar></nav-bar>
        <avatar></avatar>
        <div class="home_todo_list">
            <todo-list></todo-list>
        </div>
        <todo-detail :isShow="isShow"></todo-detail>
        <add-button @editClick="editClick"></add-button>
        <todo-editing ref="todo_edit" ></todo-editing>
    </div>
</template>

<script>
    import NavBar from "@/components/common/NavBar";
    import avatar from "@/components/home/avatar";
    import TodoList from "@/components/todo/TodoList";
    import TodoDetail from "@/components/todo/TodoDetail";
    import addButton from "@/components/common/addButton";
    import TodoEditing from "@/components/todo/TodoEditing";

    export default {
        name: "Home",
        components: {
            NavBar,
            avatar,
            TodoList,
            TodoDetail,
            addButton,
            TodoEditing
        },
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            showChange() {
                this.isShow = !this.isShow
            },
            editClick() {
                // 当点击 这个按钮时， 就给 edit页面 添加一个 点击事件
                this.$refs.todo_edit.addTask()
            }
        }
    }
</script>

<style scoped>
    .home {
        overflow: hidden;

    }


    .home_todo_list {
        position: relative;
    }
</style>