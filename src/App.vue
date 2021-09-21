<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="detail">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <MainTabBar/>
  </div>
</template>

<script>

import MainTabBar from "./components/content/maintabbar/MainTabBar";

export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>
