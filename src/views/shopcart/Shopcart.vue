<template>
  <div id="shopCart">
    <cart-nav-bar/>
    <cart-list :cart-goods="cartGoods"/>
  </div>
</template>

<script>
import CartNavBar from "./childComps/CartNavBar";
import CartList from "./childComps/CartList";

export default {
  name: "Shopcart",
  components: {
    CartNavBar,
    CartList,
  },
  computed: {
    cartGoods() {
      return this.$store.state.CartList;
    }
  },
}
</script>

<style scoped>
#shopCart {
  height: 100vh;
}
</style>
