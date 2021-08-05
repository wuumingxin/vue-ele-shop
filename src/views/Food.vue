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
            <div
              class="item"
              v-for="(item, index) in shopClassList"
              :key="index"
              @click="selectClass(index, item.id)"
              :class="[selectClassId == item.id ? 'active' : '']"
            >
              <span class="class-name"
                ><van-icon name="fire-o" />{{ item.name }}</span
              >
              <div class="num-box">
                <span class="class-num">{{ item.count }}</span>
                <van-icon name="arrow" size="12" />
              </div>
            </div>
          </div>
          <div class="box-item box-right">
            <div
              class="item"
              v-for="(item, index) in twoLevelClassList"
              :key="index"
              @click="getTwoLevelShop(item.id, item.name)"
              v-show="item.level !== 1"
            >
              <span class="food-class-name">{{ item.name }}</span>
              <span class="fcn-num">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="showlist">
      <!-- 排序 -->
      <div class="sort-container" v-show="num === 2">
        <div class="sort-item" @click="sortToShop(1)">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name" :class="[orderBy == 1 ? 'active' : '']">
            智能排序
          </div>
          <van-icon name="success" class="success" v-show="orderBy == 1" />
        </div>
        <div class="sort-item" @click="sortToShop(2)">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name" :class="[orderBy == 2 ? 'active' : '']">
            距离最近
          </div>
          <van-icon name="success" class="success" v-show="orderBy == 2" />
        </div>
        <div class="sort-item" @click="sortToShop(3)">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name" :class="[orderBy == 3 ? 'active' : '']">
            销量最高
          </div>
          <van-icon name="success" class="success" v-show="orderBy == 3" />
        </div>
        <div class="sort-item" @click="sortToShop(4)">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name" :class="[orderBy == 4 ? 'active' : '']">
            起送价最低
          </div>
          <van-icon name="success" class="success" v-show="orderBy == 4" />
        </div>
        <div class="sort-item" @click="sortToShop(5)">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name" :class="[orderBy == 5 ? 'active' : '']">
            配送速度最快
          </div>
          <van-icon name="success" class="success" v-show="orderBy == 5" />
        </div>
        <div class="sort-item" @click="sortToShop(6)">
          <van-icon name="chat-o" color="#ee0a24" />
          <div class="sort-name" :class="[orderBy == 6 ? 'active' : '']">
            评分最高
          </div>
          <van-icon name="success" class="success" v-show="orderBy == 6" />
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
              <div
                class="item"
                v-for="(item, index) in deliverymodesList"
                :key="index"
                @click="selectDelivery(item.id)"
              >
                <van-icon
                  name="chat-o"
                  color="#ee0a24"
                  v-show="selectDeliveryModesList.indexOf(item.id) == -1"
                />
                <van-icon
                  name="success"
                  color="#3190e8"
                  v-show="selectDeliveryModesList.indexOf(item.id) !== -1"
                />
                {{ item.text }}
              </div>
            </div>
          </div>
          <div class="box-item">
            <h3>商家属性（可以多选）</h3>
            <div class="item-list">
              <div
                class="item"
                v-for="(item, index) in activityattributesList"
                :key="index"
                @click="selectSupport(item.id)"
              >
                <van-icon
                  name="chat-o"
                  color="#ee0a24"
                  v-show="selectSupportIdsList.indexOf(item.id) == -1"
                />
                <van-icon
                  name="success"
                  color="#3190e8"
                  v-show="selectSupportIdsList.indexOf(item.id) !== -1"
                />
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="screen-btn">
          <div class="btn-item btn-clear" @click="clearScreenData">清空</div>
          <div class="btn-item btn-ok" @click="getScreenSelectData">
            确定({{
              selectDeliveryModesList.length + selectSupportIdsList.length
            }})
          </div>
        </div>
      </div>
    </transition>

    <!-- 店铺列表 -->
    <shop-list :shoppingList="shoppingList" class="shop-list"></shop-list>

    <transition name="showmask">
      <div class="mask" v-show="num"></div>
    </transition>
    <loading v-show="isLoading" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ShopList from '../components/ShopList.vue'
