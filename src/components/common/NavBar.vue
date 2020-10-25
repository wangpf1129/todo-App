<template>
    <div class="nav-bar" :class="{color_font:colorFont}">
        <div class="left" @click="leftClick">
            <i :class="['fa',`fa-${left_icon}`]"></i>
        </div>
        <div class="middle">
            <span>{{title}}</span>
        </div>
        <div class="right">
            <i :class="['fa',`fa-${right_icon}`]"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            title: {
                type: String,
                default: 'Todo'
            },
            left_icon: {
                type: String,
                default: " "
            },
            right_icon: {
                type: String,
                default: " "
            },
            colorFont: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            leftClick() {
                this.$emit('leftClick')
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        color: #fff;
        font-weight: 700;

    }

    .left {
        flex: 1;
        text-align: center;
    }

    .left > i {
        font-size: 18px;
        color: #333;

    }

    .middle {
        width: 60%;
        text-align: center;

    }

    .color_font {
        color: #333;
    }

    .right {
        flex: 1;
    }
</style>