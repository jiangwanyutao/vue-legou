import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
   {
     path: '/home/search',
     name: 'home/search',
     component: () => import('../views/home/search/index.vue'),
      meta: {
        keepAlive: false
      },
       beforeEnter: (to, from, next) => {
         //保存跳转过来的页面路径
         to.query.enterPath = from.path;
         // console.log("我是/login路由的守卫函数")
         next()
       }
  },
    {
      path: '/home/newgoods/:id',//动态路由传参
      name: 'newgoods',
      component: () => import('../views/home/newgoods/index.vue'),
        meta: {
          keepAlive: true 
        },
  },
    {
      path: '/home/city',
      name: 'city',
      component: () => import('../views/home/city/index.vue'),
       meta: {
         keepAlive: false // 不需要缓存
       }
  },
    , {
      path: '/home/brand',
      name: 'brand',
      component: () => import('../views/home/brand/index.vue'),
       meta: {
         keepAlive: false // 需要被缓存
       }
  },
     , {
       path: '/home/brand/make',
       name: 'make',
       component: () => import('../views/home/brand/make/index.vue'),
         meta: {
           keepAlive: true // 需要被缓存
         }
     },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/index.vue'),
     meta: {
       keepAlive: false // 不需要缓存
     }
  }, {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/index.vue'),
      meta: {
        keepAlive: true // 需要被缓存
      }
  }
  , {
    path: '/category/list',
    name: 'list/',
    component: () => import('../views/category/list/index.vue'),
      meta: {
        keepAlive: false // 需要被缓存
      },
     beforeEnter: (to, from, next) => {
       //保存跳转过来的页面路径
       to.query.enterPath = from.path;
       // console.log("我是/login路由的守卫函数")
       next()
     }
  }, {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/index.vue'),
      meta: {
        keepAlive: true // 需要被缓存
      }
  }, {
    path: '/mine/collectlist',
    name: 'collectlist',
    component: () => import('../views/mine/collectlist/index.vue'),
      meta: {
        keepAlive: true // 需要被缓存
      }
  }
  , {
    path: '/mine/opinion',
    name: 'opinion',
    component: () => import('../views/mine/opinion/index.vue'),
      meta: {
        keepAlive: true // 需要被缓存
      }
  }, {
    path: '/topic',
    name: 'topic',
    component: () => import('../views/topic/index.vue'),
      meta: {
        keepAlive: true // 需要被缓存
      }
  }
  , {
    path: '/topic/page',
    name: 'page',
    component: () => import('../views/topic/page/page.vue'),
      meta: {
        keepAlive: true // 需要被缓存
      },
     beforeEnter: (to, from, next) => {
       //保存跳转过来的页面路径
       to.query.enterPath = from.path;
       // console.log("我是/login路由的守卫函数")
       next()
     }
  }
  , {
    path: '/details',
    name: 'details',
    component: () => import('../views/details/index.vue'),
      meta: {
        keepAlive: false 
      },
    beforeEnter: (to, from, next) => {
      //保存跳转过来的页面路径
      to.query.enterPath = from.path;
      // console.log("我是/login路由的守卫函数")
      next()  
    }
  },
 {
    path: '/order',
    name: 'order',
   component: () => import('../views/order/index.vue'),
     meta: {
       keepAlive: false // 不需要缓存
     }
  }, {
    path: '/address',
    name: 'address',
   component: () => import('../views/address/index.vue'),
      meta: {
        keepAlive: false // 
   },
       beforeEnter: (to, from, next) => {
         //保存跳转过来的页面路径
         to.query.enterPath = from.path;
         // console.log("我是/login路由的守卫函数")
         next()
       }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
