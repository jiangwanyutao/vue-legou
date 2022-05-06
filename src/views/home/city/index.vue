<template>
  <div>
    <!-- 顶部返回 -->
    <div class="nav">
      <div class="nav-v">
        <van-icon name="arrow-left" color="#1989fa" />
        <span @click="back"> 返回 </span>
      </div>
      <div class="logo">乐居</div>
    </div>
    <!-- 搜索框 -->
    <van-search v-model="value" label="地址" placeholder="请输入搜索关键词地址">
      <template #action>
        <!-- <div @click="onSearch">搜索</div> -->
      </template>
    </van-search>
    <!-- 搜索框展示数据 -->
    <div>
      <ul>
        <li v-for="item in searchList" :key="item.id" @click="goHome(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- 地图展示 -->
    <div id="box"></div>
    <div class="weater">
      <ul class="weater-c">
        <li>当前城市:{{location.province}}--{{location.city}}</li>
        <li>当前温度:{{location.temperature}}°</li>
        <li>当前天气状况:{{location.weather}}</li>
        <li>体感温度:{{location.temperature}}摄氏度</li>
        <li>当前风向:{{location.windDirection}}风</li>
        <li>当前风力:{{location.windPower}}级</li>
        <li>空气湿度(百分比):{{location.humidity}}%</li>
        <li>当前数据更新时间:{{location.reportTime}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
      searchList: [], //用户搜索后展示的数组
      cityText: "",
      location:""
    };
  },
  watch: {
    // 实时监听输入框输入的数据
    value() {
      var _this = this;
      //请求高德api 输入提示与POI搜索
      AMap.plugin("AMap.AutoComplete", function () {
        var autoOptions = {
          //city 限定城市，默认全国 此时的city是
          city: _this.cityText,
        };
        // 实例化AutoComplete
        var autoComplete = new AMap.AutoComplete(autoOptions);
        // 根据关键字进行搜索 此时搜索的城市替换成this.value
        autoComplete.search(_this.value, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          // console.log(result);
          _this.searchList = result.tips;
        });
      });
    },
  },
  methods: {
    back() {
      this.$router.push("/home");
    },
    goHome(val) {
      this.addCityInfo(val);
        // console.log("此时传回的值",val.district,val);
      this.$router.push("/home");
    },
    ...mapMutations({
      addCityInfo: "uptCityInfo",
    }),
  },
  created() {},
  async mounted() {
    // 如果vuex中 有数据  那么地图中展示的应为首页传递的数据
    var _this = this;
    await AMap.plugin("AMap.CitySearch", function () {
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function (status, result) {
        if (status === "complete" && result.info === "OK") {
          // 查询成功，result即为当前所在城市信息
          // console.log(result);
          _this.cityText = result.city;
                  //加载天气查询插件
        AMap.plugin('AMap.Weather', function() {
            //创建天气查询实例
            var weather = new AMap.Weather();
            //执行实时天气信息查询
            weather.getLive('郑州', function(err, data) {
                // console.log(err, data);
                _this.location=data
                  // console.log(_this.location);
            });
              // console.log(_this.cityText);
        });
        }
      });
    });
    // 通过判断vuex中的数据中是否有name属性 判断是否为空
    if (this.$store.state.cityInfo.name) {
      // 如果不为空就使用当前的vuex中存储的城市名称渲染
      var cityInfo = this.$store.state.cityInfo;
      //注意如果用户输入了不是地名将搜索不到经纬度会报错
      var map = new AMap.Map("box", {
        zoom: 18,
        center: [cityInfo.location.lng, cityInfo.location.lat], //定位城市位置 经纬度
      });
      var marker = new AMap.Marker({
        position: [cityInfo.location.lng, cityInfo.location.lat], //标记点位置 经纬度
      });
      map.add(marker); //添加到地图
      return;
    }
    var map = new AMap.Map("box", {
      zoom: 8,
    });
    //  this.weater();
  },
};
</script>

<style scoped lang="scss">
::v-deep #box {
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0px;
  bottom: 0px;
}

// 搜索框
.nav {
  width: 100%;
  height: 1.2533rem;
  margin-bottom: 0.08rem;
  background-color: #fff;
  .nav-v {
    display: inline-block;
    width: 40%;
    text-align: left;
    line-height: 1.2533rem;
    font-size: 0.3733rem;
    color: #1989fa;
  }
  .logo {
    display: inline-block;
    width: 50%;
    text-align: left;
    line-height: 0.8rem;
    font-weight: 500;
    font-size: 0.4267rem;
  }
}
.weater{
  height: 100px;
  .weater-c{
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    // height: 100%;
    li{
      width: 100%;
    }
  }
}
</style>
