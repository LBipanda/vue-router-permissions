<template>
  <div id="app">
    <Header />
    <SideBar />
    <PageBoard />
  </div>
</template>

<script>
import Header from "./components/Header";
import SideBar from "@/components/SideBar";
import PageBoard from "@/components/PageBoard";

export default {
  components:{
    Header,
    SideBar,
    PageBoard
  },
  data(){
    return{

    }
  },
}
</script>

<style lang="scss">
#app {
  height: 100%;
  
}
</style>
