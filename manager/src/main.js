import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/common.css"

import formatRouterTreeAPI from "@/libs/utils"

router.beforeEach(async(to, from, next) => {
  if(!store.state.hasAuth){
    await store.dispatch('setUserRouters')
    const newRouters = formatRouterTreeAPI.generateRouter(store.state.userRouters)
    router.addRoutes(newRouters)
    next({path: to.path})
  }else{
    next()
  }
  
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
