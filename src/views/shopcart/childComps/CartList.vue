<template>
  <div id="cart-list">
    <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in goods"
                        :key="index"
                        :cart-good="item"/>
    </scroll>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import Scroll from "../../../components/common/scroll/Scroll";
import {mapGetters} from "vuex"

export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll,
  },
  props: {
    cartGoods: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapGetters({
      goods: 'shopGoods',
    })
  },
  activated() {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
#cart-list {
  height: calc(100% - 44px - 49px)
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
