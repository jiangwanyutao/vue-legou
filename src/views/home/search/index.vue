<template>
  <div class="search">
    <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 搜索框 -->
    <van-search
      show-action
      placeholder="商品搜索"
      v-model.trim="iptVal"
      @cancel="onCancel"
      @input="iptEvents"
    />
    <!-- 历史记录 -->
    <van-row
      type="flex"
      justify="space-start"
      class="default"
      v-if="current == 'default'"
    >
      <div class="sous">
        <div>历史记录</div>
        <div @click="shanchu"></div>
      </div>
      <ul>
        <li
          v-for="item in list.historyData"
          :key="item.id"
          @click="showGoods(item.keyword)"
        >
          {{ item.keyword }}
        </li>
      </ul>
    </van-row>
    <!-- 热门搜索 -->
    <van-row type="flex" class="default" v-if="current == 'default'">
      <div class="soust">
        <div>热门搜索</div>
      </div>
      <ul>
        <li
          v-for="item in list.hotKeywordList"
          :key="item.id"
          @click="showGoods(item.keyword)"
        >
          {{ item.keyword }}
        </li>
      </ul>
    </van-row>

    <!-- 搜索展示提示词 -->
    <div class="notice" v-else-if="current == 'notice'">
      <ul>
        <li
          v-for="item in noticeList"
          :key="item.id"
          @click="showGoods(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- 点击跳转展示页 -->
    <div class="goods" v-else>
      <div class="goods-c">
        <div>综合</div>
        <div id="price"  @click="sortPrice">
          <div :class="`${current == 'goods' ? '' : 'on'}`">价格</div>
          <div class="iconBox">
            <van-icon :color="current == 'up' ? 'red' : ''" name="arrow-up" />
            <van-icon
              :color="current == 'down' ? 'red' : ''"
              name="arrow-down"
            />
          </div>
        </div>
        <div>分类</div>
      </div>
      <div class="good">
        <div v-for="item in goodsList" :key="item.id" class="good-v" @click="xiangqing(item.id)">
          <img :src="item.list_pic_url" alt="" />
          <p>{{ item.name }}</p>
          <p>￥{{ item.retail_price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  indexaction,
  helperaction,
  addhistoryaction,
  clearhistoryAction,
} from "@/api/home/search";
export default {
  data() {
    return {
      list: [],
      current: "default",
      iptVal: "",
      noticeList: [],
      goodsList: [],
      order: "",
      keyword: [],
    };
  },
  methods: {
    back() {
      // this.$router.push("/topic");
       //从哪里跳转到页面,点击后再跳转回去即可
     const enterPath = this.$route.query.enterPath
     //跳转  保存的路径在router/index.js/路由表内
            this.$router.push(`/home`);
      //  this.$router.go(-1)
    },
    onCancel() {
      this.$router.push(`/home`);
    },
    init() {
      // 关键词和搜索历史接口
      indexaction({
        openId: localStorage.getItem("openId"),
      }).then((res) => {
        this.list = res;
        // console.log(res);
      });
    },
    // 输入框提示词
    iptEvents() {
      if (this.iptVal) {
        this.current = "notice";
        helperaction({
          keyword: this.iptVal,
          order: "",
        }).then((res) => {
          // console.log(res);
          this.noticeList = res.keywords;
        });
      } else {
        this.current = "default";
      }
    },
    //提示词点击展示
    showGoods(val) {
      this.current = "goods";
      // 搜索的关键词添加到数据库
      addhistoryaction({
        keyword: val,
        openId: localStorage.getItem("openId"),
      });
      //搜索提示接口
      helperaction({
        keyword: val,
        order: "",
      }).then((res) => {
        // console.log(res);
        this.goodsList = res.keywords;
        this.init();
      });
      this.keyword = val;
    },
    // 价格筛选展示
    sortPrice() {
      if (this.current == "default") {
        this.current = "up";
        this.order = "asc";
      } else if (this.current == "up") {
        this.current = "down";
        this.order = "desc";
      } else {
        this.current = "up";
        this.order = "asc";
      }
      // 点击筛选价格
      helperaction({
        keyword: this.keyword,
        order: this.order,
      }).then((res) => {
        // console.log(res);
        this.goodsList = res.keywords;
      });
    },
    //点击删除
    shanchu() {
      clearhistoryAction({
        openId: localStorage.getItem("openId"),
      }).then((res) => {
        // console.log(res);
        this.init();
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
  },
  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
