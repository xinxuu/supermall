import {request} from "./request";

export function getGoods(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend',
  })
}
//商品基本信息
export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    //标题
    this.title = itemInfo.title;
    //价格
    this.price = itemInfo.price;
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

export class Param {
  constructor(info,rule) {
    this.info  = info.set;
    this.rule = rule.tables;
  }
}
/*export class Goods() {

}*/
