<template>
  <div id="home">
    <div class="home-nav">
      <nav-bar><template v-slot:center>购物街</template></nav-bar>
    </div>
    <tab-control class="tab-control"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="control1"
                 v-show="iscontrol1show"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            pull-up-load="true"
            @contentScroll="contentScroll"
            @pullingUp="pullingUp">
      <home-swiper :banners="banners" @loadSuccess="caloffsetTop"/>
      <home-recommend :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="control2"/>
      <goods-list :goods="goods[curType].list"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isBackTopshow"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backtop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatureView from "./childComps/FeatureView";

import {getHomeMulidata,getHomeGoods} from "../../network/home";
import {deBounce} from "../../common/untils";

import {ImgLoadListener,BackTopListener} from "../../common/mixins";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [ImgLoadListener,BackTopListener],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop' : {page: 0, list: []},
        'new' : {page: 0, list: []},
        'sell' : {page: 0, list: []},
      },
      curIndex: 0,
      curType: 'pop',
      iscontrol1show: false,
      OffsetTop: 0,
      saveTop: 0,
    }
  },
  created() {
    this.getHomeMulidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
  },
  methods: {
    getHomeMulidata() {
      getHomeMulidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishUp()
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.curType = 'pop'
          break;
        case 1:
          this.curType = 'new'
          break;
        case 2:
          this.curType = 'sell'
          break;
      }
      this.$refs.control1.currentIndex = index;
      this.$refs.control2.currentIndex = index;
    },
    contentScroll(position) {
      this.backTopShow(position);

      this.iscontrol1show = -position.y >= this.OffsetTop;
    },
    pullingUp() {
      this.getHomeGoods(this.curType);
    },
    caloffsetTop() {
      /*组件中不能直接取元素，需要$el中获取元素*/
      /*console.log(this.$refs.control2.$el.offsetTop);*/
      this.OffsetTop = this.$refs.control2.$el.offsetTop
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0 , this.saveTop)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveTop = this.$refs.scroll.getScrollY()
  },
  destroyed() {
    this.$bus.$off('ImgSuccess',this.imgListener)
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  z-index: 9;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}

.tab-control {
  position: sticky;
  top: 44px;
}

.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
</style>
