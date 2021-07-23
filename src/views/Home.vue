<template>
  <div class="home">
    <!-- 导航栏 -->
    <!-- <div class="nav-bar">
      <div class="nav-home" slot="nav-home">ele.me</div>
      <div class="nav-login" slot="nav-login">登录|注册</div>
    </div> -->
    <nav-bar>
      <div class="nav-home" slot="nav-home" @click="refresh">ele.me</div>
      <div class="nav-login" slot="nav-login" @click="goLongin">登录|注册</div>
    </nav-bar>
    <!-- 当前定位区 -->
    <div class="now-city">
      <div class="in-city">
        <span>当前定位城市：</span>
        <span class="span2" v-if="nowCity == ''"
          >定位不准时，请在城市列表中选择</span
        >
        <span class="span2" v-else>{{ nowCity }}</span>
      </div>
      <div class="to-now-city" @click="toCity(nowCityId, nowCity)">
        <img src="../assets/image/向右.png" alt="" />
      </div>
    </div>

    <!-- 热门城市区 -->
    <div class="hot-city">
      <div class="hot-city-title">热门城市</div>
      <div class="hot-city-item">
        <div
          v-for="item in hotCityList"
          :key="item.id"
          @click="toCity(item.id, item.name)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>

    <!-- 城市字母排序区域 -->
    <div
      class="hot-city letter-city"
      v-for="(value, name, index) in sortGroupCity"
      :key="index"
    >
      <div class="hot-city-title letter-city-title">
        {{ name }} <span>(按字母排序)</span>
      </div>
      <div class="hot-city-item letter-city-item">
        <div
          v-for="item in value"
          :key="item.id"
          @click="toCity(item.id, item.name)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hotcity, nowcity, groupcity } from '../assets/js/api'
import NavBar from '../components/NavBar.vue'
export default {
  data () {
    return {
      nowCity: '',
      nowCityId: '',
      hotCityList: [],
      groupCityObj: {}
    }
  },
  components: {
    NavBar
  },
  methods: {
    // 获取热门城市列表
    async getHotCity () {
      const res = await hotcity()

      this.hotCityList = res
      // console.log(this.hotCityList, '测试')
    },
    // 获取当前所在城市位置
    async getNowCity (positionObj) {
      const res = await nowcity(positionObj)
      // console.log(res)
      this.nowCity = res.city
      this.nowCityId = res.city_id
    },
    // 刷新按钮
    refresh () {
      location.reload()
    },
    // 跳转登录页面
    goLongin () {
      this.$router.push({ path: '/login' })
    },
    // 获取当前经纬度
    getPosition () {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position.coords.latitude, position.coords.longitude, '获取到了')
            resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude })
          }, (err) => {
            console.log('获取不到', err)
          }, { enableHighAccuracy: true })
        } else {
          console.log('不支持地理位置')
        }
      })
    },
    // 跳转城市详细地址设置页面
    toCity (cityid, cityname) {
      this.$router.push({ path: '/city/' + cityid, query: { cityname: cityname } })
    },
    async getGroupCity () {
      const res = await groupcity()
      console.log(res, '测试')
      this.groupCityObj = res
    }
  },
  mounted () {
    this.getHotCity()
    // this.getNowCity()

    this.getPosition().then((res) => {
      // console.log(res, 'test')
      this.getNowCity(res)
    })

    this.getGroupCity()
  },
  computed: {
    sortGroupCity () {
      const sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.groupCityObj[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupCityObj[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  }
}
</script>

<style lang="less" scoped>
// 导航栏
.nav-bar {
  // width: 100%;
  // height: 45px;
  // background-color: #3190e8;
  // position: relative;
  .nav-home {
    position: absolute;
    left: 10px;
    line-height: 45px;
    height: 45px;
    color: #fff;
    font-size: 16px;
  }
  .nav-login {
    position: absolute;
    right: 10px;
    height: 45px;
    line-height: 45px;
    color: #fff;
  }
}

// 定位栏
.now-city {
  margin-top: 45px;
  background-color: #fff;
  .in-city {
    height: 40px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
    }
    .span2 {
      font-size: 10px;
      color: #9f9f9f;
      font-weight: 900;
    }
  }
  .to-now-city {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border-bottom: 2px solid #e4e4e4;
    position: relative;
    img {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}

// 热门城市
.hot-city {
  background-color: #fff;
  margin-top: 10px;
  .hot-city-title {
    height: 36px;
    padding: 0 10px;
    line-height: 36px;
    font-size: 12px;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .hot-city-item {
    display: flex;
    flex-wrap: wrap;
    div {
      flex-basis: 25%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      color: #3190e8;
      font-size: 14px;
      padding: 0 10px;
      white-space: nowrap; /* 首先，强制文本不换行；*/
      overflow: hidden; /*其次，隐藏溢出； */
      text-overflow: ellipsis; /*最后，对溢出的文本用 ellipsis 省略号代替。 */
      &:nth-of-type(4n) {
        border-right: none;
      }
    }
  }
}

// 字母城市排序
.letter-city {
  .letter-city-title {
    span {
      color: #999;
      font-size: 11px;
    }
  }
  .letter-city-item {
    div {
      color: black;
    }
  }
}
</style>
