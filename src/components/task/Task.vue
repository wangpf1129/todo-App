<template>
    <div class="task" v-if="task != null && !task.deleted">
        <input :id="id" type="checkbox" v-model="task.isDone">
        <label :for="id">{{task.content}}</label>
        <!--  当点击复选框 为true 时 , 此动画开始-->
        <transition name="deleted_fade">
            <span class="deleted_task" v-show="task.isDone" @click="deletedClick(task)">
                <i class="fa fa-trash"></i>
            </span>
        </transition>
    </div>
</template>

<script>
    let GID = 0
    import {mapMutations} from 'vuex'

    export default {
        name: "Task",
        props: {
            task: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                id: `task_${++GID}`
            }
        },
        methods: {
            ...mapMutations(['deletedTask']),
            deletedClick(task) {
                // 当点击此按钮， 就调用 vuex中的 deletedTask 是task对象中的deleted为true
                // 又根据 v-if 再把为true的deleted不显示
                this.deletedTask(task)
            }
        }
    }
</script>

<style scoped>
    .task {
        position: relative;
        display: flex;
        padding: 10px 0;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
    }

    .task input {
        display: none;
    }

    .task label {
        flex: 1;
    }

    .task label::before, .task label::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 2px;
        padding: 3px;
        vertical-align: top;
        margin-right: 15px;
    }

    .task label::before {
        border: 1px solid #ccc;
    }

    .task label::after {
        content: "\f00c";
        font: normal normal normal 10px/1 FontAwesome;
        position: absolute;
        left: 0;
        width: 12px;
        height: 12px;
        color: #fff;
        display: none;
        background-color: #ccc;
        text-align: center;
        line-height: 12px;
    }

    .task input:checked + label::after {
        display: inline-block;
    }

    .deleted_task {
        position: absolute;
        right: 0;
        margin-top: 5px;
        padding: 0 10px;
        color: #727272;
    }

    .deleted_fade-enter, .deleted_fade-leave-to {
        transform: translate(8px, 0);
        opacity: 0;
    }

    .deleted_fade-enter-active, .deleted_fade-leave-active {
        transition: all .8s;
    }
</style>