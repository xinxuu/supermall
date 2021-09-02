<template>
  <div id="home">
    <div class="home-nav">
      <nav-bar><template v-slot:center>购物街</template></nav-bar>
    </div>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";

import {getHomeMulidata} from "../../network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMulidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
