<template>
  <div class="list">
    <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 顶部导航栏 -->
    <van-tabs @click="lists" v-model="active">
      <van-tab
        :name="item.name"
        :title="item.name"
        v-for="item in navData"
        :key="item.id"
      ></van-tab>
    </van-tabs>
    <!-- 渲染页面     -->
    <div class="info">
      <p class="info-c">{{ infos.name }}</p>
      <p class="info-d">{{ infos.front_desc }}</p>
    </div>

    <ul class="box">
      <li v-for="item in list" :key="item.id" @click="xiangqing(item.id)">
        <img :src="item.list_pic_url" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">￥{{ item.retail_price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { categoryNav, goodsList } from "@/api/category/list";
export default {
  data() {
    return {
      list: [],
      active: "",
      navData: [],
      infos: [],
    };
  },
  methods: {
    // 根据点击的id来获取页面导航初始值
    init() {
      categoryNav({
        id: this.$route.query.id,
      }).then((res) => {
        this.active = res.currentNav.name;
        this.navData = res.navData;
        // console.log(this.active, this.navData);
      });
      //获取当前id点击的列表 渲染初始页面
      goodsList({
        categoryId: this.$route.query.id,
      }).then((res) => {
        // console.log(res);
        this.list = res.data;
        this.infos = res.currentNav;
      });
    },
    back() {
      //  this.$router.push("/category");
       //从哪里跳转到页面,点击后再跳转回去即可
    //  const enterPath = this.$route.query.enterPath
    //  跳转  保存的路径在router/index.js/路由表内
      // this.$router.push(enterPath);
      //  this.$router.replace(enterPath);
      this.$router.go(-1);
    },
    // 通过点击导航栏获取当前的id来判断 渲染页面
    lists(val) {
      // console.log(val);
      var id = this.navData.find((ele) => ele.name==val).id;
      goodsList({
        categoryId: id,
      }).then((res) => {
        // console.log("点击导航栏",res);
        this.infos = res.currentNav;
        // console.log(this.infos);
        this.list = res.data;
      });
    },
    // 跳转详情页
     xiangqing(val) {
      this.$router.push({
        path: "/details", //跳转路由
        query: {
          //参数对象
          id: val,
        },
      });
    },
  },
  created() {
     this.init();
  },
  mounted() {
  },
};
</script>

<style scoped lang="scss">
.list{
  background-color: #f4f4f4;
}
  // 搜索框
  .nav{
    width: 100%;
    height: 47px;
    margin-bottom: 3px;
    background-color: #fff;
    .nav-v{
      display: inline-block;
      width: 40%;
      text-align: left;
      line-height: 47px;
      font-size: 14px;
      color: #1989fa;
    }
    .logo{
      display: inline-block;
      width: 50%;
      text-align: left;
      line-height: 30px;
      font-weight: 500;
      font-size: 16px;
    }
  }
  .box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    li{
        width: 49%;
        background: #ccc;
        width: 186px;
        margin-bottom: 2.5px;
        text-align: center;
        background: #fff;
        padding: 7.5px 0;
        img{
            display: block;
            width: 151px;
            height: 151px;
            margin: 0 auto;
        }
        .name{
          margin: 7.5px 0 11px 0;
          text-align: center;
          padding: 0 10px;
          font-size: 12px;
        }
        .price{
            text-align: center;
            font-size: 15px;
            color: #b4282d;
}
        }
    }

.info{
  text-align: center;
  background: #fff;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 2.5px;
  .info-c{
  margin-bottom: 9px;
  font-size: 15px;
  color: #333;
  }
  .info-d{
  display: block;
  height: 12px;
  font-size: 12px;
  color: #999;
  }
}
</style>
