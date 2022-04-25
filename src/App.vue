<template>
    <HeaderCom/>
    <!--  使用组件-->
    <router-view/>
</template>
<script>
    //
    import HeaderCom from "@/components/header/HeaderCom";

    export default {
        name: 'App',
        components: {
            HeaderCom
        }
    }
</script>

<style lang="less">
    /*#app {*/
    /*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*  -webkit-font-smoothing: antialiased;*/
    /*  -moz-osx-font-smoothing: grayscale;*/
    /*  text-align: center;*/
    /*  color: #2c3e50;*/
    /*}*/

    /*nav {*/
    /*  padding: 30px;*/

    /*  a {*/
    /*    font-weight: bold;*/
    /*    color: #2c3e50;*/

    /*    &.router-link-exact-active {*/
    /*      color: #42b983;*/
    /*    }*/
    /*  }*/
    /*}*/
</style>
