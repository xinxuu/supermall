export default {
  goodsNums(state) {
    return state.cartList.length;
  },
  shopGoods(state) {
    return state.cartList;
  },
}
