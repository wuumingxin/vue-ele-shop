<template>
  <div id="app">
    <router-view v-if="!$route.meta.keepAlive" />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
  </div>
</template>

<style lang="less">
</style>
