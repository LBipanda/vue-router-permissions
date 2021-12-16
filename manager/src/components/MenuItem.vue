<!-- 页面 -->
<template>
    <div>
        <ul v-if="item.children && item.children.length > 0">
            <li>
                <router-link :to="item.link || item.path">{{item.title}}</router-link>
                <template v-for="(child,i) in item.children">
                    <MenuItem :key="i" :item="child"></MenuItem>
                </template>
            </li>
        </ul>
        <ul v-else>
            <router-link :to="item.link || item.path">{{item.title}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    props:{
        item:{
            item: Object,
            default: {}
        }
    },
    data () {
        return {

        }
    },
    created() {
    },
}
</script>

<style lang='scss' scoped>

</style>
