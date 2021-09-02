import {request} from "./request";

export function getHomeMulidata() {
  return request({
    url: '/home/multidata'
  })
}
