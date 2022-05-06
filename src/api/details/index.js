import request from "@/api/request"


// 商品详情接口
function detailaction(data) {
  return request({
    method: 'get',
    url: '/goods/detailaction',
    params:data
  })
}
//添加购物车
function addCart(data) {
  return request({
    method: 'post',
    url: '/cart/addCart',
    data
  })
}
// 添加收藏
function addcollect(data) {
  return request({
    method: 'post',
    url: '/collect/addcollect',
    data
  })
}

export {
  detailaction,
  addCart,
  addcollect
}