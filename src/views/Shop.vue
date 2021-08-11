<template>
  <div>
    <van-icon name="arrow-left" class="go-back" size="30" />
    <div class="shop-header">
      <div class="shop-info">
        <div class="shop-info-logo">
          <img src="../assets/image/shop-img.jpg" alt="" />
        </div>
        <div class="shop-info-center">
          <div class="h1">蜜雪冰城</div>
          <div class="peisong">xxxxxxxxxxx</div>
          <div class="message">xxxxxxxxxxxxxxx</div>
        </div>
        <div class="shop-info-right">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="shop-live">
        <div class="left">
          <span class="logo">减</span>
          <span>xxxxxxxxx</span>
        </div>
        <div class="right"><span>xxxxxxx</span><van-icon name="arrow" /></div>
      </div>
    </div>
    <!-- 商品评价切换栏 -->
    <div class="shop-evaluate">
      <div class="shop">商品</div>
      <div class="evaluate">评价</div>
    </div>

    <div class="shop-list">
      <div class="left">
        <div class="item-title active" @click="go('a')">测试1</div>
        <div class="item-title" @click="go('b')">测试2</div>
      </div>
      <div class="right">
        <div class="item-box">
          <div class="item-title" id="a">测试aaaa</div>
          <div class="item-container">
            <div class="item">
              <div class="logo">
                <img src="" alt="" />
              </div>
              <div class="info">
                <div class="h1">ddd</div>
                <div class="yueshou">xxxxxxx</div>
                <div>$3333</div>
              </div>
              <div class="add-icon-box">
                <div class="add-icon">+</div>
              </div>
            </div>
          </div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title" id="b">测试bbb</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title" id="">测试bbbbb</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title">测试xxx</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
          </div>
        </div>
        <div class="item-box">
          <div class="item-title" id="c">测试c</div>
          <div class="item-container">
            <div class="item">xxxxxxx</div>
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

    }
  },
  components: {
  },
  methods: {
    go (value) {
      document.querySelector('#' + value).scrollIntoView(true)
    }
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
      display: flex;
      justify-content: center;
      align-items: center;
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
      }
      .item-container {
        background-color: #fff;
        padding: 10px;
        border-bottom: 1px solid #f8f8f8;
      }
    }
  }
}
</style>>
