<template>
  <Swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in banners" :key="index">
      <img :src="item" alt="" @load="loadSuccess">
    </swiper-item>
  </Swiper>
</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";

export default {
  name: "detailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isImgLoad: false,
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    loadSuccess() {
      if(!this.isImgLoad){
        this.isImgLoad = true;
        this.$emit('ImgisLoad');
        console.log(this.isImgLoad);
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 250px;
  overflow: hidden;
}
</style>
