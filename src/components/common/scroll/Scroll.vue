<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
        observeDom:true,
        observeImage:true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
    })

    this.scroll.on('scroll' , (position) =>{
      /*console.log(position)*/
      this.$emit('contentScroll',position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time = 300) {
      this.scroll.scrollTo(x,y,time)
    },
    finishUp() {
      this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll.y
    },
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
</style>
