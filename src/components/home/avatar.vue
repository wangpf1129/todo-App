<template>
    <div class="avatar">
        <div class="head">
            <img src="~@/assets/mytou.jpg" alt="">
        </div>
        <div class="content">
            <h2>您好,{{todos[0].tasks[0].content}}</h2>
            <p>今天天气不错</p>
            <p>您有 {{totalTasks}} 个任务需要完成</p>
        </div>
        <div class="date">
            日期：{{new Date()| dateFormat}}
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "avatar",
        computed: {
            ...mapState(["todos"]),
            // 计算当前没有完成且没有被删除的任务数量
            totalTasks() {
                let totalCount = this.todos.reduce((newCount, todo) => {
                    return newCount +
                        todo.tasks.filter(task => {
                            return !task.isDone && !task.deleted
                        }).length
                }, 0)
                return totalCount
            }
        },
        filters: {
            dateFormat(date) {
                // toLocaleDateString() ： 根据本地时间把 Date 对象的日期部分转换为字符串
                return date.toLocaleDateString()
            }
        }
    }
</script>

<style scoped>
    .avatar {
        height: 250px;
        padding: 30px 30px 0 30px;
        color: #fff;
    }

    .head img {
        height: 66px;
        width: 66px;
        border-radius: 100%;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, .3);
    }

    .content {
        padding: 20px 0;

    }

    .content h2 {
        padding-bottom: 20px;
        font-size: 28px;
    }

    .content p {
        font-size: 14px;
    }

    .date {
        font-size: 18px;
    }
</style>