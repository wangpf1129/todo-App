import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store(
    {
        state: {
            todos: [
                {
                    icon: "user",
                    name: "User",
                    tasks: [
                        {
                            id: 1,
                            content: "Wangpf",
                            date: new Date(),
                            isDone: false,
                            deleted: false
                        }
                    ],
                    colors: ["#ff6262", "#ffa947"]
                },
                {
                    icon: "tasks",
                    name: "tasks",
                    tasks: [
                        {
                            id: 3,
                            content: "学习HTML",
                            date: new Date(),
                            isDone: false,
                            deleted: false
                        },
                        {
                            id: 4,
                            content: "学习CSS",
                            date: new Date(),
                            isDone: false,
                            deleted: false
                        },
                        {
                            id: 5,
                            content: "学习JavaScript",
                            date: new Date(),
                            isDone: false,
                            deleted: false
                        },
                        {
                            id: 6,
                            content: "学习Vue",
                            date: new Date(Date.now() + 86400000),
                            isDone: false,
                            deleted: false

                        }
                    ],
                    colors: ["#5b9df9", "#47bfcf"]
                },
                {
                    icon: "home",
                    name: "Home",
                    tasks: [
                        {
                            id: 2,
                            content: "my home",
                            date: new Date(),
                            isDone: false,
                            deleted: false
                        }
                    ],
                    colors: ["#2c7d59", "#3ba776"]
                }
            ],
            currentIndex: 1,
            selectedTodo: null,
            isEditing: false,
            gid: 7
        },
        mutations: {
            // 改变当前的任务  payload传递过来的是 对应的 todo对象
            changeSelected(state, payload) {
                state.selectedTodo = payload;
                // console.log(state.selectedTodo);
            },
            deletedTask(state, payload) {
                payload.deleted = true
            },
            changeEdit(state, payload) {
                state.isEditing = payload
            },
            increaseTask(state, payload) {
                let task = {
                    id: state.gid++,
                    content: payload.content,
                    date:
                        payload.date == '明天' ? new Date(Date.now() + 86400000) : new Date(),
                    isDone: false,
                    deleted: false

                }
                state.selectedTodo.tasks.unshift(task)
            },
            prevClick(state) {
                if (state.currentIndex > 0) {
                    state.currentIndex--
                }
            },
            nextClick(state) {
                if (state.currentIndex < 2) {
                    state.currentIndex++
                }
            },
        }
    }
)

export default store;