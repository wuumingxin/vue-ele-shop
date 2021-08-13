<template>
  <div>
    <van-icon name="arrow-left" class="go-back" size="30" />
    <div class="shop-header">
      <div class="shop-info">
        <div class="shop-info-logo">
          <img src="../assets/image/shop-img.jpg" alt="" />
        </div>
        <div class="shop-info-center">
          <div class="h1">{{ restaurantObj.name }}</div>
          <div class="peisong" v-if="restaurantObj.piecewise_agent_fee">
            商家配送/分钟送达/{{ restaurantObj.piecewise_agent_fee.tips }}
          </div>
          <div class="message">公告：{{ restaurantObj.promotion_info }}</div>
        </div>
        <div class="shop-info-right">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="shop-live">
        <div class="left">
          <span class="logo">减</span>
          <span v-if="restaurantObj.activities">{{
            restaurantObj.activities[0].description
          }}</span>
        </div>
        <div class="right">
          <span v-if="restaurantObj.activities"
            >{{ restaurantObj.activities.length }}个活动</span
          ><van-icon name="arrow" />
        </div>
      </div>
    </div>
    <!-- 商品评价切换栏 -->
    <div class="shop-evaluate">
      <div class="shop">商品</div>
      <div class="evaluate">评价</div>
    </div>

    <div class="shop-list">
      <div class="left">
        <div
          class="item-title"
          :class="[isFoodTitleActive == item.name ? 'active' : '']"
          @click="go(item.name)"
          v-for="(item, index) in foodMenuList"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="right">
        <div
          class="item-box"
          v-for="(item, index) in foodMenuList"
          :key="index"
        >
          <div class="item-title" :id="item.name">
            {{ item.name }} <span>{{ item.description }}</span>
          </div>
          <div
            class="item-container"
            v-for="(fooditem, index) in item.foods"
            :key="index"
          >
            <div class="top">
              <div class="img-box">
                <img
                  :src="shopImgPath + fooditem.image_path"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div class="top-info">
                <div class="h2">{{ fooditem.name }}</div>
                <div class="xiaoliang">
                  月售{{ fooditem.month_sales }}份 好评率{{
                    parseInt((fooditem.rating / 5) * 100)
                  }}%
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="money">
                ￥<span>{{ fooditem.specfoods[0].price }}</span>
                <span v-if="fooditem.specfoods.length > 1">起</span>
              </div>
              <div class="add-icon-group" v-if="fooditem.specfoods.length == 1">
                <div
                  class="sub-icon"
                  @click="subShop(fooditem._id)"
                  v-if="shopCarObj[fooditem._id]"
                >
                  <van-icon name="minus" size="14" />
                </div>
                <!-- 这里vif有问题。需要修改 -->
                <div class="num" v-if="shopCarObj[fooditem._id]">222</div>
                <div
                  class="add-icon"
                  @click="addShopCar(fooditem._id, fooditem.specfoods[0])"
                >
                  <van-icon name="plus" size="14" />
                </div>
              </div>
              <div class="add-text" v-if="fooditem.specfoods.length > 1">
                选规格
              </div>
            </div>
          </div>

          <div class="item-container">
            <div class="top">
              <div class="img-box">
                <img src="../assets/image/shop-img.jpg" alt="" />
              </div>
              <div class="top-info">
                <div class="h2">ddd</div>
                <div class="xiaoliang">xxxxxxx</div>
              </div>
            </div>
            <div class="footer">
              <div class="money">$<span>20</span></div>
              <div class="add-icon">+</div>
            </div>
          </div>
        </div>

        <div class="item-box">
          <div class="item-title" id="b">无内鬼</div>
          <div class="item-container">
            <div class="top">
              <div class="img-box">
                <img src="../assets/image/shop-img.jpg" alt="" />
              </div>
              <div class="top-info">
                <div class="h2">ddd</div>
                <div class="xiaoliang">xxxxxxx</div>
              </div>
            </div>
            <div class="footer">
              <div class="money">$<span>20</span></div>
              <div class="add-icon">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="shop-footer">
      <div class="shopcar-icon shopcar-active">
        <van-icon name="shopping-cart-o" size="30" color="#fff" badge="1" />
      </div>
      <div class="right">
        <div class="money">
          <div class="top">￥20.00</div>
          <div class="bottom">配送费￥5</div>
        </div>
        <div class="jiesuan jiesuan-active">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import { restaurantInfo, foodmenu } from '../assets/js/api'
