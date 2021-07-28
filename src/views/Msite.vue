<template>
  <div class="msite">
    <nav-bar>
      <div class="nav-search" slot="nav-search" @click="goSearch">
        <img src="../assets/image/search.png" alt="" />
      </div>
      <div class="nav-title" slot="nav-title" @click="goHome">
        {{ addressName }}
      </div>
      <div class="nav-login" slot="nav-login" @click="goLogin">登录|注册</div>
    </nav-bar>
    <!-- 轮播图 -->
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      class="swiper-msite"
      v-if="foodClassList.length > 0"
    >
      <swiper-slide v-for="(item, index) in foodClassList" :key="index">
        <div class="msite-food-cf">
          <div class="food-cf-item" v-for="fooditem in item" :key="fooditem.id">
            <img :src="foodClassImageUrl + fooditem.image_url" alt="" />
            <p>{{ fooditem.title }}</p>
          </div>
          <!-- <div class="food-cf-item">
            <img src="../assets/image/甜品.png" alt="" />
            <p>甜品饮品</p>
          </div>
          <div class="food-cf-item">
            <img src="../assets/image/甜品.png" alt="" />
            <p>甜品饮品</p>
          </div>
          <div class="food-cf-item">
            <img src="../assets/image/甜品.png" alt="" />
            <p>甜品饮品</p>
          </div>
          <div class="food-cf-item">
            <img src="../assets/image/甜品.png" alt="" />
            <p>甜品饮品</p>
          </div>
          <div class="food-cf-item">
            <img src="../assets/image/甜品.png" alt="" />
            <p>甜品饮品</p>
          </div>
          <div class="food-cf-item">
            <img src="../assets/image/甜品.png" alt="" />
            <p>甜品饮品</p>
          </div>
          <div class="food-cf-item">
            <img src="../assets/image/甜品.png" alt="" />
            <p>甜品饮品</p>
          </div> -->
        </div>
      </swiper-slide>
      <!-- <swiper-slide>I'm Slide 2</swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- 附近商家 -->
    <div class="msite-shops">
      <div class="title">
        <img src="../assets/image/附近商店.png" alt="" /><span>附近商家</span>
      </div>
      <div class="shop-item" v-for="(item, index) in shoppingList" :key="index">
        <div class="shop-img">
          <img :src="shoppingImageUrl + item.image_path" loading="lazy" />
        </div>
        <div class="shop-info">
          <div class="info1 info">
            <div class="left">
              <span class="span1">品牌</span
              ><span class="span2">{{ item.name }}</span>
            </div>
            <div class="right">
              <span v-for="(supitem, index) in item.supports" :key="index">{{
                supitem.icon_name
              }}</span>
            </div>
          </div>
          <div class="info2 info">
            <div class="left">
              <van-rate
                v-model="item.rating"
                size="11"
                color="#ff6000"
                readonly
              />
              <span class="rating_num">{{ item.rating }}</span>
              <span class="buy-num">月售{{ item.recent_order_num }}单</span>
            </div>
            <div class="right">
              <span class="span1" v-show="item.delivery_mode">蜂鸟转送</span>
              <span class="span2">准时达</span>
            </div>
          </div>
          <div class="info3 info">
            <div class="left">
              ￥{{ item.float_minimum_order_amount }}起送/{{
                item.piecewise_agent_fee.tips
              }}
            </div>
            <div class="right">
              {{ item.distance }}/<span>{{ item.order_lead_time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <p v-if="hasShopData" class="empty_data">没有更多了</p>
    <aside class="return_top" @click="backTop" v-if="showBackStatus">
      <div class="back_top_svg"></div>
    </aside>

    <!-- 底部导航栏 -->
    <tab-bar></tab-bar>
    <!-- loading -->
    <loading v-show="isLoading" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import TabBar from '../components/TabBar.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { foodclass, shoppinglist } from '../assets/js/api'
import loading from '../components/loading.vue'
import Rate from 'vant/lib/rate'
import 'vant/lib/rate/style'

export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 允许分页点击跳转
        }
      },
      foodClassList: [],
      foodClassImageUrl: 'https://fuss10.elemecdn.com',
      shoppingImageUrl: 'https://elm.cangdu.org/img/',
      latitude: '',
      longitude: '',
      addressName: '',
      offset: 0,
      limit: 20,
      shoppingList: [],
      // 是否还有数据
      hasShopData: false,
      // 是否加载中
      isLoading: true,
      // 防止重复提交，
      isRequesting: false,
      // 回到顶部按钮
      showBackStatus: false

    }
  },
  components: {
    NavBar,
    TabBar,
    swiper,
    swiperSlide,
    loading,
    [Rate.name]: Rate
  },
  computed: {
  },
  methods: {
    goSearch () {
      this.$router.push({ path: '/search' })
    },
    goHome () {
      this.$router.push({ path: '/home' })
    },
    goLogin () {
      this.$router.push({ path: '/login' })
    },
    // 获取食品分类
    async getFoodClass () {
      const res = await foodclass()
      console.log(res, '食品分类')
      const fcList = []
      for (let i = 0, j = 0; i < res.length; i += 8, j++) {
        fcList[j] = res.slice(i, i + 8)
      }
      return fcList
    },
    // 获取商铺列表
    async getShopping () {
      // latitude/longitude/offset/limit
      // 经度、纬度、跳过多少条数据默认0、请求数量默认20
      const queryData = { latitude: this.latitude, longitude: this.longitude, offset: this.offset, limit: this.limit }
      const res = await shoppinglist(queryData)
      this.isLoading = false
      console.log(res, 'aabb')
      this.shoppingList = res
      if (res.length < 20) {
        this.hasShopData = true
      }
    },
    async scrollGetShop () {
      if (this.hasShopData) {
        return
      }
      if (this.isRequesting) {
        return
      }

      this.isLoading = true
      this.isRequesting = true
      this.offset += 20
      const queryData = { latitude: this.latitude, longitude: this.longitude, offset: this.offset, limit: this.limit }
      const res = await shoppinglist(queryData)
      this.isLoading = false
      console.log(this.offset, res, 'dddddd')
      this.shoppingList.push(...res)
      if (res.length < 20) {
        this.hasShopData = true
      }
      this.isRequesting = false
    },
    // 返回顶部
    backTop () {
      // alert('1111')
      // animate(document.body, { scrollTop: '0' }, 400, 'ease-out')
      // document.documentElement.scrollTop = 0
      // 返回顶部简易动画效果
      const timeTop = window.setInterval(() => {
        document.documentElement.scrollTop = document.documentElement.scrollTop - 50
        if (document.documentElement.scrollTop === 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  },
  mounted () {
    this.getFoodClass().then(res => {
      this.foodClassList = res
      console.log(this.foodClassList)
    })
    this.latitude = this.$route.query.latitude
    this.longitude = this.$route.query.longitude
    this.addressName = this.$route.query.name
    // 获取店铺数据
    this.getShopping()
    var scrollFun = () => {
      // 根据距离页面底部距离是否请求数据
      const bottomHeight = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.body.clientHeight
      // console.log(bottomHeight)
      if (bottomHeight < 30) {
        // 防止重复执行请求
        console.log('scroll', bottomHeight)
        if (!this.isLoading) {
          // console.log('小于50')
          this.scrollGetShop()
        }
      }
      if (document.documentElement.scrollTop > 500) {
        this.showBackStatus = true
      } else {
        this.showBackStatus = false
      }
    }
    window.addEventListener('scroll', scrollFun
    )

    // this.$nextTick(() => {
    //   document.querySelector('.msite').addEventListener('scroll', () => {
    //     // 根据距离页面底部距离是否请求数据
    //     const bottomHeight = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.body.clientHeight
    //     // console.log(bottomHeight)
    //     if (bottomHeight < 30) {
    //       // 防止重复执行请求
    //       console.log('scroll', bottomHeight)
    //       if (!this.isLoading) {
    //         // console.log('小于50')
    //         this.scrollGetShop()
    //       }
    //     }
    //     if (document.documentElement.scrollTop > 500) {
    //       this.showBackStatus = true
    //     } else {
    //       this.showBackStatus = false
    //     }
    //   }
    //   )
    // })
  },
  beforeDestroy () {
    // window.removeEventListener('scroll', scrollFun)
  }
}
</script>

<style lang="less" scoped>
.nav-search {
  position: absolute;
  left: 10px;
  line-height: 45px;
  height: 45px;
  width: 45px;
  img {
    width: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
  }
}

.nav-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.nav-login {
  position: absolute;
  right: 10px;
  height: 45px;
  line-height: 45px;
  color: #fff;
}

.swiper-msite {
  margin-top: 45px;
  background-color: #fff;
  height: 180px;

  .msite-food-cf {
    display: flex;
    flex-wrap: wrap;
    .food-cf-item {
      flex: 1;
      flex-basis: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 7px 0;
      img {
        width: 42px;
        height: 42px;
        margin-bottom: 7px;
      }
      p {
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
}

// 附近商家
.msite-shops {
  background-color: #fff;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  .title {
    padding-left: 10px;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    color: #999;
    position: relative;
    img {
      width: 14px;
      height: 14px;
      margin-right: 10px;
      position: absolute;
      top: 50%;
      margin-top: -7px;
    }
    span {
      position: absolute;
      left: 34px;
    }
  }

  .shop-item {
    display: flex;
    padding: 16px 10px;
    border-bottom: 0.025rem solid #f1f1f1;
    height: 104px;
    .shop-img {
      flex-basis: 71px;
      height: 71px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .shop-info {
      height: 71px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .info1 {
        .left {
          .span1 {
            padding: 2px;
            color: black;
            background-color: #ffd930;
            font-size: 12px;
            margin-right: 5px;
            font-weight: 600;
          }
          .span2 {
            font-size: 12px;
          }
        }
        .right {
          span {
            font-size: 12px;
            color: #999;
            border: 0.025rem solid #f1f1f1;
            padding: 0 0.04rem;
            border-radius: 0.08rem;
            margin-left: 0.05rem;
          }
        }
      }
      .info2 {
        .left {
          .rating_num {
            color: #ff6000;
            font-size: 9px;
            margin: 0 5px 0 3px;
          }
          .buy-num {
            font-size: 9px;
            color: #666;
          }
        }
        .right {
          .span1 {
            color: #fff;
            background-color: #3190e8;
            border: 0.025rem solid #3190e8;

            font-size: 10px;
            padding: 0.04rem 0.08rem 0;
            border-radius: 0.08rem;
            margin-left: 0.08rem;
          }
          .span2 {
            font-size: 10px;
            padding: 0.04rem 0.08rem 0;
            border-radius: 0.08rem;
            margin-left: 0.08rem;

            color: #3190e8;
            border: 0.025rem solid #3190e8;
          }
        }
      }
      .info3 {
        .left {
          // transform: scale(0.9);
          font-size: 12px;
          color: #666;
        }
        .right {
          font-size: 12px;
          span {
            color: #3190e8;
          }
        }
      }
    }
  }
}

// 回到顶部按钮
.return_top {
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  .back_top_svg {
    width: 2rem;
    height: 2rem;
    background-color: green;
  }
}

.empty_data {
  text-align: center;
  margin-bottom: 48px;
}
</style>
