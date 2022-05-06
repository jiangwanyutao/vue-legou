<template>
    <div class="opinion">
 <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <van-cell value="意见和反馈" />
    <van-field
    v-model="message"
    rows="2"
    autosize
    label="留言"
    type="textarea"
    maxlength="150"
    placeholder="请填写您的意见反馈,我们会合理采纳"
    show-word-limit
  />
  <van-cell-group>
  <van-field v-model="name" label="姓名:" placeholder="请输入您的姓名" />
  <van-field v-model="value" label="联系方式:" placeholder="手机号/微信/邮箱" />
</van-cell-group>
<van-button type="primary" size="large" @click="sublsit">提交反馈</van-button>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { submitAction } from "@/api/mine/index.js"
export default {
    data() {
        return {
          message:"",
          value:'',
          name:""

        };
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      sublsit(){
        submitAction({
          content:this.message,
          name:this.name,
          openId:localStorage.getItem("openId"),
          phone:this.val
        }).then(res=>{
            console.log(res);
            if(res.data==true) return Toast.success('提交反馈成功');
            Toast.fail('提交失败');
        })
      }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
};
</script>

<style scoped lang="scss">
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
  .opinion{
    background-color: #f4f4f4;
  }
  ::v-deep .van-cell{
    margin-bottom:5px
  }
</style>
