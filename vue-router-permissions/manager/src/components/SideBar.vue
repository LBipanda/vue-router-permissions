<!-- 页面 -->
<template>
    <div class="app-side-bar">
        <ul>
            <li>
                <router-link to="/"></router-link>
            </li>
        </ul>
        <template v-for="(item,index) in $store.state.userRouters">
            <MenuItem :key="index" :item="item" />
        </template>
    </div>
</template>

<script>
import MenuItem from "./MenuItem"
export default {
    name: "SideBar",
    components:{
        MenuItem,
    },
    data () {
        return {

        }
    }
}
</script>

<style>
.app-side-bar{
    height: 100%;
    width: 200px;
    background-color: pink;
    color: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding-top: 90px;
}
</style>
