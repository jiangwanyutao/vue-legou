<template>
  <div id="brand">
    <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 制造商图片 -->
    <div class="banner">
      <img :src="list.pic_url" alt="">
      <div class="info">
         <span>{{list.name}}</span>
      </div>
    </div>
    <div class="info-c">
      {{list.simple_desc}}
    </div>
    <!-- 商品 -->
    <div class="sortlist">
      <div v-for="item in page" :key="item.id" class="item">
        <img :src="item.list_pic_url" alt="">
        <p class="name">{{item.name}}</p>
        <p class="price">￥{{item.retail_price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { detailaction,listaction } from "@/api/home";
export default {
  data() {
    return {
      list:[],
      page:[]
    };
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    init(){
      detailaction({
        id:this.$route.query.id
      }).then(res=>{
          // console.log(res);
          this.list = res.data
          this.page=res.goodsList
            // console.log(this.list.name);
      })
      // 获取分页内的点击数据
      listaction({
        page:1
      }).then(res=>{
          // console.log("1212",res);
      })
    }
  },
  created(){
    this.init()
      // console.log(this.$route.query.id);
  }
};
</script>

<style scoped lang="scss">
#brand{
  background: #f4f4f4;
}
// 搜索框
.nav {
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
.banner{
    width: 100%;
    height: 145px;
    position: relative;
    .info{
       position: absolute;
       top: 50%;
       left: 50%;
         transform: translate3d(-50%,-50%,0);
         text-align: center;
         span{
          font-size: 19px;
          color: #fff;
          border-bottom: 2.5px solid #fff;
          padding: 2.5px;
         }
    }
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
}
.info-c{
  background: #fff;
  padding: 21px 16px;
  font-size: 15px;
  color: #666;
  text-align: center;
}
.sortlist{
    margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item{
    width: 186px;
  margin-bottom: 2.5px;
  text-align: center;
  background: #fff;
  padding:7.5px 0;
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
  font-size: 12px ;
       }
       .price{
         text-align: center;
  font-size:15px;
  color: #b4282d;
       }
  }
  }

</style>
