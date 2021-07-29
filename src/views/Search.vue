<template>
  <div>
    <nav-bar>
      <div class="nav-goback" slot="nav-goback" @click="goBack">
        <img src="../assets/image/back-icon.png" alt="" />
      </div>
      <div class="nav-title" slot="nav-title">搜索</div>
    </nav-bar>
    <!-- search -->
    <div class="food-search">
      <input
        type="text"
        v-model.trim="inputfood"
        placeholder="请输入商家或美食名称"
      />
      <div class="food-search-btn" @click="searchFood">提交查询</div>
    </div>

    <!-- 搜索历史 -->
    <div class="search-history" v-show="isShowHistory">
      <div class="ht-title">搜索历史</div>
      <div class="ht-item">
        <div
          class="item-box"
          v-for="(item, index) in searchShopHistory"
          :key="index"
        >
          <span @click="searchHistoryFood(item)">{{ item }}</span>
          <van-icon name="cross" @click="delSearchHistory(index)" />
        </div>
      </div>
      <div
        class="clear-history"
        @click="delAllSearchHistory"
        v-show="searchShopHistory.length > 0"
      >
        清空搜索历史
      </div>
    </div>

    <!-- 搜索结果 -->
    <div class="search-result" v-show="!isShowHistory">
      <div class="ht-title">商家</div>
      <div class="item-box">
        <div
          class="item"
          v-for="(item, index) in searchShopResult"
          :key="index"
          @click="goShop"
        >
          <img src="../assets/image/shop-img.jpg" alt="" />
          <div class="item-info">
            <div class="info">
              {{ item.name }}
              <van-tag plain type="primary" color="rgb(255, 96, 0)"
                >支付</van-tag
              >
            </div>
            <div class="info">月销售 {{ item.recent_order_num }} 单</div>
            <div class="info info1">
              {{ item.float_minimum_order_amount }}元起送 / 距离{{
                item.distance
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tabbar -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import TabBar from '../components/TabBar.vue'

import Icon from 'vant/lib/icon'
import 'vant/lib/icon/style'

import Tag from 'vant/lib/tag'
import 'vant/lib/tag/style'

import { searchShopping } from '../assets/js/api'

export default {
  data () {
    return {
      inputfood: '',
      geohash: '',
      // 控制搜索结果和历史记录的显示
      isShowHistory: true,
      searchShopResult: [],
      searchShopHistory: []

    }
  },
  components: {
    NavBar,
    TabBar,
    [Icon.name]: Icon,
    [Tag.name]: Tag
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async searchFood () {
      if (this.inputfood === '') {
        alert('不能为空')
        return
      }
      const date = { geohash: this.gethash, keyword: this.inputfood }
      const res = await searchShopping(date)
      console.log(res)
      this.isShowHistory = false
      this.searchShopResult = res
      this.searchShopHistory.push(this.inputfood)
      localStorage.setItem('searchHistoryTitle', JSON.stringify(this.searchShopHistory))
    },
    delSearchHistory (nub) {
      this.searchShopHistory.splice(nub, 1)
      localStorage.setItem('searchHistoryTitle', JSON.stringify(this.searchShopHistory))
    },
    delAllSearchHistory () {
      this.searchShopHistory = []
      localStorage.setItem('searchHistoryTitle', JSON.stringify(this.searchShopHistory))
    },
    goShop () {
      this.$router.push({ path: '/shop' })
    },
    async searchHistoryFood (value) {
      const date = { geohash: this.gethash, keyword: value }
      const res = await searchShopping(date)
      console.log(res)
      this.isShowHistory = false
      this.searchShopResult = res
    }
  },
  mounted () {
    this.gethash = this.$store.state.geohash

    if (localStorage.getItem('searchHistoryTitle') == null) {
      localStorage.setItem('searchHistoryTitle', JSON.stringify([]))
    } else {
      this.searchShopHistory = JSON.parse(localStorage.getItem('searchHistoryTitle'))
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  position: absolute;
}
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

.food-search {
  margin-top: 45px;
  display: flex;
  padding: 10px;
  height: 58px;
  background-color: #fff;
  input {
    flex: 4;
    background-color: #f2f2f2;
    padding-left: 10px;
    border: 1px solid #e4e4e4;
    outline: none;
  }
  .food-search-btn {
    flex: 1;
    border: 1px solid #3190e8;
    margin-left: 10px;
    font-size: 13px;
    color: #fff;
    border-radius: 2px;
    background-color: #3190e8;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.search-history {
  .ht-title {
    height: 46px;
    line-height: 46px;
    padding-left: 10px;
  }
  .ht-item {
    display: flex;
    flex-direction: column;

    .item-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 46px;
      background-color: #fff;
      padding: 0 10px;
      border-bottom: 1px solid #e4e4e4;
      span {
        flex: 1;
        height: 100%;
        line-height: 45px;
      }
    }
  }

  .clear-history {
    height: 46px;
    line-height: 46px;
    background-color: #fff;
    color: #3190e8;
    text-align: center;
  }
}

.search-result {
  margin-bottom: 45px;
  .ht-title {
    height: 46px;
    line-height: 46px;
    padding-left: 10px;
  }
  .item-box {
    background-color: #fff;
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid #e4e4e4;
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      .item-info {
        border-bottom: 1px solid #e4e4e4;
        padding-bottom: 8px;
        padding-right: 10px;
        flex: 1;
        .info {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
