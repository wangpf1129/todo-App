<template>
    <transition name="add_button" v-if="selectedTodo!=null">
        <button
                class="button_add"
                :class="{edit_button:isEditing}"
                @click="addClick()"
        ></button>
    </transition>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "addButton",
        computed: {
            ...mapState(['selectedTodo', 'isEditing'])
        },
        methods: {
            ...mapMutations(['changeEdit']),
            addClick() {
                if (!this.isEditing) {
                    this.changeEdit(true)
                }else {
                    this.$emit('editClick')
                }
            }
        }
    }
</script>

<style scoped>
    .button_add {
        position: absolute;
        right: 32px;
        bottom: 32px;
        height: 44px;
        width: 44px;
        outline: none;
        border: none;
        border-radius: 100%;
        background-image: linear-gradient(45deg, rgb(0, 100, 255), rgb(0, 190, 255));
        box-shadow: 2px 3px 4px rgba(0, 0, 0, .4);
        transition: all 0.5s;
        z-index: 99;
    }

    .button_add:before,
    .button_add::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 3px;
        background-color: #fff;
        border-radius: 3px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .button_add::after {
        transform: translate(-50%, -50%) rotate(90deg);
    }

    .edit_button {
        border-radius: 0%;
        height: 44px;
        width: 100%;
        bottom: 0;
        right: 0;
    }

    .add_button-enter,
    .add_button-leave-to {
        transform: translate(0, 100px);
    }

    .add_button-enter-active,
    .add_button-leave-active {
        transition: all .5s;
    }
</style>