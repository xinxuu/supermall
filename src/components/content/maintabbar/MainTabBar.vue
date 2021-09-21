<template>
  <div>
    <tab-bar>
      <template v-slot:default>
        <tab-bar-item path="/home" active-color="red">
          <template v-slot:item-icon><img src="~assets/img/tabbar/home.png" slot="item-icon"/></template>
          <template v-slot:item-icon-active><img src="~assets/img/tabbar/home_active.png"></template>
          <template v-slot:item-text><div>主页</div></template>
        </tab-bar-item>
        <tab-bar-item path="/category" active-color="red">
          <template v-slot:item-icon><img src="~assets/img/tabbar/category.png"/></template>
          <template v-slot:item-icon-active><img src="~assets/img/tabbar/category_active.png"></template>
          <template v-slot:item-text><div>分类</div></template>
        </tab-bar-item>
        <tab-bar-item path="/shopcart" active-color="red">
          <template v-slot:item-icon><img src="~assets/img/tabbar/shopcart.png"/></template>
          <template v-slot:item-icon-active><img src="~assets/img/tabbar/shopcart_active.png"></template>
          <template v-slot:item-text><div>购物车</div></template>
        </tab-bar-item>
        <tab-bar-item path="/profile" active-color="red">
          <template v-slot:item-icon><img src="~assets/img/tabbar/profile.png"/></template>
          <template v-slot:item-icon-active><img src="~assets/img/tabbar/profile_active.png"></template>
          <template v-slot:item-text><div>其他</div></template>
        </tab-bar-item>
      </template>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "../../common/tabbar/TabBar"
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
