<template>
  <div class="topic">
    <!-- v-model 加载状态 -->
    <!-- finished 是否已加载完成 -->
    <!-- load  一般用于请求下一页数据 -->

    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad">
      <ul>
        <li v-for="item in list" :key="item.id" class="info" @click="details(item.id)">
          <img class="pic" :src="item.scene_pic_url" alt="" />
          <p>{{ item.title }}</p>
          <p>{{ item.subtitle }}</p>
          <p>{{ item.price_info }}元起</p>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import { listaction } from "@/api/topic";
export default {
  data() {
    return {
      info: {},
      list: [],
      loading: false,
      finished: false,
      start: 1,
    };
  },
  created() {
    this.init();
  },
  methods: {
    onLoad() {
      // 当列表底部与可视区域的距离小于offset时
      // console.log(1);
      this.start++;
      this.init();
    },
    // 初始化数据
    init() {
      listaction({
        page: this.start,
      }).then((res) => {
        // console.log(res);
        // this.info = res;   ...[1,2]
        this.list.push(...res.data); // [1,2]
        // 当数据请求完毕之后  变更加载状态
        this.loading = false;
        if (this.start >= res.total) {
          // 4    4
          this.finished = true;
        }
        // 请求到最后一页数据  禁止load事件触发
      });
    },
    //点击详情
    details(val){
          this.$router.push({
            path:"/topic/page/",//跳转路由
            query:{//参数对象
              id:val
             }
          })
    }
  },
};
</script>

<style scoped lang="scss">
.topic {
  padding-bottom: 50px;
  .info {
    .pic {
      width: 100%;
    }
    :nth-child(2) {
      color: #333;
      font-size: 17.5px;
      margin-top: 15px;
    }
    :nth-child(3) {
      color: #999;
      font-size: 12px;
      margin-top: 8px;
      padding: 0 10px;
    }
    :nth-child(4) {
      color: #b4282d;
      font-size: 13.5px;
      margin-top: 10px;
    }
  }
}
</style>
