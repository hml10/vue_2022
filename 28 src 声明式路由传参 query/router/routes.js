// 引入每个路由组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/Detail.vue';

export default [
  // 路由地址和组件建立关系
  {
    path: '/about',
    component: About,
  },
  {
    path: '/home',
    component: Home,
    // 子路由，路径后面不能加 '/'
    children: [
      {
        path: 'news',
        component: News,
      },
      {
        path: 'message',
        component: Message,
        children: [
          {
            path: 'detail',
            component: Detail,
          },
        ],
      },
    ],
  },

  // 重定向
  {
    path: '/',
    redirect: '/about',
  },
];
