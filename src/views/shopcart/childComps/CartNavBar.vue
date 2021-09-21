<template>
  <div id="CartNavBar">
    <nav-bar>
      <template v-slot:center>
        <span>购物车({{goodsNums}})</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

import {mapGetters} from 'vuex'

export default {
  name: "CartNavBar",
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['goodsNums'])
  }
}
</script>

<style scoped>
#CartNavBar {
  background-color: var(--color-tint);
  color: #ffffff;
  position: relative;
  z-index: 9;
}
</style>
