<template>
  <!-- 导航栏 -->
  <div class="nav-bar">
    <slot name="nav-home"></slot>
    <slot name="nav-login"></slot>

    <slot name="nav-goback"></slot>
    <slot name="nav-title"></slot>
    <slot name="nav-tohome"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.nav-bar {
  width: 100%;
  height: 45px;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  color: #fff;
}
</style>
