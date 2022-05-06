<template>
  <div class="details">
    <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 轮播详情页 -->
    <van-swipe class="my-swipe" indicator-color="#000" :autoplay="3000">
      <van-swipe-item v-for="item in list" :key="item.id">
        <img class="img" :src="item.img_url" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播下包邮短语 -->
    <div class="swiper-b">
      <div>30天无忧退货</div>
      <div>48小时快速退款</div>
      <div>满88元免邮费</div>
    </div>
    <!-- 商品头部介绍 -->
    <div class="goods">
      <div class="goodc">
        <p class="name">{{ info.name }}</p>
        <p class="name-c">{{ info.goods_brief }}</p>
        <p class="name-d">￥{{ info.retail_price }}</p>
      </div>
    </div>
    <!-- 选择规格数量 -->
    <div @click="show = !show" class="section">
      <div class="section-c">请选择规格数量</div>
      <div class="section-b"></div> 
    </div>
    <!-- 选择规格数量弹窗 -->
    <van-action-sheet v-model="show" title="请选择规格数量">
      <div class="content">
        <div class="left">
          <img :src="info.primary_pic_url" alt="" />
        </div>
        <div class="right">
          <p class="prices">价格￥{{ info.retail_price }}</p>
          <p>请选择数量</p>
        </div>
      </div>
      <div class="shu">数量</div>
      <van-stepper v-model="value"
    /></van-action-sheet>
    <!-- 商品参数 -->
    <div class="attribute">
      <div class="head">商品参数</div>
      <div class="items" v-for="item in attribute" :key="item.id">
        <div class="items-c">{{ item.name }}</div>
        <div class="items-d">{{ item.value }}</div>
      </div>
    </div>
    <!-- 详情页图片展示 -->
    <div class="desc" v-html="info.goods_desc"></div>
    <!-- 商品常见问题 -->
    <div class="problem">
      <div class="problem-c">
        <div class="line"></div>
        <div class="title">常见问题</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="issue">
      <div class="item">
        <div v-for="item in issue" :key="item.id" class="question-box">
          <div class="spot"></div>
          <div class="question">{{ item.question }}</div>
          <div class="answer">{{ item.answer }}</div>
        </div>
      </div>
    </div>
    <!-- 大家都在看 -->
    <div class="problem">
      <div class="problem-c">
        <div class="line"></div>
        <div class="title">大家都在看</div>
        <div class="line"></div>
      </div>
    </div>
    <!-- 都在看展示 -->
    <div class="productList">
      <div v-for="item in productList" :key="item.id" class="sublsit" @click="xiangqing(item.id)">
        <img :src="item.list_pic_url" alt="" />
        <p>{{ item.name }}</p>
        <p>￥{{ item.retail_price }}</p>
      </div>
    </div>
    <!-- 底部加入购物车 -->
    <div class="footer">
      <!-- //收藏按钮 -->
      <!-- <div class="shou" @click="shou"> -->
      <van-icon
        name="star-o"
        class="shou"
        @click="shou"
        size="20"
        :color="infos.collected ? 'red' : ''"
      />
      <div></div>
      <!-- </div> -->
      <!-- 购物车按钮 -->
      <div class="car" @click="car">
        <div class="cars" >
          <span>{{ infos.allnumber }}</span>
          <div></div>
        </div>
      </div>
      <div class="buy">立即购买</div>
      <div class="add" @click="addlist">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { detailaction, addCart, addcollect } from "@/api/details";
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [],
      info: [],
      show: false,
      value: 1,
      attribute: [],
      issue: [],
      productList: [],
      infos: [],
    };
  },
  methods: {
    //  初始化页面数据
    init() {
      detailaction({
        openId: localStorage.getItem("openId"),
        id: this.$route.query.id,
      }).then((res) => {
        // console.log(res);
        //  收藏和购物车数量
        this.infos = res;
        //  轮播数据
        this.list = res.gallery;
        //头部文字
        this.info = res.info;
        //商品参数
        this.attribute = res.attribute;
        //常见问题
        this.issue = res.issue;
        // 都在看
        this.productList = res.productList;
      });
    },
    back() {
      this.$router.go(-1);
    },
    //  添加购物车
    addlist() {
      if (this.show == true) {
        //  console.log("状态",this.show);
        addCart({
          goodsId: this.$route.query.id,
          number: this.value,
          openId: localStorage.getItem("openId"),
        }).then((res) => {
          // Toast('添加购物车成功!');
          // console.log(res);
          this.init();
          if (res.data == "success") return Toast.success("添加购物车成功!");
        });
      } else {
        this.show = !this.show;
      }
    },
    // 点击收藏
    shou() {
      addcollect({
        goodsId: this.$route.query.id,
        openId: localStorage.getItem("openId"),
      }).then((res) => {
        // console.log(res);
        this.init();
      });
    },
     // 点击跳转详情页
    xiangqing(val) {
      this.$router.push("/details?id="+val);
      this.$router.go(0)
    },
    car(){
       this.$router.push("/cart");
    },
  },
  created() {
    this.init();
  },
};
</script>

