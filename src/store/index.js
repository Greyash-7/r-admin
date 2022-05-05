import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '首页配置', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
                children: [
                    {
                        type: 'ios-grid',
                        name: 't1',
                        text: '表格',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                ]
            },
            {
                text: '数据管理',
                size: 18,
                type: 'md-home',
                children: [
                    // {
                    //     type: 'ios-grid',
                    //     name: 't1',
                    //     text: '表格',
                    //     // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                    //     // hidden: true,
                    // },
                    {
                        type: 'ios-grid',
                        name: 't2',
                        text: '食谱表格',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    // {
                    //     type: 'ios-grid',
                    //     name: 'veg',
                    //     text: '时令菜',
                    //     // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                    //     // hidden: true,
                    // },
                    // {
                    //     size: 18, // icon大小
                    //     type: 'md-arrow-forward', // icon类型
                    //     text: '外链',
                    //     url: 'https://www.baidu.com',
                    //     isExternal: true, // 外链 跳到一个外部的 URL 页面
                    // },
                    {
                        text: '用户管理',
                        type: 'ios-paper',
                        children: [
                            {
                                type: 'ios-notifications-outline',
                                name: 'msg',
                                text: '查看消息',
                            },
                            {
                                type: 'md-lock',
                                name: 'password',
                                text: '修改密码',
                            },
                            {
                                type: 'md-person',
                                name: 'userinfo',
                                text: '基本资料',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store