import { shoppinglist, shopclasslist, deliverymodes, activityattributes } from '../assets/js/api'
import Loading from '../components/loading.vue'

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
      ids: '',
      num: '',
      shopClassList: [],
      selectClassIndex: 0,
      twoLevelClassList: [],
      selectClassId: '',
      orderBy: '',
      deliverymodesList: [],
      activityattributesList: [],
      selectDeliveryModesList: [],
      selectSupportIdsList: []
    }
  },
  components: {
    NavBar,
    ShopList,
    Loading
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
      const queryData = { latitude: this.latitude, longitude: this.longitude, offset: this.offset, limit: this.limit, restaurant_category_id: this.id, restaurant_category_ids: [this.ids], order_by: this.orderBy, delivery_mode: this.selectDeliveryModesList, support_ids: this.selectSupportIdsList }
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
      const res = await shopclasslist({ latitude: this.latitude, longitude: this.longitude })
      console.log(res, 'class')
      this.shopClassList = res
      this.twoLevelClass()
    },
    selectClass (index, id) {
      this.selectClassIndex = index
      if (id === undefined) {
        console.log('id不存在')
        return
      }
      this.selectClassId = id
      this.twoLevelClass()
    },
    // 获取shopClassList中的二级菜单的数据
    twoLevelClass () {
      // this.twoLevelClassList = this.shopClassList[this.selectClassIndex].sub_categories

      const subList = this.shopClassList.filter(item => {
        return item.id === Number(this.selectClassId)
      })
      this.twoLevelClassList = subList[0].sub_categories
      console.log(this.twoLevelClassList, 'ggg')
    },
    getTwoLevelShop (ids, name) {
      this.classTitle = name
      this.offset = 0
      this.ids = ids
      this.backTop()
      this.getShopping()
      this.num = 0
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
      const queryData = { latitude: this.latitude, longitude: this.longitude, offset: this.offset, limit: this.limit, restaurant_category_id: this.id, restaurant_category_ids: [this.ids] }
      const res = await shoppinglist(queryData)
      this.isLoading = false
      console.log(this.offset, res, 'dddddd')
      this.shoppingList.push(...res)
      if (res.length < 20) {
        this.hasShopData = true
      }
      this.isRequesting = false
    },
    scrollFun () {
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
    },
    sortToShop (index) {
      this.orderBy = index
      this.offset = 0
      this.backTop()
      this.getShopping()
      this.num = 0
    },
    async getDeliveryModes () {
      const res = await deliverymodes({ latitude: this.latitude, longitude: this.longitude })
      console.log(res, '1')
      this.deliverymodesList = res
    },
    async getActivityAttributes () {
      const res = await activityattributes({ latitude: this.latitude, longitude: this.longitude })
      console.log(res, '2')
      this.activityattributesList = res
    },
    selectDelivery (id) {
      if (this.selectDeliveryModesList.indexOf(id) === -1) {
        this.selectDeliveryModesList.push(id)
      } else {
        this.selectDeliveryModesList.splice(this.selectDeliveryModesList.indexOf(id), 1)
      }
      // console.log(this.selectDeliveryModesList)
    },
    selectSupport (id) {
      if (this.selectSupportIdsList.indexOf(id) === -1) {
        this.selectSupportIdsList.push(id)
      } else {
        this.selectSupportIdsList.splice(this.selectSupportIdsList.indexOf(id), 1)
      }
      // console.log(this.selectSupportIdsList)
    },
    clearScreenData () {
      this.selectDeliveryModesList = []
      this.selectSupportIdsList = []
    },
    getScreenSelectData () {
      this.offset = 0
      this.num = 0
      this.getShopping()
    }
  },
  mounted () {
    this.latitude = this.$route.query.latitude
    this.longitude = this.$route.query.longitude
    this.classTitle = this.$route.query.title
    this.id = this.$route.query.id
    this.selectClassId = this.$route.query.id
    this.getShopping()
    this.getShopClass()
    window.addEventListener('scroll', this.scrollFun)
    this.getDeliveryModes()
    this.getActivityAttributes()
  },
  computed: {
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollFun)
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
    // color: #3190e8;
    position: relative;
    .van-icon {
      margin: 0 7px 0 18px;
    }
    .sort-name {
      flex: 1;
      border-bottom: 1px solid #e4e4e4;
      font-size: 12px;
      color: #666;
    }
    .active {
      color: #3190e8;
    }
    .success {
      margin: 0;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 10px;
      color: #3190e8;
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
          font-size: 12px;
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
            margin-right: 5px;
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

.mask {
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: grey;
  opacity: 0.6;
}
</style>
