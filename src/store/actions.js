import {ADD_COUNT,ADD_TO_CAR,CHANGE_CHECKED} from "./mutation-types";

export default {
  addCart(context,good) {
    /*let index = context.state.cartList.indexOf(good);
    console.log(index);
    if(index !== -1) {
      context.state.cartList[index].count++;
    }else {
      good.count = 1;
      context.state.cartList.push(good);
    }*/
    /*find方法参数为函数，找到第一个符合的值，若没有，则返回undefined*/
    let project = context.state.cartList.find(item => item.iid === good.iid);

    if(project) {
      context.commit(ADD_COUNT,project)
    }else {
      good.count = 1;
      good.isChecked =false;
      context.commit(ADD_TO_CAR,good);
    }
  },
  changeChecked(context,iid) {
    let project = context.state.cartList.find(item => item.iid ===iid);

    context.commit(CHANGE_CHECKED,project);
  }
}
