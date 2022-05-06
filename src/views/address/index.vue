<template>
  <div class="address">
    <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
     <!-- 地址栏显示 -->
      <div class="hedls" v-if="current">
         <div class="list" v-for="item in list" :key="item.id" >
      <div class="addresslist" @click="backs(item)" >
        <div >
          <p>{{item.name}}</p>
          <div class="moren" v-show="item.is_default == 1 ? true : false">默认</div>
        </div>
        <div class="info">
          <p>{{item.mobile}}</p>
          <p class="over">
           {{item.address}}
          </p>
        </div>
        <div @click.stop="sortPrice(item)"></div>
      </div>
    </div>
    </div>
    <!-- 添加列表 -->
    <van-address-edit
      :area-list="areaList"
      :address-info="AddressInfo"
      show-delete
      show-set-default
      :area-placeholder="arr"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
       @delete="onDelete"
      v-else
    />
    <!-- 底部添加列表 -->
    <div class="bottom" @click="Save" v-if="current">
           <div class="names">+新建地址</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { areaList } from "@vant/area-data";
import { getListAction, saveAction,deleteAction } from "@/api/address/index.js";
export default {
  data() {
    return {
      current: true,
      areaList,
      list: [],
      AddressInfo:{},
      arr:{},
      id:""
    };
  },
  methods: {
    // 初始化列表
    init() {
      getListAction({
        openId: localStorage.getItem("openId"),
      }).then((res) => {
        // console.log("dizhi", res);
        res.data.forEach((el) => {
          el.tel = el.mobile;
        });
        this.list = res.data;
      });
    },
    // 点击返回页面
    back() {

    if(this.current == true){
      const enterPath=this.$route.query.enterPath
     //跳转  保存的路径在router/index.js/路由表内
      this.$router.push(enterPath);
    }else{
      this.current = true
    }
  },
    // 点击添加地址
    Save(){
       this.current = false;
    },
    // 点击任意地址触发返回上级列表,同时返回地址的所有值到上级列表
    backs(val) {
        console.log(val);
      localStorage.setItem("address", JSON.stringify(val));
      this.$router.go(-1);
    },
    // 点击编辑地址
    sortPrice(content) {
     this.current = false;
     this.AddressInfo = content;
     this.arr=content.address
     this.postalCode=content.content
     this.id = content.id
    },
    //新增地址
    onSave(content) {
      // province  省  city 城市  county 区
      var addre = [content.province, content.city, content.county];
      saveAction({
        address: addre.join(" "), //地址
        addressId:this.id, //判断是新增还是修改地址，如果是新增就不需要传，如果是修改就是地址对应的id
        checked: content.isDefault, //是否默认选中
        detailadress: content.addressDetail, //详细地址
        openId: localStorage.getItem("openId"),
        telNumber: content.tel,
        userName: content.name,
      }).then((res) => {
          // console.log(res);
        this.current = true;
        // localStorage.setItem("address", JSON.stringify(res));
        this.AddressInfo = {}
        this.arr=""
        this.postalCode=""
        this.id =""
        this.init();
      });
    },
    // 删除地址
     onDelete(content) {
         console.log("删除地址",content);
      deleteAction({
        id:content.id
      }).then(res=>{
          console.log(res);
       if(res.data == true)   return Toast.success('删除成功')
           this.current = true;
            this.init();  
      })
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
::v-deep .van-address-list {
  margin-top: 50px;
}
::v-deep .van-address-edit {
  margin-top: 50px;
}
.hedls{
 margin-top:50px;
}
.list{
        position: relative;
        padding: 15px 0 ;
        border-bottom: 1Px solid #d9d9d9;
       
        .addresslist {
            width: 100%;
            position: relative;
            transition: all .3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div:first-child {
                width: 50px;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                align-self: flex-start;
                .moren{
                    width: 30px;
                    height: 15px;
                    border: 1Px solid #b4282d;
                    text-align: center;
                    line-height: 15px;
                    color: #b4282d;
                    margin: 5px auto 0 auto;
                }
            }
            .info{
                padding: 0 10px;
                overflow: hidden;
                flex: 1;
                :first-child
                :nth-child(2) {
                    margin-top: 2.5px;
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                }
               
            }
            :nth-child(3) {
                width: 25px;
                height: 25px;
                margin: 0 10px;
                background: url(http://jinglins.gitee.io/legou/img/edit.d508a455.png) no-repeat;
                background-size: 100% 100%;
            }
        }
 }
 .bottom{
   position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding:15px 15px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    .names{
        width: 90%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border: 1Px solid #b4282d;
        color: #b4282d;
        margin: 0 auto;
    }
 }

</style>
