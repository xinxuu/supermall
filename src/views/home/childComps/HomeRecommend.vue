<template>
  <div id="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
#recommend {
  display: flex;
  padding: 10px 0px 20px;

  border-bottom: 5px solid #eee;
}

.recommend-item {
  flex: 1;
  text-align: center;
}

.recommend-item img {
  height: 70px;
  width: 70px;
  margin-bottom: 3px;
}
</style>
