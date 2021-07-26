<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar>
      <div class="nav-goback" slot="nav-goback" @click="goBack">
        <img src="../assets/image/back-icon.png" alt="" />
      </div>
      <div class="nav-title" slot="nav-title">{{ cityNameTitle }}</div>
      <div class="nav-tohome" slot="nav-tohome" @click="goHome">切换城市</div>
    </nav-bar>

    <!-- 搜索框 -->
    <div class="city-search">
      <input
        type="text"
        v-model="inputAddress"
        placeholder="输入学校、商务楼、地址"
      />
      <button @click="searchAddress">提交</button>
    </div>

    <!-- 搜索历史 -->
    <div class="search-history" v-show="isShowSearchHistory">
      <p>搜索历史</p>
      <div class="search-history-item">
        <div
          class="item"
          v-for="(item, index) in searchHistoryList"
          :key="index"
          @click="goMsite(index, true)"
        >
          <div>{{ item.name }}</div>
          <p>{{ item.address }}</p>
        </div>
      </div>
      <div class="clear-btn" @click="clearHistory" v-show="isShowClearBtn">
        清空所有
      </div>
    </div>

    <!-- 搜索结果 -->
    <div class="search-result">
      <div class="search-result-item">
        <div
          class="item"
          v-for="(item, index) in searchResultList"
          :key="index"
          @click="goMsite(index)"
        >
          <div>{{ item.name }}</div>
          <p>{{ item.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import { queryaddress } from '../assets/js/api'
export default {
  data () {
    return {
      // 保存home页面传过来的城市名
      cityNameTitle: '',
      cityId: '',
      inputAddress: '',
      searchResultList: [],
      // 历史搜索记录区域是否显示
      isShowSearchHistory: true,
      searchHistoryList: []

    }
  },
  components: {
    NavBar
  },
  computed: {
    isShowClearBtn () {
      return !!this.searchHistoryList.length
    }
  },
  mounted () {
    this.cityNameTitle = this.$route.query.cityname
    this.cityId = this.$route.params.cityid
    // console.log()
    this.init()
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push({ path: '/home' })
    },
    async searchAddress () {
      const res = await queryaddress({ city_id: this.cityId, keyword: this.inputAddress })
      console.log(res)
      this.searchResultList = res
      // 隐藏历史搜索结果，为了展示搜索结果
      this.isShowSearchHistory = false
    },
    goMsite (num, isHistory = false) {
      if (isHistory === false) {
        this.searchHistoryList.push(this.searchResultList[num])
        localStorage.setItem('searchHistoryList', JSON.stringify(this.searchHistoryList))
        console.log(this.searchHistoryList)
      }
      this.$router.push({ path: '/msite' })
    },
    // 初始化
    init () {
      if (localStorage.getItem('searchHistoryList')) {
        this.searchHistoryList = JSON.parse(localStorage.getItem('searchHistoryList'))
      } else {
        localStorage.setItem('searchHistoryList', JSON.stringify([]))
      }
    },
    // 清理搜索历史记录
    clearHistory () {
      this.searchHistoryList = []
      localStorage.setItem('searchHistoryList', JSON.stringify(this.searchHistoryList))
    }
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

.nav-tohome {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.city-search {
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  input {
    width: 90%;
    height: 30px;
    margin: 0 auto;
    border: 1px solid #e4e4e4;
    padding-left: 10px;
  }
  button {
    width: 90%;
    height: 30px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #3190e8;
    color: #fff;
    border: none;
  }
}

.search-history {
  p {
    font-size: 11px;
    padding-left: 10px;
    height: 20px;
    line-height: 20px;
  }
  .search-history-item {
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    .item {
      padding-left: 10px;
      height: 70px;
      div {
        padding: 10px;
      }
      p {
        color: #999;
        font-size: 11px;
      }
    }
  }
}

.clear-btn {
  border-top: 1px solid #e4e4e4;
  height: 46px;
  line-height: 46px;
  text-align: center;
  background-color: #fff;
}

.search-result {
  .search-result-item {
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    .item {
      padding-left: 10px;
      height: 70px;
      div {
        padding: 10px;
      }
      p {
        color: #999;
        font-size: 11px;
        padding-left: 10px;
      }
    }
  }
}
</style>
