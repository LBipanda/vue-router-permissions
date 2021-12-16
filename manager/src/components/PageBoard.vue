<!-- 页面 -->
<template>
    <div class="app-page-board">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "PageBoard",
    data () {
        return {

        }
    }
}
</script>

<style>
.app-page-board{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 90px 30px 30px 230px;
}
</style>
