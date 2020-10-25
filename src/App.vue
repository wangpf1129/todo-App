<template>
    <div id="app">
        <home></home>
        <gradient-color></gradient-color>
    </div>
</template>

<script>
    import Home from "@/views/Home";
    import GradientColor from "@/views/GradientColor";

    export default {
        name: 'App',
        components: {
            Home,
            GradientColor
        }
    }
</script>

<style>
    /*引入字体图标font-awesome*/
    @import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    body {
        background-color: #aaa;
    }

    #app {

        max-width: 375px;
        max-height: 667px;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
    }
</style>