export default {
  data () {
    return {
      restaurantObj: {},
      foodMenuList: [],
      // 左边标题栏是否选中
      isFoodTitleActive: '',
      shopImgPath: 'https://elm.cangdu.org/img/',
      shopCarObj: {}

    }
  },
  components: {
  },
  methods: {
    go (value) {
      try {
        document.querySelector('#' + value).scrollIntoView(true)
      } catch (err) {
        document.getElementById(value).scrollIntoView(true)
      }

      this.isFoodTitleActive = value
    },
    // 获取餐馆的信息
    async getRestaurant () {
      const res = await restaurantInfo({}, 3269)
      // console.log(res, 'ddddd')
      this.restaurantObj = res
    },
    // 获取食品列表
    async getFoodMenu () {
      const res = await foodmenu({ restaurant_id: 3269 })
      console.log(res, 'aaa')
      this.foodMenuList = res
    },
    // 加入购物车
    addShopCar (_id, item) {
      console.log(_id, item)
      if (!this.shopCarObj[_id]) {
        item.count = 1
        this.shopCarObj[_id] = item
      }
      this.shopCarObj[_id].count += 1
      console.log(this.shopCarObj[_id].count)
    },
    // 商品数量减一
    subShop (_id) {
      this.shopCarObj[_id].count -= 1
      if (this.shopCarObj[_id].count === 0) {
        this.$delete(this.shopCarObj, _id)
      }
      // 有问题
      // console.log(this.shopCarObj[_id].count)
    }
  },
  mounted () {
    this.getRestaurant()
    this.getFoodMenu()
  }
}
</script>

<style lang="less" scoped>
.go-back {
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 222;
}
.shop-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(119, 103, 137, 0.43);
  padding: 10px;
  color: #fff;

  .shop-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shop-info-logo {
      flex-basis: 67px;
      height: 67px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .shop-info-center {
      height: 67px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 19px;
      }
      .peisong {
        font-size: 12px;
      }
      .message {
        font-size: 12px;
      }
    }
    .shop-info-right {
      flex-basis: 14px;
      height: 14px;
    }
  }
  .shop-live {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .left {
      .logo {
        display: inline-block;
        background-color: rgb(240, 115, 115);
        border-color: rgb(240, 115, 115);
        font-size: 9px;
        color: #fff;
        padding: 2px;
        margin-right: 5px;
      }
    }
    .right {
      // display: flex;
      // justify-content: center;
      // align-items: center;
      line-height: 20px;
      height: 20px;
      span {
        height: 100%;
        line-height: 20px;
        display: inline-block;
      }
      .van-icon {
        height: 20px;
        line-height: 20px;
        vertical-align: middle;
      }
    }
  }
}

// 商品x评价
.shop-evaluate {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 116px;
  left: 0;
  right: 0;
  padding: 10px;
  border-bottom: 1px solid #ebebeb;
  .shop,
  .evaluate {
    padding: 5px 2px;
  }
  .shop {
    border-bottom: 2px solid;
    color: #3190e8;
    border-color: #3190e8;
  }
}

.shop-list {
  position: fixed;
  top: 178px;
  left: 0;
  right: 0;
  display: flex;
  height: calc(100% - 178px);
  .left {
    flex-basis: 89px;
    overflow-y: auto;
    font-size: 14px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      // width: 0 !important;
      display: none;
    }
    .item-title {
      padding: 16px 7px;
    }
    .active {
      border-left: 0.15rem solid #3190e8;
      background-color: #fff;
    }
  }
  .right {
    flex: 1;
    overflow-y: auto;
    .item-box {
      .item-title {
        padding: 10px;
        color: #666;
        font-weight: 700;
        font-size: 16px;
        span {
          font-size: 9px;
        }
      }
      .item-container {
        background-color: #fff;
        padding: 10px;
        border-bottom: 1px solid #f8f8f8;
        .top {
          display: flex;
          margin-bottom: 10px;
          .img-box {
            width: 46px;
            height: 46px;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .top-info {
            flex: 1;
            height: 46px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .h2 {
              font-size: 16px;
            }
            .xiaoliang {
              font-size: 12px;
            }
          }
        }
        .footer {
          display: flex;
          justify-content: space-between;
          margin-left: 56px;
          .money {
            color: #f60;
            font-size: 12px;
            span {
              font-size: 16px;

              font-weight: 700;
            }
          }
          .add-icon-group {
            display: flex;
            .add-icon {
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background-color: #3190e8;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .num {
              margin: 0 10px;
            }
            .sub-icon {
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background-color: #fff;
              color: #3190e8;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid #3190e8;
            }
          }
          .add-text {
            background-color: #3190e8;
            color: #fff;
            font-size: 13px;
            padding: 2px 5px;
            border-radius: 10%;
          }
        }
      }
    }
  }
}

.shop-footer {
  height: 46px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3d3d3f;
  display: flex;
  justify-content: space-between;
  .shopcar-icon {
    width: 54px;
    height: 54px;
    background-color: #3d3d3f;

    border-radius: 50%;
    margin-top: -15px;
    margin-left: 15px;
    border: 4px solid #444;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shopcar-active {
    background-color: #3190e8;
  }
  .right {
    color: #fff;
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    .money {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .top {
        font-size: 19px;
      }
      .bottom {
        font-size: 9px;
      }
    }
    .jiesuan {
      line-height: 46px;
      width: 117px;
      background-color: #535356;
      text-align: center;
      font-size: 16px;
    }
    .jiesuan-active {
      background-color: #3190e8;
    }
  }
}
</style>>
