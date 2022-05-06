<template>
    <div class="cart">
 <!-- 轮播下包邮短语 -->
    <div class="swiper-b">
      <div>30天无忧退货</div>
      <div>48小时快速退款</div>
      <div>满88元免邮费</div>
    </div>
    <!-- 商品列表 -->
   <van-swipe-cell v-for="item in list" :key="item.id">
   <van-checkbox v-model="item.isSelected"> </van-checkbox>
  <van-card
    :num=item.number
    :title=item.goods_name
    class="goods-card"
    :thumb=item.list_pic_url
  >
   <template #price>
    <div plain type="danger">￥{{item.retail_price}}</div>
  </template>
    </van-card>
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" @click="remove(item.id)"/>
  </template>
</van-swipe-cell>
<!-- 底部提交 -->
<div class="footer">
 <van-checkbox class="van-check" v-model="isAllSelected">全选</van-checkbox>
 <div class="footer-c">

 <div class="price">￥{{totals}}</div>
 <div class="add" @click="addlist">提交订单</div>
 </div>
</div>
    </div>
</template>

<script>
import {cartList,deleteAction,submitAction} from "@/api/cart/index.js"
import { Dialog } from 'vant';
import { Toast } from "vant";
export default {
    data() {
        return {
           checked:false,
           list:[]
        };
    },
    methods: {
       // 初始化
          init(){
            cartList({
                openId:localStorage.getItem("openId")
            })
            .then(res =>{
                // console.log(res)
                // 手动给数据添加一条状态用来判断全选
                res.data.forEach(element => {
                    element.isSelected = false;
                });
                this.list = res.data;
            })
        },
        //点击删除
        remove(val){
          Dialog.confirm({
                    title: '删除商品',
                    message: '确定删除吗?不在看看了吗?',
                  })
                    .then(() => {
                       deleteAction({
                              id:val
                            }).then(res=>{
                                // console.log(res);
                                this.init()
                            })
                    })
                    .catch(() => {
                        console.log("删除失败了");
                    });
        },
         // 提交订单
        addlist(){    
          if(this.list.findIndex(el=>el.isSelected == true)==-1){
              return Toast.fail("亲请先选择商品哦");
          }else{
            submitAction({
                allPrise:this.totals,
                goodsId:this.list.filter(ele =>ele.isSelected).map(ele => ele.goods_id).join(","),
                openId:localStorage.getItem("openId")
            })
            .then(res =>{
                // console.log(res)
                this.$store.commit("uptotals",this.totals)
                this.$router.push("/order")
            })
            }
              }
    },
    computed: {
      // 判断是否全选
    isAllSelected:{
            get(){
              // 监听全选按钮  遍历list中的isselected的状态判断是都为为true
                // return this.list.every(ele =>ele.isSelected == true)
                if(this.list.length==""){
                  return false
                }else{
                  return this.list.every(ele =>ele.isSelected == true)
                }
            },
            set(val){
                // console.log(val)
                     this.list.forEach(ele =>{ele.isSelected = val})
            }
        },
        // 计算价格
          totals(){
            return this.list.reduce((total,current)=>{ // total 上一次循环计算过的结果 current当次循环的数据
                if(current.isSelected){
                    return total + current.retail_price * current.number
                }else{
                    return total
                }
            },0)
        },
    },
    created() {
           this.init()
    },
    mounted() {  
    },
     components: {
    [Dialog.Component.name]: Dialog.Component,
  },
};
</script>

<style scoped lang="scss">
.cart{
  width: 100%;
  margin-bottom:100px;
    //  <!-- 轮播下包邮短语 -->
  .swiper-b {
    width: 100%;
    height: 36.5px;
    // margin: 46px auto 0;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: space-around;
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


  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
  ::v-deep .van-checkbox{
    width: 100%;
  }
  ::v-deep .van-swipe-cell__wrapper{
     display: flex;
  }
  ::v-deep .van-card__header{
    display: flex;
    width: 310px;
  }
  ::v-deep .van-checkbox{
    justify-content: flex-end
  }
  ::v-deep .van-card__content{
    align-items: baseline;
    justify-content: space-evenly;
  }
  ::v-deep .van-card__content{
    position: relative;
  }
  ::v-deep .van-card__num{
    position: absolute;
    top: 50%;
    left: 85%;
    font-size: 14px;
    color:#333
  }
  ::v-deep .van-check{
    justify-content: flex-start;
    width: 30%;
    padding-left:10px;
  }
  // ::v-deep .van-submit-bar{
  //   bottom: 50px;
  // }
.footer{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left:0px;
  bottom:50px;
  background-color: #fff;
  // z-index: 99999;
  .footer-c{
    display: flex;
    width: 150px;
    justify-content: space-around;
    .price{
          color: #b4282d;
          padding-right: 20px;
          height: 50px;
          line-height: 50px;
         }
         .add{
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
}
</style>
