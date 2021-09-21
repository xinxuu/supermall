import {ADD_COUNT,ADD_TO_CAR,CHANGE_CHECKED} from "./mutation-types";

export default {
  [ADD_COUNT](state,good) {
    good.count++;
  },
  [ADD_TO_CAR](state,good) {
    state.cartList.push(good);
  },
  [CHANGE_CHECKED](state,good) {
    good.isChecked = !good.isChecked;
  }
}
