<template>
  <div id="detailNavBar">
    <nav-bar>
      <template v-slot:left>
        <div @click="pushback">
          <img src="~assets/img/common/fanhui.png" class="backimg">
        </div>
      </template>
      <template v-slot:center>
        <div class="center">
          <div v-for="(item,index) in titles" class="center-item"
               :class="{active: index === currentIndex}"
               @click="changetitles(index)">
            <span>{{item}}</span>
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
import TabControl from "../../../components/content/tabControl/TabControl";

export default {
  name: "detailNavBar",
  components: {
    NavBar,
    TabControl,
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
    }
  },
  props: {
    currentIndex: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  methods: {
    pushback() {
      this.$router.back();
    },
    changetitles(index) {
      this.$emit('changeContent',index);
    }
  }
}
</script>

<style scoped>
.backimg {
  height: 40px;
  margin-top: 3px;
}
.center {
  display: flex;
}
.center-item {
  flex: 1;
}
#detailNavBar {
  background-color: var(--color-tint);
  color: #ffffff;
}
.active {
  color: firebrick;
}
.active span {
  border-bottom: 2px solid firebrick;
  padding: 3px;
}
</style>
