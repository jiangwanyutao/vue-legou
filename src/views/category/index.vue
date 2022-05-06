<template>
  <div class="categorys">
    <div class="category">
      <!-- >搜索框 -->
      <div class="search" @click="search">
        <span></span>
        <span>商品搜索,共239款好物</span>
      </div>
    </div>

    <!-- 给他们一个大盒子分开展示 -->
    <div class="banner">
      <!-- 侧边导航 -->
      <div class="nav">
        <div
          @click="toggleTab(index)"
          v-for="(item, index) in list"
          :class="{ active: index == currentIndex }"
          :key="item.id"
        >
          <div>{{ item.name }}</div>
        </div>
      </div>
      <!-- 导航内容 -->
      <ul class="box">
        <!-- 大屏广告 -->
        <div class="banner-c">
          <img :src="banner.banner_url" alt="" />
        </div>
        <!-- 小文字 -->
        <div class="title">
          <span>-</span>
          <span>{{banner.name}}分类</span>
          <span>-</span>
        </div>
        <router-link
          tag="li"
          :to="`/category/list?id=${item.id}`"
          v-for="item in childList"
          :key="item.id"
        >
          <img :src="item.wap_banner_url" alt="" />
          <p>{{ item.name }}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { indexaction, currentaction } from "@/api/category";
export default {
  data() {
    return {
      list: "",
      currentIndex: 0,
      childList: [],
      banner: [],
    };
  },
  methods: {
    //进入页面获取导航栏
    async init() {
      var res = await indexaction();
      this.list = res.categoryList;
      currentaction({
        id: this.list[this.currentIndex].id,
      }).then((result) => {
        // console.log(result);
        this.banner = result.data.currentOne;
        this.childList = result.data.currentOne.subList;
      });
    },
    // 点击切换导航栏内容
    toggleTab(index) {
      //  让当前点击下标切换分页
      this.currentIndex = index;
      // 通过分类的id来查询分类列表数据
      currentaction({
        id: this.list[index].id,
      }).then((result) => {
        this.banner = result.data.currentOne;
        this.childList = result.data.currentOne.subList;
      });
    },
    // 点击搜索
    search(){
    //    beforeEnter: (to, from, next) => {
    //    //保存跳转过来的页面路径
    //    to.query.enterPath = from.path;
    //    // console.log("我是/login路由的守卫函数")
    //    next()
    //  }
      this.$router.push(`/home/search`)
    }
  },
  created() {
    this.init();
  },
};
</script>

<style scoped lang="scss">
.categorys {
  // 顶部
  .category {
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 44px;
    padding: 0 15px;
    border-bottom: 0.5px solid #ededed;
    .search {
      width: 345px;
      height: 28px;
      background: #ededed;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0px;
      :nth-child(1) {
        background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
          50% no-repeat;
        background-size: 100%;
        width: 14px;
        height: 14px;
        margin-right: 0.13333rem;
      }
    }
  }
  .banner {
    display: flex;
    justify-content: space-between;
    // 导航栏
    .nav {
      width: 20%;
      height: 100%;
      padding: 0px 0px;
      div {
        width: 80px;
        height: 40px;
        padding: 0px;
        text-align: center;
        line-height: 50px;
      }
      .active {
        border-left: 1px solid #ab2b2b;
        color: #ab2b2b;
        font-size: 18px;
      }
    }
    .box {
      width: 80%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      align-content: flex-start;
      padding-right: 10px;
      li {
        width: 33%;
        img {
          width: 100%;
        }
      }
      .banner-c {
        img {
          width: 100%;
          height: 111px;
          margin-top: 10px;
        }
      }
      .title{
        width: 100%;
        text-align: center;
        padding: 25px 0;
      }
    }
  }
}
</style>
