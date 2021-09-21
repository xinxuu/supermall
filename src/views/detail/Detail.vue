<template>
  <div id="detail">
    <detail-nav-bar ref="nav"
                    @changeContent="changeContent"
                    :current-index="currentIndex"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="false"
            @contentScroll="contentScroll">
      <detail-swiper :banners="topbar" ref="swiper"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="goodsInfo" @imgLoad="ImgRefresh"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommendInfo" ref="recommend"/>
    </scroll>
    <back-top v-show="isBackTopshow" @click.native="backTop"/>
    <detail-bot-bar @addCart="addCart"/>
  </div>
</template>

<script>
import Scroll from "../../components/common/scroll/Scroll";
import GoodsList from "../../components/content/goods/GoodsList";
import {getGoods,getRecommend} from "../../network/detail";
import BackTop from "../../components/content/backtop/BackTop";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBotBar from "./childComps/DetailBotBar";

import {ImgLoadListener,BackTopListener} from "../../common/mixins";

import {Goods,Shop,Param} from "../../network/detail";

export default {
  name: "detail",
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBotBar,
  },
  mixins: [ImgLoadListener,BackTopListener],
  data() {
    return {
      iid: null,
      topbar: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: [],
      recommendInfo: [],
      currentIndex: 0,
      themeTop: [],
      imgLength: 0,
      imgCnt: 0,
    }
  },
  created() {
    this.iid = this.$route.params.iid
    this.getGoods()
    this.getRecommend()
  },
  mounted() {

  },
  methods: {
    getGoods() {
      getGoods(this.iid).then(res => {
        const data = res.result;
        this.topbar = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo);
        this.shop = new Shop(data.shopInfo);
        this.goodsInfo = data.detailInfo;
        this.paramInfo = new Param(data.itemParams.info,data.itemParams.rule);
        this.commentInfo = data.rate.list;
        this.imgLength = this.goodsInfo.detailImage[0].list.length;
      })
    },
    getRecommend(){
      getRecommend().then(res => {
        this.recommendInfo = res.data.list;
      })
    },
    ImgRefresh() {
      if(++this.imgCnt == this.imgLength){
        this.$refs.scroll.refresh();
        this.themeTop.push(this.$refs.swiper.$el.offsetTop);
        this.themeTop.push(this.$refs.param.$el.offsetTop);
        this.themeTop.push(this.$refs.comment.$el.offsetTop);
        this.themeTop.push(this.$refs.recommend.$el.offsetTop);
        this.themeTop.push(Number.MAX_VALUE);
      }
    },
    contentScroll(position) {
      const y=-position.y;
      this.backTopShow(position);
      for(let i=0;i<this.themeTop.length-1;i++) {
        if(i !== this.currentIndex && y >= this.themeTop[i] && y <this.themeTop[i+1]) {
          this.currentIndex = i;
        }
      }
    },
    changeContent(index) {
      this.$refs.scroll.scrollTo(0,-this.themeTop[index]);
    },
    addCart() {
      const good = {};
      good.image = this.topbar[0];
      good.title = this.goods.title;
      good.desc = this.goods.desc;
      good.price = this.goods.lowNowPrice;
      good.iid = this.iid;

      this.$store.dispatch('addCart',good);
    }
  }
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
}

.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  left: 0px;
  right: 0px;
  bottom: 49px;
}
</style>
