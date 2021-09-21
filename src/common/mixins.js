import {deBounce} from "./untils";
import BackTop from "../components/content/backtop/BackTop";

export const ImgLoadListener = {
  data() {
    return {
      imgListener: null,
    }
  },
  mounted() {
    const refresh = deBounce(this.$refs.scroll.refresh,500)
    this.imgListener = () => {refresh()}
    this.$bus.$on('ImgSuccess',this.imgListener)
  }
}

export const BackTopListener = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTopshow: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0,0)
    },
    backTopShow(position) {
      this.isBackTopshow = -position.y > 500;
    }
  }
}
