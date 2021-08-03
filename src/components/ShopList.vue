<template>
  <div>
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
</template>

<script>
export default {
  data () {
    return {
      shoppingImageUrl: 'https://elm.cangdu.org/img/'
    }
  },
  props: ['shoppingList']

}
</script>

<style lang="less" scoped>
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
</style>
