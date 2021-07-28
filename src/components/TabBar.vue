<template>
  <div class="footer-nav">
    <div>
      <van-icon name="home-o" color="#1989fa" size="20" />
      <p>外卖</p>
    </div>
    <div>
      <van-icon name="search" color="#1989fa" size="20" />
      <p>搜索</p>
    </div>
    <div>
      <van-icon name="orders-o" size="20" />
      <p>订单</p>
    </div>
    <div>
      <van-icon name="contact" size="20" />
      <p>我的</p>
    </div>
  </div>
</template>

<script>
import Icon from 'vant/lib/icon'
import 'vant/lib/icon/style'

export default {
  data () {
    return {

    }
  },
  components: {
    [Icon.name]: Icon
  }

}
</script>

<style lang="less" scoped>
.footer-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  height: 45px;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
    }
    p {
      font-size: 11px;
    }
  }
}
</style>
