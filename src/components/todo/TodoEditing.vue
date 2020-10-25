<template>
    <transition name="edit_fade">
        <div class="edit" v-if="isEditing">
            <nav-bar title="新建任务" left_icon="times" :color-font="true" @leftClick="timesClick"></nav-bar>
            <div class="edit_content">
                <div class="content_tips">
                    <p>简单地输入您的计划（16字以内）</p>
                </div>
                <textarea maxlength="16" v-model="content"></textarea>
                <div class="choose_date">
                    <i class="fa fa-calendar"></i>
                    <div class="select_day">
                        <input type="text" class="select" :value="selectVlaue" disabled/>
                        <div class="options" @click="optionClick">
                            <div class="mask">
                                <a href="javascript:;">今天</a>
                                <a href="javascript:;">明天</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
    import NavBar from "../common/NavBar";

    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "TodoEditing",
        components: {
            NavBar
        },
        data() {
            return {
                selectVlaue: '今天',
                content: ''
            }
        },
        computed: {
            ...mapState(['isEditing'])
        },
        methods: {
            ...mapMutations(['changeEdit', 'increaseTask']),
            // 点击返回按钮， 就初始化当前页面的值
            timesClick() {
                this.content = ""
                this.selectVlaue = "今天"
                // v-if = 'isEditing'  === false 就不会显示当前编辑页面了
                this.changeEdit(false)
            },
            // 将 选项框中的 今天 、明天 保存
            optionClick(e) {
                // console.log(e)
                this.selectVlaue = e.target.innerText
            },
            // 这个点击事件在 home中
            addTask() {
                if (!this.content.length) {
                    return
                }
                let payload = {
                    content: this.content,
                    date: this.selectVlaue
                }
                this.increaseTask(payload)
                this.timesClick()
            }
        }
    }
</script>

<style scoped>
    .edit {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: calc(100% - 44px);
        z-index: 1;
        font-size: 18px;
        background-color: #fff;
    }

    .edit_content {
        padding: 20px;
        font-size: 20px;
        color: #444;
    }

    .content_tips p {
        color: #888;
        font-size: 18px;
    }

    textarea {
        font-size: 32px;
        width: 100%;
        height: 150px;
        margin: 10px 0 30px 0;
        border: none;
        resize: none;
        outline: none;
    }

    .choose_date {
        display: flex;
        padding: 10px 0;
        border-bottom: 2px solid #ccc;
        align-items: center;
    }

    .choose_date > i {
        margin-right: 20px;
    }

    .select_day {
        width: 80px;
        height: 40px;
    }

    .select_day .select {
        width: 100%;
        height: 100%;
        background-color: #fafafa;
        border-radius: 8px;

        /*cursor: pointer;*/
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        outline: none;
        border: none;
    }

    .select_day .options {
        width: 100%;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        background-color: #fafafa;
    }

    .select_day .options a {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: #444;
        text-align: center;
        text-decoration: none;
    }

    .select_day .options a:hover {
        background-color: #aaa;
    }

    .options .mask {
        width: 100%;
        height: 0px;
        overflow: hidden;
        transition: all 0.5s;
    }

    .select_day:hover .options .mask {
        height: 80px;
    }

    .edit_fade-enter,
    .edit_fade-leave-to {
        transform: translate(0, 100%);
    }

    .edit_fade-enter-active,
    .edit_fade-leave-active {
        transition: all .5s ease;
    }


</style>