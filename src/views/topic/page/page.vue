<template>
  <div class="page">
    <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 详情页渲染 -->
    <div class="box">
      <div v-html="list" class="img"></div>
    </div>
    <!-- 专题推荐 -->
    <div class="list">
      <div class="title">专题推荐</div>
      <div class="item" v-for="item in page" :key="item.id">
        <img :src="item.scene_pic_url" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { detailaction } from "@/api/topic";
export default {
  data() {
    return {
      list: [],
      page: [],
    };
  },
  methods: {
    back() {
      // this.$router.push("/topic");
       //从哪里跳转到页面,点击后再跳转回去即可
     const enterPath = this.$route.query.enterPath
     //跳转  保存的路径在router/index.js/路由表内
      //this.$router.push(enterPath);
       this.$router.replace(enterPath);
    },
    init() {
      var id = this.$route.query.id;
      detailaction({
        id: id,
      }).then((res) => {
        this.list = res.data.content;
        this.page = res.recommendList;
          console.log(res);
      });
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
html{
  background-color: #f4f4f4;

}
.page {
  background-color: #f4f4f4;
}
// 搜索框
.nav {
  width: 100%;
  height: 47px;
  margin-bottom: 3px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  .nav-v {
    display: inline-block;
    width: 40%;
    text-align: left;
    line-height: 47px;
    font-size: 14px;
    color: #1989fa;
  }
  .logo {
    display: inline-block;
    width: 50%;
    text-align: left;
    line-height: 30px;
    font-weight: 500;
    font-size: 16px;
  }
}
.box {
  width: 100%;
  ::v-deep .img {
    img {
      display: block;
      width: 100%;
    }
  }
}
.list {
  width: 345px;
  height: auto;
  margin: 0 15px;
  .title {
    text-align: center;
    background: #f4f4f4;
    font-size: 15px;
    color: #999;
    padding: 15px 0;
  }
  .item {
    width: 100%;
    padding: 12px 12px 15px 12px;
    margin-bottom: 15px;
    background-color: #fff;
    box-sizing: border-box;
    img {
      height: 139px;
      width: 321px;
      display: block;
    }
  }
}
</style>
