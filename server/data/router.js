module.exports = [
    {
        id: 1,
        pid: 0,
        path: "/course",//组件路由
        name: "course",//组件名
        title: "课程管理"
    },
    {
        id: 2,
        pid: 1,
        path: "operate",
        name: "courseOperate",
        link: "/course/operate",//子路由跳转路径
        title: "课程操作"
    },
    {
        id: 3,
        pid: 2,
        path: "info_data",
        name: "courseInfoDta",
        link: "/course/operate/info_data",
        title: "课程数据"
    },
    {
        id: 4,
        pid: 2,
        path: "add",
        name: "courseAdd",
        link: "/course/operate/add",
        title: "增加课程"
    },
    {
        id: 5,
        pid: 0,
        path: "/student",
        name: "student",
        title: "学生管理"
    },
    {
        id: 6,
        pid: 5,
        path: "operate",
        name: "studentOperate",
        link: "/student/operate",
        title: "学生操作"
    },
    {
        id: 7,
        pid: 5,
        path: "add",
        name: "studentAdd",
        link: "/student/add",
        title: "增加学生"
    },
]