<template>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadSuccess">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: "HomeSwiper",
  data() {
    return {
      isImgLoad: false
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
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    loadSuccess() {
      if(!this.isImgLoad) {
        this.$emit('loadSuccess')
        this.isImgLoad = true
      }
    }
  }
}
</script>

<style scoped>
</style>
