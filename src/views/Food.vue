<template>
  <div>
    <nav-bar>
      <div class="nav-goback" slot="nav-goback" @click="goBack">
        <img src="../assets/image/back-icon.png" alt="" />
      </div>
      <div class="nav-title" slot="nav-title">{{ classTitle }}</div>
    </nav-bar>
    <!-- 筛选栏 -->
    <div class="screen-bar">
      <div
        class="class-item"
        @click="showBox(1)"
        :class="[num === 1 ? 'active' : '']"
      >
        {{ classTitle ? classTitle : "分类" }}<van-icon name="arrow-up" />
      </div>
      <div
        class="class-item"
        @click="showBox(2)"
        :class="[num === 2 ? 'active' : '']"
      >
        排序<van-icon name="arrow-up" />
      </div>
      <div
        class="class-item"
        @click="showBox(3)"
        :class="[num === 3 ? 'active' : '']"
      >
        筛选<van-icon name="arrow-up" />
      </div>
    </div>

    <transition name="showlist">
      <!-- 分类 -->
      <div class="food-class-container" v-show="num === 1">
        <div class="class-box">
          <div class="box-item box-left">
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />异国料理</span>
              <div class="num-box">
                <span class="class-num">9999</span>
              </div>
            </div>
            <div class="item active">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
            <div class="item">
              <span class="class-name"><van-icon name="fire-o" />快餐</span>
              <div class="num-box">
                <span class="class-num">111</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
          </div>
          <div class="box-item box-right">
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>

            <div class="item">
              <span class="food-class-name">简餐</span>
              <span class="fcn-num">2222</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="showlist">
      <!-- 排序 -->
      <div class="sort-container" v-show="num === 2">
        <div class="sort-item">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name">智能排序</div>
        </div>
        <div class="sort-item">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name">智能排序</div>
        </div>
        <div class="sort-item">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name">智能排序</div>
        </div>
        <div class="sort-item">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name">智能排序</div>
        </div>
        <div class="sort-item">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name">智能排序</div>
        </div>
        <div class="sort-item">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name">智能排序</div>
        </div>
      </div>
    </transition>

    <transition name="showlist">
      <!-- 筛选 -->
      <div class="screen-container" v-show="num === 3">
        <div class="screen-box">
          <div class="box-item">
            <h3>配送方式</h3>
            <div class="item-list">
              <div class="item">
                <van-icon name="chat-o" color="#ee0a24" />
                蜂鸟专送
              </div>
            </div>
          </div>
          <div class="box-item">
            <h3>配送方式</h3>
            <div class="item-list">
              <div class="item">
                <van-icon name="chat-o" color="#ee0a24" />
                蜂鸟专送
              </div>
              <div class="item">
                <van-icon name="chat-o" color="#ee0a24" />
                蜂鸟专送
              </div>
              <div class="item">
                <van-icon name="chat-o" color="#ee0a24" />
                蜂鸟专送
              </div>
              <div class="item">
                <van-icon name="chat-o" color="#ee0a24" />
                蜂鸟专送
              </div>
            </div>
          </div>
        </div>
        <div class="screen-btn">
          <div class="btn-item btn-clear">清空</div>
          <div class="btn-item btn-ok">确定</div>
        </div>
      </div>
    </transition>

    <!-- 店铺列表 -->
    <shop-list :shoppingList="shoppingList" class="shop-list"></shop-list>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ShopList from '../components/ShopList.vue'
import { shoppinglist, shopclasslist } from '../assets/js/api'

export default {
  data () {
    return {
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
      showBackStatus: false,
      classTitle: '',
      id: '',
      num: ''
    }
  },
  components: {
    NavBar,
    ShopList
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    // 获取商铺列表
    async getShopping () {
      // latitude/longitude/offset/limit
      // 经度、纬度、跳过多少条数据默认0、请求数量默认20
      // restaurant_category_id    餐馆分类id
      const queryData = { latitude: this.latitude, longitude: this.longitude, offset: this.offset, limit: this.limit, restaurant_category_id: this.id }
      const res = await shoppinglist(queryData)
      this.isLoading = false
      console.log(res, 'ccc')
      this.shoppingList = res
      if (res.length < 20) {
        this.hasShopData = true
      }
    },
    showBox (num) {
      if (this.num === num) {
        this.num = 0
        return
      }
      this.num = num
    },
    async getShopClass () {
      const res = await shopclasslist({})
      console.log(res)
    }
  },
  mounted () {
    this.latitude = this.$route.query.latitude
    this.longitude = this.$route.query.longitude
    this.classTitle = this.$route.query.title
    this.id = this.$route.query.id

    this.getShopping()
  }
}
</script>

<style lang="less" scoped>
.nav-goback {
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
  }
}

.nav-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.screen-bar {
  // margin-top: 45px;
  display: flex;
  height: 37px;
  background-color: #fff;
  border-bottom: 0.025rem solid #f1f1f1;
  position: fixed;
  z-index: 3;
  left: 0;
  right: 0;
  top: 45px;
  padding: 5px 0 5px;
  .class-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 0.025rem solid #e4e4e4;
    font-size: 12px;
    &:last-child {
      border: none;
    }
  }
  .active {
    color: #3190e8;
    .van-icon {
      transform: rotate(180deg);
      color: #3190e8;
    }
  }
}

.food-class-container {
  // display: none;
  // margin-top: 82px;
  top: 82px;
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  .class-box {
    background-color: #f1f1f1;
    height: 375px;
    display: flex;
    .box-item {
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }
    .box-left {
      // background-color: yellow;
      .active {
        background-color: #fff;
      }
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .class-name {
          font-size: 12px;
          color: #666;
        }
        .num-box {
          display: flex;
          justify-content: center;
          align-items: center;
          .class-num {
            background-color: #ccc;
            font-size: 9px;
            color: #fff;
            border: 1px solid #ccc;
            border-radius: 18px;
            vertical-align: middle;
            padding: 1px 10px;
            margin-right: 10px;
          }
        }
      }
    }
    .box-right {
      padding-left: 10px;
      background-color: #fff;
      .item {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #e4e4e4;
        color: #666;
        font-style: 12px;
      }
    }
  }
}

.sort-container {
  // display: none;
  top: 82px;
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  background-color: #fff;
  .sort-item {
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;
    .van-icon {
      margin: 0 7px 0 18px;
    }
    .sort-name {
      flex: 1;
      border-bottom: 1px solid #e4e4e4;
      font-size: 12px;
      color: #666;
    }
  }
}

.screen-container {
  // display: none;
  top: 82px;
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  background-color: #fff;
  .screen-box {
    .box-item {
      h3 {
        font-size: 9px;
        padding: 10px;
      }
      .item-list {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .item {
          font-size: 9px;
          border: 1px solid #eee;
          flex-basis: 30%;
          height: 32px;
          line-height: 32px;
          padding-left: 10px;
          margin-right: 10px;
          margin-bottom: 10px;

          &:nth-child(3n + 0) {
            margin-right: 0;
          }
          .van-icon {
            vertical-align: middle;
            font-size: 18px;
          }
        }
      }
    }
  }

  .screen-btn {
    padding: 10px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .btn-item {
      font-size: 19px;
      height: 42px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(1) {
        margin-right: 10px;
      }
    }
    .btn-clear {
      background-color: #fff;
      color: black;
    }
    .btn-ok {
      background-color: #56d176;
      color: #fff;
    }
  }
}

.shop-list {
  margin-top: 82px;
}

.showlist-enter-active,
.showlist-leave-active {
  transition: all 0.3s;
  transform: translateY(0);
}
.showlist-enter,
.showlist-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
