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
    meta: { title: '标题为 about' }, //路由守卫，修改标题操作
  },
  {
    path: '/home',
    component: Home,
    meta: { title: '标题为 home' }, //路由守卫，修改标题操作
    // 子路由，路径后面不能加 '/'
    children: [
      {
        path: 'news',
        component: News,
        meta: { isAuth: true, title: '标题为 news' }, //鉴权验证，谁需要放谁那

        // 独享路由守卫、和前置路由守卫写法一样，只是对某个路由单独做出限制
        beforeEnter: (to, from, next) => {
          console.log('独享路由守卫：', to, from);
          if (to.meta.isAuth === true) {
            // 判断是否需要鉴权，(如果需要鉴权多个路由组件，可用meta鉴权)
            if (localStorage.getItem('admin') === '123456') {
              next(); // 条件符合通行
            } else {
              alert('用户密码不对，无权限查看！');
            }
          } else {
            next(); // 其它通行
          }
        },
      },

      {
        path: 'message',
        component: Message,
        meta: { isAuth: true, title: '标题为 message' }, //鉴权验证，谁需要放谁那
        children: [
          {
            name: 'xiangqing', // 命名路由，给路由起名字方便使用(message组件中使用，name代替path，直接跟名字)
            path: 'detail/:id/:title', //params传参、参数占位
            component: Detail,
            meta: { title: '标题为 detail' }, //路由守卫，修改标题操作

            // props读取路由参数显示 (由于query、params等耦合度比较高，官方推荐props三种方式[对象、布尔、函数方式]取代$route的耦合)
            // props第一种写法、对象写法(该对象中的所有key-value都以props的形式传给 Detail组件) ---> 用的比较少，数据是写死的
            // props: { a: 1, b: 'hello' },

            // props第二种写法，值为布尔，若布尔值为真，就会把该路由组件收到的所有params参数，以props形式传给 Detail组件
            // props: true,

            // props第三种写法，值为函数，(返回值必须是一个对象)能接收一个参数$route。也是以props形式传给 Detail组件
            props($route) {
              // return { id: 666, title: '你好啊！' };
              return {
                id: $route.params.id,
                title: $route.params.title,
              };
            },

            // 解构赋值简写
            // props({ params }) {
            //   return { id: params.id, title: params.title };
            // },

            // 连续解构
            // props({ params: { id, title } }) {
            //   return { id, title };
            // },
          },
        ],
      },
    ],
  },

  // 重定向
  // {
  //   path: '/',
  //   redirect: '/about',
  // },
];
