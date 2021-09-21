<template>
  <div id="checkButton">
    <img src="~assets/img/cart/tick.svg" :class="{checked: isChecked}" @click="changeChecked"/>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    changeChecked() {
      this.$emit('changeChecked');
    }
  }
}
</script>

<style scoped>
#checkButton img{
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checked {
  border-color: red;
  background-color: red;
}
</style>
