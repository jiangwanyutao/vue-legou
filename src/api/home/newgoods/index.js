import request from "@/api/request"
// 首页新品首发与人气推荐
function goodsList(data) {
  return request({
    method: 'get',
    url: '/goods/goodsList',
    params: data
  })
}

export {
  goodsList
}
