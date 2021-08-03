<template>
  <div>
    <nav-bar>
      <div class="nav-goback" slot="nav-goback" @click="goBack">
        <img src="../assets/image/back-icon.png" alt="" />
      </div>
      <div class="nav-title" slot="nav-title">搜索</div>
    </nav-bar>
    <!-- 筛选栏 -->
    <div class="screen-bar">
      <div class="class-item active">分类<van-icon name="arrow-up" /></div>
      <div class="class-item">分类<van-icon name="arrow-up" /></div>
      <div class="class-item">分类<van-icon name="arrow-up" /></div>
    </div>

    <!-- 分类 -->
    <div class="food-class-container">
      <div class="class-box">
        <div class="box-item box-left">
          <div class="item">
            <span class="class-name">异国料理</span>
            <span class="class-num">3873</span>
          </div>
          <div class="item">
            <span class="class-name"><van-icon name="fire-o" />快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name"><van-icon name="fire-o" />快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name">快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name">快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name">快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name">快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name">快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name">快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name">快餐</span>
            <span class="class-num">111</span>
          </div>
          <div class="item">
            <span class="class-name">快餐</span>
            <span class="class-num">111</span>
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
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    NavBar
  },
  methods: {
    goBack () {
      this.$router.go(-1)
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

.screen-bar {
  margin-top: 45px;
  display: flex;
  height: 37px;
  background-color: #fff;
  border-bottom: 0.025rem solid #f1f1f1;
  position: fixed;
  left: 0;
  right: 0;
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
  margin-top: 82px;
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
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        .class-name {
          font-size: 12px;
          color: #666;
        }
        .class-num {
          background-color: #ccc;
          font-size: 9px;
          color: #fff;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 18px;
          vertical-align: middle;
          height: 12px;
          display: flex;
          align-items: center;
        }
      }
    }
    .box-right {
      background-color: #fff;
      .item {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #e4e4e4;
      }
    }
  }
}
</style>
