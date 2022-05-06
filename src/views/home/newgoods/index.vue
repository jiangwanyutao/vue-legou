<template>
    <div class="newgoods">
         <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <div class="banner">
      <img src="http://yanxuan.nosdn.127.net/8976116db321744084774643a933c5ce.png" alt="">
    </div>
    <!-- 综合分类 -->
        <div class="top" @click="sortPrice">
           <div>综合</div>
           <div id="price">
          <div :class="`${current == 'goods' ? '' : 'on'}`" >
            价格
          </div>
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
        <van-grid :column-num="2">
            <van-grid-item v-for="item in list" :key="item.id" @click="xiangqing(item.id)">
                <img class="pic" :src="item.list_pic_url" alt="">
                <h2 class="picc">
                    {{ item.name }}
                </h2>
               <div class="price">￥{{ item.retail_price }}</div> 
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import {
    goodsList
} from "@/api/home/newgoods"
export default {
    data() {
        return {
            list:[],
            id:"",
            order:"",
            current:'default'// default up down
        };
    },
    computed: {

    },
    created() {
        // /home/newgoods/2     this.$route.params.id
        // /home/newgoods?id=2  this.$route.query.id
        var id = this.$route.params.id;
        this.id = id;
        // console.log(this.$route.params.id)
       this.init();
    },
    mounted() {

    },
    methods: {
        init(){
            goodsList({
                isHot:this.id == 2 ? 1 : "",
                isNew:this.id == 1 ? 1 : "",
                order:this.order
            })
            .then(res =>{
                // console.log(res)
                this.list = res.data;
            })
        },
        sortPrice(){
            if(this.current == "default"){
                this.current = "up";
                this.order = "asc"
            }else if(this.current == "up"){
                this.current = "down";
                this.order = "desc"
            }else{
                 this.current = "up";
                 this.order = "asc"
            }
            this.init();
        },
         back() {
      this.$router.go(-1)
    }, // 点击跳转详情页
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
};
</script>

<style scoped lang="scss">
@import "./scss/index.scss";
</style>
