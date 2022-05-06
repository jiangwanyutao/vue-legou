<template>
  <div class="home">
    <div class="sou">
      <div id="box"></div>
      <router-link to="/home/city" tag="span">{{ cityText }}</router-link>

      <van-search placeholder="点击搜索商品" @click="goSearch" />
    </div>
    <van-swipe class="my-swipe" indicator-color="#000" :autoplay="3000">
      <van-swipe-item v-for="item in list.banner" :key="item.id">
        <img class="img" :src="item.image_url" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播下导航 -->
    <div class="channel">
      <div v-for="item in list.channel" :key="item.id" @click="git(item.id)">
        <img :src="item.icon_url" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 品牌制造商直供 -->
    <div class="head" @click="make">品牌制造商直供</div>
    <!-- 四大制造商 -->
    <div class="contend">
      <div
        v-for="item in list.brandList"
        :key="item.id"
        class="cont"
        @click="brand(item.id)"
      >
        <div class="tend">
          <p>{{ item.name }}</p>
          <p>{{ item.floor_price }}元起</p>
        </div>
        <img :src="item.new_pic_url" alt="" />
      </div>
    </div>
    <!-- 新品首发 -->
    <!-- 动态路由跳转 -->
    <router-link to="/home/newgoods/1">
      <div class="newgoods">
        <div class="top">
          <p>新品首发</p>
          <p>查看全部</p>
        </div>
      </div>
    </router-link>
    <!-- 新品首发展示 -->
    <div class="list">
      <ul>
        <li
          v-for="item in list.newGoods"
          :key="item.id"
          class="lists"
          @click="xiangqing(item.id)"
        >
          <img :src="item.list_pic_url" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.goods_brief }}</p>
          <p>￥{{ item.retail_price }}</p>
        </li>
      </ul>
    </div>
    <!-- 人气好物 -->
    <!-- 动态路由跳转 -->
    <router-link to="/home/newgoods/2">
      <div class="hotgoods">
        <div class="hotgoods-top">
          <p>
            人气推荐
            <span></span>
            好物精选
          </p>
          <p>查看全部</p>
        </div>
      </div>
    </router-link>
    <!-- 人气好物展示 -->
    <div class="list">
      <ul>
        <li
          v-for="item in list.hotGoods"
          :key="item.id"
          class="lists"
          @click="xiangqing(item.id)"
        >
          <img :src="item.list_pic_url" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.goods_brief }}</p>
          <p>￥{{ item.retail_price }}</p>
        </li>
      </ul>
    </div>
    <!-- 专题精选 -->
    <div class="topicList">
      <div class="topicList-top">
        专题精选
        <span class="icon"></span>
      </div>
      <!-- 内容展示 -->
      <div class="list">
        <ul>
          <li
            v-for="item in list.topicList"
            :key="item.id"
            class="lis"
            @click="details(item.id)"
          >
            <img :src="item.item_pic_url" alt="" />
            <div class="bot">
              <div>
                <p>{{ item.title }}</p>
                <p>{{ item.subtitle }}</p>
              </div>
              <div>{{ item.price_info }}元起</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 无限套娃 -->
    <div class="newcategory">
      <div class="lists" v-for="item in list.newCategoryList" :key="item.id">
        <div class="lists-c">{{ item.name }}好物</div>
        <div class="sublist">
          <div
            v-for="abs in item.goodsList"
            :key="abs.id"
            @click="xiangqing(abs.id)"
          >
            <img :src="abs.list_pic_url" alt="" />
            <p>{{ abs.name }}</p>
            <p>￥{{ abs.retail_price }}</p>
          </div>
          <div class="last" @click="navtab(item.id)">
            <p>{{ item.name }}好物</p>
            <span class="icons"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { index } from "@/api/home";
