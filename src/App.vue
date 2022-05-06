<template>
  <div id="app">
    <van-tabbar route active-color="#c35559" v-if="isShow">
      <van-tabbar-item replace to="/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/topic" icon="orders-o"
        >专题</van-tabbar-item
      >
      <van-tabbar-item replace to="/category" icon="apps-o"
        >分类</van-tabbar-item
      >
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace to="/mine" icon="user-circle-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
   <!-- <router-view></router-view>  -->
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
       isShow:true,
    };
  },
   watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      var arr = ["/home","/topic","/category","/cart","/mine"];
      if(arr.includes(to.path)){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    }
  },
  created () {
     var userInfo = {

      "openId":"18337600696",

      "nickName":"此生何惧畏风尘",

      "avatarUrl":"http://1.13.23.97:5212/s/xvCO"
    };

    var openId = userInfo.openId;

    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    localStorage.setItem("openId", openId);
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
