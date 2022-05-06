<template>
    <div class="collectlist">
  <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 我的收藏 -->
    <div class="title">我的收藏</div>
    <!-- 收藏展示 -->
    <div class="sublist">
        <div class="sun" v-for="item in list" :key="item.id" @click="xiangqing(item.id)">
            <img :src="item.list_pic_url" alt="">
            <p class="name">{{item.name}}</p>
            <p class="price">￥{{item.retail_price}}</p>
        </div>
    </div>
    </div>
</template>

<script>
import { listAction } from "@/api/mine/index.js"
export default {
    data() {
        return {
         list:[]
        };
    },
    methods: {
         
   back(){
       this.$router.go(-1)
   },
   init(){
       listAction({
           openId:localStorage.getItem("openId")
       }).then(res=>{
            //  console.log(res);
             this.list=res.collectGoodsList
       })
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
    computed: {

    },
    created() {
     this.init()
    },
    mounted() {

    },
};
</script>

<style scoped lang="scss">
.collectlist{
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
//   我的收藏
.title{
    padding: 10px 0;
    text-align: center;
    background: #fff;
    margin-bottom: 2.5px;
    font-size: 18px;
    font-weight: 700;
}
// 收藏展示
.sublist{
    display: flex;
    flex-wrap: wrap;
   justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 5px;
    box-sizing: border-box;
    .sun{
        width:180px ;
        background: #fff;
        margin-bottom: 5px;
        padding-bottom: 5px;
        img{
            display: block;
            width: 150px;
            height: 150px;
            margin: 0 auto;
        }
        .name{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 98%;
        }
        .price{
              color: #9c3232;
              text-align: left;
              padding-left:25px
        }
    }
}
</style>