<style scoped lang="scss">
.details {
  background: #f4f4f4;

  // 搜索框
  .nav {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
    width: 100%;
    height: 47px;
    margin-bottom: 3px;
    background-color: #fff;
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
  .img {
    width: 100%;
  }
  ::v-deep .van-swipe__indicator {
    margin-top: 100px;
    background-color: red;
  }
  ::v-deep .van-swipe {
    top: 46px;
  }
  //  <!-- 轮播下包邮短语 -->
  .swiper-b {
    width: 355px;
    height: 36.5px;
    margin: 46px auto 0;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/servicePolicyRed-518d32d74b.png)
        0 no-repeat;
      background-size: 5px;
      padding-left: 7.5px;
      display: flex;
      align-items: center;
      font-size: 12.5px;
      color: #666;
    }
  }
  //  <!-- 商品头部介绍 -->
  .goods {
    width: 100%;
    height: 153px;
    background: #fff;
    margin: 0 auto;
    border-bottom: 0.5px solid #f4f4f4;
    .goodc {
      height: 100%;
      .name {
        font-size: 20.5px;
        padding: 10px;
      }
      .name-c {
        margin-bottom: 12.5px;
        font-size: 12px;
        color: #999;
      }
      .name-d {
        margin-top: 5px;
        font-size: 17.5px;
        color: #b4282d;
      }
    }
  }
  // 选择规则参数
  .section {
    display: flex;
    justify-content: space-between;
    height: 54px;
    background: #fff;
    margin-bottom: 10px;
    padding: 0 10px;
    align-items: center;
    .section-b {
      width: 26px;
      height: 26px;
      background: url("../../img/you.png") no-repeat;
      background-size: 100% 100%;
    }
  }
  // 内容
  ::v-deep .van-popup {
    margin-bottom: 50px;
  }
  ::v-deep .van-action-sheet__content::-webkit-scrollbar {
    display: none;
  }
  .content {
    display: flex;
    margin-bottom: 17.5px;
    position: relative;
    padding: 15px;
    .left {
      height: 88.5px;
      width: 88.5px;
      margin-right: 15px;
      img {
        float: left;
        height: 88.5px;
        width: 88.5px;
      }
    }
    .right {
      // display: flex;
      //   flex: 1;
      //   align-items: flex-end;
      text-align: left;
      p {
        width: 100%;
        line-height: 22.5px;
      }
      .prices {
        color: #b4282d;
      }
    }
  }
  .shu {
    width: 100%;
    text-align: left;
    padding: 10px 10px 5px 15px;
  }
  .van-stepper {
    text-align: left;
    padding: 10px 10px 5px 15px;
  }
  // 商品参数
  .attribute {
    padding: 10px 15px;
    background: #fff;
    margin-bottom: 10px;
    .head {
      font-size: 19px;
      padding: 10px 0;
      text-align: left;
    }
    .items {
      display: flex;
      background: #f7f7f7;
      padding: 10px 0;
      margin: 10px;
      .items-c {
        width: 67px;
        font-size: 12.5px;
        color: #999;
      }
      .item-d {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  // 商品详情展示
  .desc {
    display: block;
    ::v-deep p {
      margin: 0;
      padding: 0;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  // 单独样式服用
  .problem-c {
    padding: 17.5px 0;
    background: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .line {
      display: inline-block;
      height: 1px;
      width: 50px;
      background: #ccc;
    }
  }
  //商品详情展示
  //   .problem{
  //     // margin-bottom: 55px;
  // }
  .issue {
    padding: 0 15px;
    background: #fff;
    margin-bottom: 55px;
  }
  .item {
    padding-bottom: 12.5px;
  }
  .question-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .spot {
      height: 4px;
      width: 4px;
      background: #b4282d;
      border-radius: 50%;
      margin-top: 5.5px;
    }
    .question {
      line-height: 15px;
      padding-left: 4px;
      display: block;
      font-size: 13px;
      padding-bottom: 7.5px;
      padding-top: 15px;
      color: #303030;
    }
    .answer {
      line-height: 20px;
      padding-left: 8px;
      font-size: 13px;
      color: #787878;
      text-align: left;
    }
  }
  // 都在看
  .productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 364px;
    margin: 0 auto;
    margin-bottom: 50px;
    .sublsit {
      width: 180px;
      background: #fff;
      margin-bottom: 5px;
      padding-bottom: 5px;
      p {
        margin-bottom: 2.5px;
        text-indent: 1em;
      }
      img {
        display: block;
        width: 151px;
        height: 151px;
        margin: 0 auto;
      }
      :nth-child(2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 98%;
      }
      :nth-child(3) {
        text-align: left;
        color: #9c3232;
        padding-left: 20px;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    display: flex;
    background: #fff;
    z-index: 99999;
    .shou {
      height: 50px;
      width: 81px;
      border: 0.5px solid #f4f4f4;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        display: block;
        height: 22px;
        width: 22px;
        background: url("../../img/shou.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .car {
      height: 50px;
      width: 81px;
      border: 0.5px solid #f4f4f4;
      display: flex;
      align-items: center;
      justify-content: center;
      .cars {
        position: relative;
        height: 30px;
        width: 30px;
        span {
          height: 14px;
          width: 14px;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 10;
          background: #b4282d;
          text-align: center;
          font-size: 9px;
          color: #fff;
          line-height: 14px;
          border-radius: 50%;
        }
        div {
          display: block;
          height: 22px;
          width: 22px;
          position: absolute;
          top: 5px;
          left: 0;
          background: url("../../img/car.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .buy {
      height: 50px;
      line-height: 48px;
      flex: 1;
      text-align: center;
      color: #333;
      border-top: 0.5px solid #f4f4f4;
      border-bottom: 0.5px solid #f4f4f4;
    }
    .add {
      border: 0.5px solid #b4282d;
      background: #b4282d;
      float: left;
      height: 50px;
      line-height: 48px;
      flex: 1;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