export default {
  data() {
    return {
      list: {},
      cityText: "",
    };
  },
  methods: {
    init() {
      index().then((res) => {
        // console.log(res);
        this.list = res;
      });
    },
    goSearch() {
      this.$router.push(`/home/search`);
    },
    // 点击导航跳转对应的页面
    git(val) {
      this.$router.push({
        path: "/category/list", //跳转路由
        query: {
          //参数对象
          id: val,
        },
      });
    },
    //点击跳转供应商
    brand(val) {
      this.$router.push({
        path: "/home/brand", //跳转路由
        query: {
          //参数对象
          id: val,
        },
      });
    },
    // 点击跳转详情页
    xiangqing(val) {
      this.$router.push({
        path: "/details", //跳转路由
        query: {
          //参数对象
          id: val,
        },
      });
    },
    //点击详情
    details(val) {
      this.$router.push({
        path: "/topic/page/", //跳转路由
        query: {
          //参数对象
          id: val,
        },
      });
    },
    // 点击跳转导航栏
    navtab(val) {
      this.$router.push({
        path: "/category/list", //跳转路由
        query: {
          //参数对象
          id: val,
        },
      });
    },
    // 品牌供应商直供
    make() {
      this.$router.push("/home/brand/make");
    },
    city(){
          var _this = this;
    // vuex 中已经有传递的数据 判断点击主页是否先生成城市还是使用vuex数据

    // 通过判断vuex中的数据中是否有name属性 判断是否为空
    if (this.$store.state.cityInfo.name) {
      // 如果不为空就使用当前的vuex中存储的城市名称渲染
      _this.cityText = this.$store.state.cityInfo.name;
      var cityInfo = this.$store.state.cityInfo;
      //注意如果用户输入了不是地名将搜索不到经纬度会报错
      var map = new AMap.Map("box", {
        zoom: 18,
        center: [cityInfo.location.lng, cityInfo.location.lat], //定位城市位置 经纬度
      });
      var marker = new AMap.Marker({
        position: [cityInfo.location.lng, cityInfo.location.lat], //标记点位置 经纬度
      });
      map.add(marker); //添加到地图
      return;
    }
    AMap.plugin("AMap.CitySearch", function () {
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function (status, result) {
        if (status === "complete" && result.info === "OK") {
          // 查询成功，result即为当前所在城市信息
          // console.log(result);
          _this.cityText = result.city;
        }
      });
    });
    }
  },
  created() {
    this.init();
  },
   watch: {
    $route(to, from) {
      // 对路由变化作出响应...
     this.city()
    }
  },
  mounted() {
    this.city()
    // var _this = this;
    // // vuex 中已经有传递的数据 判断点击主页是否先生成城市还是使用vuex数据

    // // 通过判断vuex中的数据中是否有name属性 判断是否为空
    // if (this.$store.state.cityInfo.name) {
    //   // 如果不为空就使用当前的vuex中存储的城市名称渲染
    //   _this.cityText = this.$store.state.cityInfo.name;
    //   var cityInfo = this.$store.state.cityInfo;
    //   //注意如果用户输入了不是地名将搜索不到经纬度会报错
    //   var map = new AMap.Map("box", {
    //     zoom: 18,
    //     center: [cityInfo.location.lng, cityInfo.location.lat], //定位城市位置 经纬度
    //   });
    //   var marker = new AMap.Marker({
    //     position: [cityInfo.location.lng, cityInfo.location.lat], //标记点位置 经纬度
    //   });
    //   map.add(marker); //添加到地图
    //   return;
    // }
    // AMap.plugin("AMap.CitySearch", function () {
    //   var citySearch = new AMap.CitySearch();
    //   citySearch.getLocalCity(function (status, result) {
    //     if (status === "complete" && result.info === "OK") {
    //       // 查询成功，result即为当前所在城市信息
    //       // console.log(result);
    //       _this.cityText = result.city;
    //     }
    //   });
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
#box {
  width: 0px;
  height: 0px;
  
}
</style>
