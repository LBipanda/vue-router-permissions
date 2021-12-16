import { getUserRouters } from "../services"
import formatRouterTreeAPI from "@/libs/utils"


export default {
    async setUserRouters({ commit,state }){
        const userRouters = await getUserRouters(state.uid)
        const payload = formatRouterTreeAPI.formatRouterTree(userRouters)
        
        commit("setUserRouters",payload)
        commit("setAuth",true)
    }
}