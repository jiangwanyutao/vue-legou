<template>
  <div>
    <div class="info">
      <div>
        <img src="../../img/avger.jpg" alt="" />
      </div>
      <div class="infoname">
        <p>{{address.nickName}}</p>
      </div>
    </div>
    <van-grid :column-num="3" border:true>
      <van-grid-item text="我的订单" />
      <van-grid-item text="优惠券" />
      <van-grid-item text="我的足迹" />
      <van-grid-item text="我的收藏"  to="/mine/collectlist"/>
      <van-grid-item text="地址管理" to="/address"/>
      <van-grid-item text="联系客服" />
      <van-grid-item text="帮助中心" />
      <van-grid-item text="意见反馈" to="/mine/opinion"/>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address:{}
    };
  },
  methods:{
     init(){
     var address = JSON.parse(localStorage.getItem("userInfo"))
     this.address=address
    //  console.log(address);
     }
  },
  created(){
  
  },
  mounted(){
    this.init()
  }
};
</script>

<style scoped lang="scss">
.info {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  background: #333;
  padding: 0 15px;
  box-sizing: border-box;
  img {
    height: 73px;
    width: 73px;
    border-radius: 50%;
  }
  .infoname{
    padding-left: 10px;
    color: #fff;
    font-size: 16px;
  }
}
::v-deep .van-grid-item{
  box-sizing: border-box;
  height: 70px;
  border: 1px soild #333;
     color: black;

}
.van-grid-item__content{
  color: black;
}
::v-deep ::after {
    border-width: 2px;
}
::v-deep .van-grid-item__text{
  color: black;
}
</style>
