export default {
    formatRouterTree(data){
        console.log("data",data);
        let parents = data.filter(p => p.pid === 0),
        children = data.filter(c => c.pid !== 0)

        dataToTree(parents,children)

        function dataToTree(parents,children){
            parents.map(p => {
                children.map((c,i) => {
                    if(c.pid === p.id){//判断当前路由是不是子路由
                        let _c = JSON.parse(JSON.stringify(children))//深拷贝防止子路由发生变化
                        _c.splice(i,1)//因为该子路由不知道是否还有下级子路由，把该子路由从自子路由数组中取出来
                        dataToTree([c],_c)//递归
    
                        if(p.children){
                            p.children.push(c)
                        }else{
                            p.children = [c]
                        }
                    }
                })
            })
        }
        return parents
    },
    generateRouter(userRouters){
        let newRouters = userRouters.map((r,i) => {
            let routes = {
                path: r.path,
                name: r.name,
                title: r.title,
                component: () => import(`@/views/${r.name}`)
            }
            if(r.children){
                routes.children = this.generateRouter(r.children)
            }
            return routes
        })
        return newRouters
    }
}
