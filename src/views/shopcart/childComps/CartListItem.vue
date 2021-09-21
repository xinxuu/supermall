<template>
  <div id="cartListItem">
      <div class="good-select">
        <check-button @changeChecked="changeChecked" :is-checked="cartGood.isChecked"/>
      </div>
      <div class="good-image">
        <img :src="cartGood.image"/>
      </div>
      <div class="good-info">
        <div class="good-title">{{cartGood.title}}</div>
        <div class="good-desc">{{cartGood.desc}}</div>
        <div class="good-rest">
          <div class="good-price">￥{{cartGood.price}}</div>
          <div class="good-count">✖{{cartGood.count}}</div>
        </div>
      </div>
  </div>
</template>
<script>
import DetailBotBar from "../../detail/childComps/DetailBotBar";
import CheckButton from "./CheckButton";

export default {
  name: "CartListItem",
  components: {
    DetailBotBar,
    CheckButton,
  },
  props: {
    cartGood: {
      type: Object,
      default() {
        return []
      }
    }
  },
  methods: {
    changeChecked() {
      this.$store.dispatch('changeChecked',this.cartGood.iid);
    }
  }
}
</script>

<style lang="less" scoped>
#cartListItem {
  position: relative;
  display: flex;
  width: 100%;
}
.good-select {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.good-image {
  padding: 2px 0px;
  flex: 2;
  img {
    width: 90%;
    border-radius: 10%;
  }
}
.good-info {
  flex: 5;
  padding: 10px;
}
.good-title {
  font-size: 16px;
  letter-spacing: 1px;
}
.good-desc {
  margin-top: 5px;
  font-size: 12px;
}
.good-title,.good-desc{
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.good-rest {
  position: absolute;
  bottom: 3px;
  display: flex;
  .good-price {
    color: orangered;
  }
  .good-count {
     position: fixed;
     right: 15px;
     text-align: right;
  }
}
</style>
