<template>
  <div class="make">
     <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 展示 -->
   <van-list
  v-model="loading"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
  @load="onLoad"
>
<ul>
  <li v-for="item in list" :key="item.id" class="list" @click="sublsit(item.id)">
    <img :src="item.app_list_pic_url" alt="">
    <div class="info">
    <span class="name">{{item.name}}</span>
    <span class="dot">|</span>
    <span class="price">{{item.floor_price}}元起</span>

    </div>
  </li>
</ul>
</van-list>
  </div>
</template>

<script>
import { listactions } from "@/api/topic/index.js"
export default {
   data(){
    return{
        start:1,
         list: [],
      error: false,
      loading: false,
      finished:false
   }
   },
   methods:{
     init(){
       listactions({
        page: this.start,
      }).then((res) => {
        // console.log(res);
       this.list.push(...res.data);
       this.loading = false;
         if (this.start >= res.total) {
            //  console.log(this.start);
          this.finished = false;
          this.loading = false;

        }
      });
     },
     onLoad() {
      // 当列表底部与可视区域的距离小于offset时
      this.start ++;
      this.init();
    },
    back(){
      this.$router.go(-1)
    },
    sublsit(val){
       this.$router.push({
            path:"/home/brand",//跳转路由
            query:{//参数对象
              id:val
             }
             })
    }
   },
   created(){
      this.init();
   }
}
</script>

<style scoped lang="scss">
 // 搜索框
  .nav{
    position:fixed;
    top:0px;
    left:0px;
    z-index: 99999;
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
.list{
  width: 100%;
  height: 208px;
  position: relative;
  margin-bottom: 2px;
  box-sizing: border-box;
  img{
    width: 100%;
    height: 100%;
  }
  .info{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%,);
  .name{
    color: #fff;
    font-size: 17.5px;
    font-weight: 700;
  }
  .dot{
      padding: 0 2.5px;
      color: #fff;
      font-size:17px;
      font-weight: 700;
  }
  .price{
    color: #fff;
    font-size: 17.5px;
    font-weight: 700;
  }
  }
}
</style>