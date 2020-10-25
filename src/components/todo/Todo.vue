<template>
    <div class="todo" :class="{todo__no__selected:selectedTodo==null}">
        <!--信息-->
        <div class="profile">
            <div class="icon">
                <i :class="['fa',`fa-${todo.icon}`]" :style="{color:`${todo.colors[0]}`}"></i>
            </div>
            <p>{{totalCount}} 条待办</p>
            <h2>{{todo.name}}</h2>
            <div class="progress">
            <span class="progress_line"
                  :style="{width:`${progress}`,backgroundColor:`${todo.colors[0]}`}"
            ></span>
            </div>
            <span style="font-size: 12px;">{{progress}}</span>
        </div>
        <!-- 今天、明天的任务列表-->
        <div class="tasks" v-if="selectedTodo!=null">
            <div class="today">
                <p style="letter-spacing: 15px">今天</p>
                <task v-for="item in todayTasks" :key="item.id" :task="item"></task>
            </div>
            <div class="tomorrow">
                <p style="letter-spacing: 15px">明天</p>
                <task v-for="item in tomorrowTasks" :key="item.id" :task="item"></task>
            </div>
        </div>
    </div>
</template>

<script>
    import Task from "../task/Task";
    import {mapState} from 'vuex'
    import {tomorrow} from "@/store/date";

    export default {
        name: "Todo",
        components: {
            Task,
        },
        props: {
            todo: {
                type: Object,
                default: null
            }
        },
        computed: {
            ...mapState(['selectedTodo']),
            //计算 deleted为false 任务的数量
            totalCount() {
                return this.todo.tasks.filter(item => {
                    return item.deleted == false
                }).length
            },
            // 进度条
            progress() {
                // 返回 已完成 且 没有被删除的任务的数量
                let doneCount = this.todo.tasks.filter(item => {
                    return item.isDone == true && item.deleted == false
                }).length
                if (this.totalCount == 0) {
                    return '0%'
                }
                // 注意 这里的 totalCount 不会为0
                return Math.floor((doneCount / this.totalCount) * 100) + '%'
            },
            // 计算 日期 小于明天的 任务
            todayTasks() {
                return this.todo.tasks.filter(item => {
                    return item.date < tomorrow
                })
            },
            // 计算 日期 大于明天的 任务
            tomorrowTasks() {
                return this.todo.tasks.filter(item => {
                    return item.date >= tomorrow
                })
            }

        },

    }
</script>

<style scoped>
    .todo {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    /* 未选择某一个todo */
    .todo__no__selected .profile {
        padding: 5%;
    }

    .todo__no__selected .profile > p {
        margin-top: 100px;
    }


    .profile {
        padding: 7% 10%;
    }

    .profile .icon {
        display: inline-block;
        position: relative;
        width: 44px;
        height: 44px;
        border-radius: 100%;
        border: 1px solid #ccc;

    }

    .profile .icon i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 22px;
    }

    .profile > p {
        margin-top: 20px;
        font-size: 18px;
    }

    .profile > h2 {
        margin: 10px 0 20px 0;
        font-size: 28px;
        font-weight: 400;
    }

    .profile .progress {
        display: inline-block;
        position: relative;
        width: 80%;
        height: 5px;
        border-radius: 4px;
        background-color: #ddd;
        margin-right: 15px;
        /*vertical-align: middle;*/
    }


    .profile .progress_line {
        display: inline-block;
        position: absolute;
        height: 100%;
        border-radius: 4px;
        transition: all 0.5s;
    }

    .tasks {
        flex: 1;
        padding: 0 10% 10% 10%;
    }
    .tasks > div{
        margin-top: 20px;
    }
    .tasks > div p{
        font-size: 22px;
        letter-spacing: 15px;
        font-weight: 100;
        margin-bottom: 5px;
    }
</style>