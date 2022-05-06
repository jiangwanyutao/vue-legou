<template>
  <!-- 提交页面 -->
  <div class="order">
    <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 地址栏 -->
    <div class="address" @click="add">
      <div class="item">
        <div class="list">
          <div class="addresslist">
            <div class="name">
              <p>{{ item.name }}</p>
              <div class="moren" v-show="item.is_default == 1 ? true : false">
                默认
              </div>
            </div>
            <div class="info">
              <p>{{ item.mobile }}</p>
              <p>{{ item.address }}</p>
            </div>
            <div class="icons"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品合计 -->
    <div class="shop">
      <div class="shop-c">
        <div>商品合计</div>
        <div>￥{{ price }}</div>
      </div>
      <div class="shop-d">
        <div>运费</div>
        <div>免运费</div>
      </div>
      <div class="shop-e">
        <div>优惠券</div>
        <div>暂无</div>
      </div>
    </div>
    <!-- 商品渲染 -->
    <div
      class="list"
      v-for="item in orderInfo"
      :key="item.id"
      @click="xiangqing(item.goods_id)"
    >
      <div class="img">
        <img :src="item.list_pic_url" alt="" />
      </div>
      <div class="pars">
        <div>{{ item.goods_name }}</div>
        <div>￥{{ item.retail_price }}</div>
      </div>
      <div class="number">X{{ item.number }}</div>
    </div>
    <!-- 底部提交 -->
    <div class="footer">
      <div class="footer-c">
        <div class="price">实付:￥{{ price }}</div>
        <div class="add" @click="submit">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { detailAction } from "@/api/order/index.js";
export default {
  data() {
    return {
      price: "",
      orderInfo: [],
      address: [],
      item:[],
    };
  },
  methods: {
    // 初始化数据
    init() {
      // 接受传过来的计算钱
      //  this.price= this.$store.state.totals
      detailAction({
        openId: localStorage.getItem("openId"),
        addressId: "",
      }).then((res) => {
        // console.log("tijaio",res);
        this.price = res.allPrise;
        // this.item = res.address;
        // 商品列表
        this.orderInfo = res.goodsList;
        var add = JSON.parse(localStorage.getItem("address"));
        // console.log("address", add);
        if (this.item) {
          this.item = add;
        } else {
          this.item = res.address;
        }
      });
    },
    // 点击返回
    back() {
      this.$router.push("/cart");
    },
    // 跳转
    add() {
      this.$router.push("/address");
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
    //点击提交
    submit() {
      Toast.fail("暂未开发支付接口哦");
    },
  },
  computed: {},
  created() {
    this.init();
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
// 搜索框
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 47px;
  margin-bottom: 3px;
  background: #fff;
  z-index: 99;
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
.footer {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background-color: #fff;
  z-index: 99999;
  .footer-c {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .price {
      color: #b4282d;
      font-size: 18px;
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
    }
    .add {
      width: 100px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 14.5px;
      background: #b4282d;
      color: #fff;
    }
  }
}
.address {
  background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png)
    0 0 repeat-x #fff;
  padding: 25px 0 15px 0;
  margin-bottom: 10px;
  item {
    padding: 0 10px;
  }
  .addresslist {
    width: 100%;
    position: relative;
    transition: all 0.3s ease;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .name {
      padding: 0px 20px 0px 20px;
    }
    .moren {
      width: 30px;
      height: 15px;
      border: 1px solid #b4282d;
      text-align: center;
      line-height: 15px;
      color: #b4282d;
      margin: 5px auto 0 auto;
    }
    .info {
      padding-top: 10px;
      text-align: left;
    }
    .icons {
      width: 25px;
      height: 25px;
      margin: 0 25px;
      margin-left: auto;
      background: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-596d39df1e.png)
        no-repeat;
      background-size: 100% 100%;
    }
  }
}
.shop {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .shop-c {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px;
    border-bottom: 1px solid #d9d9d9;
  }
  .shop-d {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px;
    border-bottom: 1px solid #d9d9d9;
  }
  .shop-e {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px;
    border-bottom: 1px solid #d9d9d9;
  }
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .img {
    width: 72px;
    height: 72px;
    // padding: 20px 0px 20px 20px;
    background: #f4f4f4;
  }
  img {
    flex: 1;
    display: block;
    width: 100%;
    height: 100%;
  }
  .pars {
    display: flex;
    text-align: left;
    flex-direction: column;
    flex: 1;
    padding-left: 5px;
  }
  .number {
    font-size: 15px;
    // padding: 20px;
  }
}
.order {
  margin-bottom: 50px;
}
</style>
